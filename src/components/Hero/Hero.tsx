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

            {/* <p className="hero__subtitle">
              Качественный ремонт автомобилей отечественного производства и иномарок — это к нам!
              СТО «Центр Авто» выполняет следующие работы:
            </p> */}

            <div className="hero__features">
              <div className="hero__feature">
                <div className="hero__feature-icon">✓</div>
                <span>Компьютерная диагностика, диагностика двигателя, КПП, тормозной системы, диагностика подвески.</span>
              </div>
              <div className="hero__feature">
                <div className="hero__feature-icon">✓</div>
                <span>Техническое обслуживание автомобилей: замена масла, замена антифриза и технических жидкостей, замена воздушного фильтра, замена салонного фильтра.</span>
              </div>
              <div className="hero__feature">
                <div className="hero__feature-icon">✓</div>
                <span>Ремонт подвески, огромный спектр слесарных работ.</span>
              </div>
                            <div className="hero__feature">
                <div className="hero__feature-icon">✓</div>
                <span>Замена тормозных дисков и колодок, ремонт суппортов, замена тормозных трубок, замена тормозной жидкости.</span>
              </div>
                            <div className="hero__feature">
                <div className="hero__feature-icon">✓</div>
                <span>Замена сцепления и ремонт приводных валов. Замена масла КПП.</span>
              </div>
                            <div className="hero__feature">
                <div className="hero__feature-icon">✓</div>
                <span>Замена ремня ГРМ. Замена цепи ГРМ. Замена сальников, прокладок.</span>
              </div>
                            <div className="hero__feature">
                <div className="hero__feature-icon">✓</div>
                <span>Капитальный ремонт ДВС, КПП.</span>
              </div>
                            <div className="hero__feature">
                <div className="hero__feature-icon">✓</div>
                <span>Промывка форсунок и системы охлаждения, радиаторов охлаждения и отопления.</span>
              </div>
                                          <div className="hero__feature">
                <div className="hero__feature-icon">✓</div>
                <span>В наличии большой выбор тех. жидкостей, масел, фильтров, оригинальных и аналоговых запчастей.</span>
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
