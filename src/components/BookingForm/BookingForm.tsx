import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import './BookingForm.css';

interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  car: string;
  date: string;
  time: string;
  message: string;
}

const services = [
  'Диагностика автомобиля',
  'Ремонт двигателя',
  'Техническое обслуживание',
  'Кузовной ремонт',
  'Ремонт подвески',
  'Электрика и электроника',
  'Другое'
];

const timeSlots = [
  '09:00', '10:00', '11:00', '12:00', '13:00', 
  '14:00', '15:00', '16:00', '17:00', '18:00'
];

const BookingForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const sendToTelegram = async (data: FormData) => {
    // Здесь будет ваш Telegram Bot Token и Chat ID
    const BOT_TOKEN = 'YOUR_BOT_TOKEN';
    const CHAT_ID = 'YOUR_CHAT_ID';
    
    const message = `
🚗 *Новая заявка на запись в автосервис*

👤 *Клиент:* ${data.name}
📞 *Телефон:* ${data.phone}
📧 *Email:* ${data.email}
🔧 *Услуга:* ${data.service}
🚙 *Автомобиль:* ${data.car}
📅 *Дата:* ${data.date}
⏰ *Время:* ${data.time}
💬 *Комментарий:* ${data.message || 'Не указан'}
    `;

    try {
      const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: 'Markdown',
        }),
      });

      if (response.ok) {
        return true;
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending to Telegram:', error);
      return false;
    }
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Имитация отправки (замените на реальную отправку в Telegram)
    try {
      // const success = await sendToTelegram(data);
      
      // Для демонстрации используем setTimeout
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      reset();
      
      // Сброс статуса через 5 секунд
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  return (
    <section id="booking" className="booking section-padding">
      <div className="container">
        <motion.div 
          className="booking__header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg">Записаться в сервис</h2>
          <p className="text-lg booking__subtitle">
            Заполните форму, и мы свяжемся с вами для подтверждения записи
          </p>
        </motion.div>

        <div className="booking__content">
          <motion.div 
            className="booking__info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="heading-md">Почему выбирают нас?</h3>
            <div className="booking__benefits">
              <div className="booking__benefit">
                <div className="booking__benefit-icon">⚡</div>
                <div className="booking__benefit-content">
                  <h4>Быстрая диагностика</h4>
                  <p>Определим проблему за 30 минут</p>
                </div>
              </div>
              <div className="booking__benefit">
                <div className="booking__benefit-icon">🛡️</div>
                <div className="booking__benefit-content">
                  <h4>Гарантия качества</h4>
                  <p>1 год гарантии на все работы</p>
                </div>
              </div>
              <div className="booking__benefit">
                <div className="booking__benefit-icon">💰</div>
                <div className="booking__benefit-content">
                  <h4>Честные цены</h4>
                  <p>Никаких скрытых доплат</p>
                </div>
              </div>
              <div className="booking__benefit">
                <div className="booking__benefit-icon">🚗</div>
                <div className="booking__benefit-content">
                  <h4>Подменный автомобиль</h4>
                  <p>Бесплатно на время ремонта</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="booking__form-container"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="booking__form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Ваше имя *</label>
                  <input
                    type="text"
                    id="name"
                    className={`form-input ${errors.name ? 'form-input--error' : ''}`}
                    {...register('name', { required: 'Имя обязательно для заполнения' })}
                    placeholder="Введите ваше имя"
                  />
                  {errors.name && <span className="form-error">{errors.name.message}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Телефон *</label>
                  <input
                    type="tel"
                    id="phone"
                    className={`form-input ${errors.phone ? 'form-input--error' : ''}`}
                    {...register('phone', { 
                      required: 'Телефон обязателен для заполнения',
                      pattern: {
                        value: /^[\+]?[0-9\s\-\(\)]{10,}$/,
                        message: 'Введите корректный номер телефона'
                      }
                    })}
                    placeholder="+7 (900) 123-45-67"
                  />
                  {errors.phone && <span className="form-error">{errors.phone.message}</span>}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    className={`form-input ${errors.email ? 'form-input--error' : ''}`}
                    {...register('email', {
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Введите корректный email'
                      }
                    })}
                    placeholder="your@email.com"
                  />
                  {errors.email && <span className="form-error">{errors.email.message}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="service" className="form-label">Услуга *</label>
                  <select
                    id="service"
                    className={`form-input ${errors.service ? 'form-input--error' : ''}`}
                    {...register('service', { required: 'Выберите услугу' })}
                  >
                    <option value="">Выберите услугу</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                  {errors.service && <span className="form-error">{errors.service.message}</span>}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="car" className="form-label">Автомобиль *</label>
                <input
                  type="text"
                  id="car"
                  className={`form-input ${errors.car ? 'form-input--error' : ''}`}
                  {...register('car', { required: 'Укажите марку и модель автомобиля' })}
                  placeholder="Например: Toyota Camry 2018"
                />
                {errors.car && <span className="form-error">{errors.car.message}</span>}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="date" className="form-label">Дата *</label>
                  <input
                    type="date"
                    id="date"
                    className={`form-input ${errors.date ? 'form-input--error' : ''}`}
                    {...register('date', { required: 'Выберите дату' })}
                    min={getTomorrowDate()}
                  />
                  {errors.date && <span className="form-error">{errors.date.message}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="time" className="form-label">Время *</label>
                  <select
                    id="time"
                    className={`form-input ${errors.time ? 'form-input--error' : ''}`}
                    {...register('time', { required: 'Выберите время' })}
                  >
                    <option value="">Выберите время</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                  {errors.time && <span className="form-error">{errors.time.message}</span>}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Комментарий</label>
                <textarea
                  id="message"
                  className="form-input form-textarea"
                  {...register('message')}
                  placeholder="Опишите проблему или дополнительные пожелания"
                  rows={4}
                />
              </div>

              <button 
                type="submit" 
                className="btn btn-primary btn-lg booking__submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Отправляем...' : 'Записаться в сервис'}
              </button>

              {submitStatus === 'success' && (
                <div className="form-message form-message--success">
                  ✅ Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="form-message form-message--error">
                  ❌ Произошла ошибка при отправке. Попробуйте еще раз или позвоните нам.
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;


