import React, { useState } from "react";
import { motion } from "framer-motion";
import "./MapSection.css";
// Import SVG files as URLs
import timeIcon from "../../assets/svg/time.svg"
import locationIcon from "../../assets/svg/location.svg"
import phoneIcon from "../../assets/svg/phone.svg"

const MapSection: React.FC = () => {
  const [mapLoaded, setMapLoaded] = useState(false);

  // Координаты автосервиса в Чебоксарах
  const serviceCoordinates = [56.121898, 47.173304]; // [широта, долгота]

  const handleRouteClick = () => {
    const url = `https://yandex.ru/maps/?rtext=~${serviceCoordinates[0]},${serviceCoordinates[1]}`;
    window.open(url, "_blank");
  };

  const handleMapLoad = () => {
    setMapLoaded(true);
  };

  return (
    <section id="map" className="map-section section-padding">
      <div className="container">
        <motion.div
          className="map-section__header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg">Как нас найти</h2>
          <p className="text-lg map-section__subtitle">
            Мы находимся в удобном месте с хорошей транспортной доступностью
          </p>
        </motion.div>

        <div className="map-section__content">
          <motion.div
            className="map-section__info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="map-info">
              <h3 className="heading-md">Контакты</h3>

              <div className="contact-simple">
                <div className="contact-simple__item">
                  <span><img src={phoneIcon} alt="Телефон" className="contact-icon" /></span>
                  <a href="tel:+79276676985">+7 (8352) 37-10-21</a>
                </div>

                <div className="contact-simple__item">
                  <span><img src={locationIcon} alt="Адрес" className="contact-icon" /></span>
                  <p>г. Чебоксары, ул. Чернышевского 15</p>
                </div>

                <div className="contact-simple__item">
                  <span><img src={timeIcon} alt="Время работы" className="contact-icon" /></span>
                  <p>ПН-ПТ: 8:30 - 19:00</p>
                </div>
              </div>

            </div>
          </motion.div>

          <motion.div
            className="map-section__map"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="yandex-map-container">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=47.173304%2C56.121898&z=16&l=map&pt=47.173304%2C56.121898%2Cpm2rdm"
                width="100%"
                height="400"
                frameBorder="0"
                title="Карта автосервиса Центр Авто"
                className="yandex-map-iframe"
                onLoad={handleMapLoad}
              />

              {!mapLoaded && (
                <div className="map-loading">
                  <div className="map-loading__spinner"></div>
                  <p>Загрузка карты...</p>
                </div>
              )}

              <div className="map-overlay-controls">
                <button
                  className="btn btn-primary map-route-btn"
                  onClick={handleRouteClick}
                >
                  📍 Построить маршрут
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
