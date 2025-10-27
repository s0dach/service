import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import "./QuickBooking.css";

// Импорт изображения
import QuickBookingImage from "../../assets/images/quickbooking/photo.png";

interface QuickFormData {
  name: string;
  phone: string;
  car: string;
  problem: string;
  consent: boolean;
}

const QuickBooking: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<QuickFormData>();

  // Маска для российского номера телефона
  const formatPhoneNumber = (value: string) => {
    // Удаляем все символы кроме цифр
    const phoneNumber = value.replace(/\D/g, "");

    // Если начинается с 8, заменяем на 7
    const normalizedNumber = phoneNumber.startsWith("8")
      ? "7" + phoneNumber.slice(1)
      : phoneNumber;

    // Применяем маску +7 (XXX) XXX-XX-XX
    if (normalizedNumber.length >= 1) {
      let formatted = "+7";
      if (normalizedNumber.length > 1) {
        formatted += ` (${normalizedNumber.slice(1, 4)}`;
        if (normalizedNumber.length > 4) {
          formatted += `) ${normalizedNumber.slice(4, 7)}`;
          if (normalizedNumber.length > 7) {
            formatted += `-${normalizedNumber.slice(7, 9)}`;
            if (normalizedNumber.length > 9) {
              formatted += `-${normalizedNumber.slice(9, 11)}`;
            }
          }
        }
      }
      return formatted;
    }
    return "+7";
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setValue("phone", formatted);
  };


  const sendToTelegram = async (data: QuickFormData) => {
    const BOT_TOKEN = "8364151395:AAFXDthIYzyv-XjwVRS-SGisci2Bd4nonIM";
    // Замените на ваш Chat ID или username бота
    const CHAT_ID = "-1003238787507"; // или ваш chat ID

    const message = `🚗 *Новая заявка*

👤 *Имя:* ${data.name}
📞 *Телефон:* ${data.phone}
🚙 *Автомобиль:* ${data.car}
🔧 *Проблема:* ${data.problem}
    `;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text: message,
            parse_mode: "Markdown",
          }),
        }
      );

      if (response.ok) {
        return true;
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending to Telegram:", error);
      return false;
    }
  };

  const onSubmit = async (data: QuickFormData) => {
    setIsSubmitting(true);

    try {
      // Отправка в Telegram
      const sent = await sendToTelegram(data);
      
      if (sent) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
      }

      // Сброс статуса через 5 секунд
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } catch (error) {
      setSubmitStatus("error");
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      id="quick-booking"
      className="quick-booking"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container">
        <div className="quick-booking__card">
          <div className="quick-booking__content">
            {/* Левая часть с текстом и изображением */}
            <div className="quick-booking__left">
              <motion.div
                className="quick-booking__text-block"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="quick-booking__urgent-title">
                  Нужен срочный ремонт автомобиля в Чебоксарах?
                </h4>
                <p className="quick-booking__urgent-text">
                  Не откладывайте! Запишитесь на бесплатную диагностику в автосервисе Центр Авто 
                  прямо сейчас. Наши мастера быстро определят проблему и предложат
                  оптимальное решение.
                </p>
              </motion.div>

              <motion.div
                className="quick-booking__image"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <img
                  src={QuickBookingImage}
                  alt="Срочный ремонт автомобиля в автосервисе Центр Авто в Чебоксарах - профессиональная диагностика и ремонт"
                  className="quick-booking__img"
                />
              </motion.div>
            </div>

            {/* Правая часть с формой */}
            <div className="quick-booking__right">
              <div className="quick-booking__header">
                <h3 className="quick-booking__title">
                  Запишись на бесплатный осмотр в автосервисе Центр Авто
                </h3>
                <p className="quick-booking__subtitle">
                  Мы перезвоним, ответим на все вопросы и запишем в сервис. 
                  Бесплатная диагностика, скидки на ремонт, гарантия качества.
                </p>
              </div>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="quick-booking__form"
              >
                <div className="quick-booking__fields">
                  <div className="quick-booking__field">
                    <input
                      type="text"
                      placeholder="Ваше имя"
                      className={`quick-booking__input ${
                        errors.name ? "quick-booking__input--error" : ""
                      }`}
                      {...register("name", {
                        required: "Имя обязательно для заполнения",
                      })}
                    />
                    {errors.name && (
                      <span className="quick-booking__error">
                        {errors.name.message}
                      </span>
                    )}
                  </div>

                  <div className="quick-booking__field">
                    <input
                      type="tel"
                      placeholder="+7 (000) 000-00-00"
                      className={`quick-booking__input ${
                        errors.phone ? "quick-booking__input--error" : ""
                      }`}
                      {...register("phone", {
                        required: "Телефон обязателен для заполнения",
                        pattern: {
                          value: /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
                          message: "Введите корректный номер телефона",
                        },
                      })}
                      onChange={handlePhoneChange}
                    />
                    {errors.phone && (
                      <span className="quick-booking__error">
                        {errors.phone.message}
                      </span>
                    )}
                  </div>

                  <div className="quick-booking__field">
                    <input
                      type="text"
                      placeholder="Марка и модель машины"
                      className={`quick-booking__input ${
                        errors.car ? "quick-booking__input--error" : ""
                      }`}
                      {...register("car", {
                        required: "Укажите марку и модель автомобиля",
                      })}
                    />
                    {errors.car && (
                      <span className="quick-booking__error">
                        {errors.car.message}
                      </span>
                    )}
                  </div>

                  <div className="quick-booking__field">
                    <textarea
                      placeholder="Опишите проблему"
                      className={`quick-booking__input quick-booking__textarea ${
                        errors.problem ? "quick-booking__input--error" : ""
                      }`}
                      rows={3}
                      {...register("problem", {
                        required: "Опишите проблему с автомобилем",
                      })}
                    />
                    {errors.problem && (
                      <span className="quick-booking__error">
                        {errors.problem.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="quick-booking__consent">
                  <label className="quick-booking__checkbox">
                    <input
                      type="checkbox"
                      {...register("consent", {
                        required: "Необходимо согласие на обработку данных",
                      })}
                    />
                    <span className="quick-booking__checkmark"></span>
                    <span className="quick-booking__consent-text">
                      Я даю согласие на обработку персональных данных с целью
                      консультации и/или записи в автосервис
                    </span>
                  </label>
                  {errors.consent && (
                    <span className="quick-booking__error">
                      {errors.consent.message}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  className="quick-booking__submit btn btn-primary btn-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "ОТПРАВЛЯЕМ..." : "ЗАПИСАТЬСЯ НА ОСМОТР"}
                </button>

                {submitStatus === "success" && (
                  <div className="quick-booking__message quick-booking__message--success">
                    ✅ Заявка отправлена! Мы свяжемся с вами в ближайшее время.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="quick-booking__message quick-booking__message--error">
                    ❌ Произошла ошибка. Попробуйте еще раз или позвоните нам.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default QuickBooking;
