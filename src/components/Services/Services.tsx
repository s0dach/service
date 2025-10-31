import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Services.css';

import Tormoz from "../../assets/images/services/_1-3.png.webp"
import Dvigatel from "../../assets/images/services/_1.png"
import Diagnostika from '../../assets/images/services/100-9_S.png'
import Kpp from '../../assets/images/services/b09b2a9s-960.jpg.webp'
import Toplivo from '../../assets/images/services/diploma.png.webp'
import Elektrika from '../../assets/images/services/i.png.webp'
import TechObsluj from '../../assets/images/services/noroot.png (1).webp'
import Vihlop from '../../assets/images/services/noroot.png.webp'
import Hodovka from '../../assets/images/services/photo.png.webp'
import Rulevoe from '../../assets/images/services/rul-min.png.webp'
import Ohlajdenie from '../../assets/images/services/XAAAAgPvseA-960.jpg.webp'
import Disk from '../../assets/images/services/disk.jpg'

interface Service {
  id: number;
  title: string;
  description: string;
  price: string;
  features: string[];
  image: string;
}

const services: Service[] = [
  {
    id: 1,
    title: 'РЕМОНТ ТОРМОЗНОЙ СИСТЕМЫ',
    description: 'Профессиональный ремонт тормозной системы в Чебоксарах. Диагностика, замена колодок и дисков, ремонт ABS',
    price: 'от 3 500 ₽',
    features: ['Замена тормозных колодок', 'Ремонт тормозных дисков', 'Замена тормозной жидкости', 'Диагностика ABS'],
    image: Tormoz
  },
  {
    id: 2,
    title: 'РЕМОНТ АВТОЭЛЕКТРИКИ',
    description: 'Диагностика и ремонт электрических систем автомобиля в автосервисе Центр Авто',
    price: 'от 2 000 ₽',
    features: ['Диагностика проводки', 'Ремонт генератора', 'Замена стартера', 'Установка сигнализации'],
    image: Elektrika
  },
  {
    id: 3,
    title: 'РЕМОНТ ВЫХЛОПНОЙ СИСТЕМЫ',
    description: 'Ремонт выхлопной системы в Чебоксарах. Замена глушителя, ремонт катализатора, сварка труб',
    price: 'от 4 000 ₽',
    features: ['Замена глушителя', 'Ремонт катализатора', 'Сварка выхлопной трубы', 'Диагностика системы'],
    image: Vihlop
  },
  {
    id: 4,
    title: 'РЕМОНТ РУЛЕВОГО УПРАВЛЕНИЯ',
    description: 'Ремонт рулевого управления в автосервисе Центр Авто. Развал-схождение, замена тяг',
    price: 'от 3 000 ₽',
    features: ['Замена рулевых тяг', 'Ремонт рулевой рейки', 'Замена наконечников', 'Развал-схождение'],
    image: Rulevoe
  },
  {
    id: 5,
    title: 'ЗАМЕНА ПОМПЫ',
    description: 'Автосервис замена помпы, термостата, радиатора в Чебоксарах. Промывка радиатора и печки. Эльменя, Энтузиастов, Финская долина',
    price: 'от 2 500 ₽',
    features: ['Замена радиатора', 'Ремонт помпы', 'Замена термостата', 'Промывка системы', 'Промывка печки', 'Промывка радиатора'],
    image: Ohlajdenie
  },
  {
    id: 6,
    title: 'РЕМОНТ ТОПЛИВНОЙ СИСТЕМЫ',
    description: 'Ремонт топливной системы автомобиля. Чистка форсунок, замена насоса, диагностика инжектора',
    price: 'от 3 500 ₽',
    features: ['Замена топливного насоса', 'Чистка форсунок', 'Замена топливного фильтра', 'Диагностика инжектора'],
    image: Toplivo
  },

  {
    id: 7,
    title: 'ДИАГНОСТИКА',
    description: 'Компьютерная диагностика автомобиля в Чебоксарах. Диагностика двигателя, электроники, анализ ошибок',
    price: 'от 500 ₽',
    features: ['Диагностика двигателя', 'Проверка электроники', 'Анализ ошибок', 'Отчет о состоянии'],
    image: Diagnostika
  },
  {
    id: 8,
    title: 'ТЕХНИЧЕСКОЕ ОБСЛУЖИВАНИЕ',
    description: 'Автосервис замена масла в Чебоксарах. ТО автомобиля, замена фильтров, диагностика. Финская долина, Эльменя, Энтузиастов, Чапаевский посёлок',
    price: 'от 4 000 ₽',
    features: ['Замена масла и фильтров', 'Проверка жидкостей', 'Диагностика систем', 'Профилактические работы'],
    image: TechObsluj
  },
  {
    id: 9,
    title: 'ШИНОМОНТАЖ',
    description: 'Автосервис шиномонтаж Чернышевского в Чебоксарах. Шиномонтаж эльменя, энтузиастов, юго-запад. Центр Авто на Чернышевского 23',
    price: 'от 1 500 ₽',
    features: ['Шиномонтаж легковых', 'Балансировка колес', 'Ремонт проколов', 'Замена шин'],
    image: Disk
  },
  {
    id: 10,
    title: 'РЕМОНТ ХОДОВОЙ',
    description: 'Ремонт ходовой части в автосервисе Центр Авто. Амортизаторы, подвеска, балансировка',
    price: 'от 1 000 ₽',
    features: ['Замена амортизаторов', 'Ремонт подвески', 'Замена сайлентблоков', 'Балансировка колес'],
    image: Hodovka
  },
  {
    id: 11,
    title: 'РЕМОНТ ДВИГАТЕЛЯ',
    description: 'Автосервис ремонт двигателя в Чебоксарах. Капитальный ремонт, замена деталей, диагностика мотора. Эльменя, Энтузиастов, Финская долина',
    price: 'от 20 000 ₽',
    features: ['Капитальный ремонт', 'Замена поршневой группы', 'Ремонт ГБЦ', 'Настройка систем', 'Замена ГРМ', 'Замена помпы', 'Замена термостата', 'Замена радиатора'],
    image: Dvigatel
  },
  {
    id: 7,
    title: 'РЕМОНТ ТРАНСМИССИИ',
    description: 'Ремонт коробки передач в Чебоксарах. МКПП, замена сцепления, диагностика КПП',
    price: 'от 15 000 ₽',
    features: ['Ремонт МКПП', 'Замена сцепления', 'Диагностика трансмиссии'],
    image: Kpp
  },
];

const Services: React.FC = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  const handlePrev = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };

  return (
    <section id="services" className="services section-padding">
      <div className="container">
        <motion.div 
          className="services__header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg">УСЛУГИ АВТОСЕРВИСА В ЧЕБОКСАРАХ</h2>
        </motion.div>

        <motion.div 
          className="services__slider-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="services__navigation">
            <button 
              className="services__nav-btn services__nav-btn--prev"
              onClick={handlePrev}
            >
              ←
            </button>
            <button 
              className="services__nav-btn services__nav-btn--next"
              onClick={handleNext}
            >
              →
            </button>
          </div>

          <Swiper
            onSwiper={setSwiperInstance}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              480: {
                slidesPerView: 1.5,
                spaceBetween: 15,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2.5,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 25,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            className="services__swiper"
          >
            {services.map((service) => (
              <SwiperSlide key={service.id}>
                <motion.div 
                  className="service-card"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="service-card__image">
                    <div className="service-card__image-placeholder">
                      <span className="service-card__image-text">
                        <img src={service.image} alt={service.title} className="service-card__image-img"/>
                      </span>
                    </div>
                    <div className="service-card__overlay">
                      <div className="service-card__price">{service.price}</div>
                    </div>
                  </div>
                  <div className="service-card__content">
                    <h3 className="service-card__title">{service.title}</h3>
                    <p className="service-card__description">{service.description}</p>
                    <ul className="service-card__features">
                      {service.features.map((feature, index) => (
                        <li key={index} className="service-card__feature">
                          <span className="service-card__feature-icon">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className="service-card__button btn btn-primary">
                      ЗАКАЗАТЬ УСЛУГУ
                    </button>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
{/* 
        <motion.div 
          className="services__cta text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="heading-md">Не нашли нужную услугу?</h3>
          <p className="text-lg">Свяжитесь с нами, и мы поможем решить любую проблему с вашим автомобилем</p>
          <a href="tel:+78352371021" className="btn btn-secondary btn-lg">
            Получить консультацию
          </a>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Services;
