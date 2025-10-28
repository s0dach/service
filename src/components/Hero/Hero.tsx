import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";

// Импорт изображений
import CarImage from "../../assets/images/hero/car.png";

const Hero: React.FC = () => {
  const scrollToBooking = () => {
    const element = document.getElementById("quick-booking");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero__background">
        <div className="hero__overlay"></div>
      </div>

      <div className="container">
        <div className="hero__content">
          <motion.div
            className="hero__text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="hero__badge">
              <span className="hero__badge-text">ПРОФЕССИОНАЛЬНЫЙ СЕРВИС</span>
            </div>

            <h1 className="hero__title">
              АВТОСЕРВИС <span className="hero__title-accent">Центр Авто</span>
            </h1>

            <div className="hero__divider"></div>

            <p className="hero__subtitle">
              Автосервис Чебоксары на Чернышевского 15. Ремонт двигателя, замена ГРМ, помпы, термостата, радиатора, масла. 
              Шиномонтаж Чернышевского. Промывка печки и радиатора. Финская долина, Эльменя, Энтузиастов, Чапаевский посёлок. 
              Гарантия 12 месяцев.
            </p>

            <div className="hero__features">
              <div className="hero__feature">
                <div className="hero__feature-icon">✓</div>
                <span>Диагностика за 30 минут</span>
              </div>
              <div className="hero__feature">
                <div className="hero__feature-icon">✓</div>
                <span>Гарантия 12 месяцев</span>
              </div>
              <div className="hero__feature">
                <div className="hero__feature-icon">✓</div>
                <span>Оригинальные запчасти</span>
              </div>
            </div>

            <div className="hero__stats">
              <div className="hero__stat">
                <div className="hero__stat-number">500+</div>
                <div className="hero__stat-label">КЛИЕНТОВ</div>
              </div>
              <div className="hero__stat">
                <div className="hero__stat-number">10</div>
                <div className="hero__stat-label">ЛЕТ ОПЫТА</div>
              </div>
              <div className="hero__stat">
                <div className="hero__stat-number">24/7</div>
                <div className="hero__stat-label">ПОДДЕРЖКА</div>
              </div>
            </div>

            <div className="hero__actions">
              <button
                onClick={scrollToBooking}
                className="btn btn-primary btn-lg"
              >
                Записаться в сервис
              </button>
              <a href="tel:+78352371021" className="btn btn-secondary btn-lg">
                +7 (8352) 37-10-21
              </a>
            </div>
          </motion.div>

          <motion.div
            className="hero__visual"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="hero__car-showcase">
              <motion.div
                className="hero__car-main"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <img
                  src={CarImage}
                  alt="Автомобиль в автосервисе Центр Авто в Чебоксарах - профессиональный ремонт и обслуживание"
                  className="hero__car-image"
                />
                <div className="hero__car-glow"></div>
              </motion.div>

              <div className="hero__visual-elements">
                <div className="hero__element hero__element--gear">⚙️</div>
                <div className="hero__element hero__element--wrench">🔧</div>
                <div className="hero__element hero__element--check">✓</div>
              </div>

              <div className="hero__background-pattern"></div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="hero__scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="hero__scroll-arrow"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
