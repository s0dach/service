import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Gallery.css";
// Импорт изображений
import galleryImage1 from "../../assets/images/gallery/1.jpg";
import galleryImage2 from "../../assets/images/gallery/2.jpg";

interface GalleryImage {
  id: number;
  title: string;
  category: string;
  placeholder: string;
  src?: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    title: "Автосервис Центр Авто",
    category: "equipment",
    placeholder: "Автосервис Центр Авто",
    src: galleryImage1,
  },
  {
    id: 2,
    title: "Ремонт автомобилей в Чебоксарах",
    category: "workspace",
    placeholder: "Ремонт автомобилей в Чебоксарах",
    src: galleryImage2,
  },
  {
    id: 3,
    title: "Фото добавим сюда",
    category: "repair",
    placeholder: "Фото добавим сюда",
  },
  {
    id: 4,
    title: "Фото добавим сюда",
    category: "equipment",
    placeholder: "Фото добавим сюда",
  },
  {
    id: 5,
    title: "Фото добавим сюда",
    category: "result",
    placeholder: "Фото добавим сюда",
  },
  {
    id: 6,
    title: "Фото добавим сюда",
    category: "team",
    placeholder: "Фото добавим сюда",
  },
];

const categories = [
  { id: "all", name: "Все фото" },
  { id: "equipment", name: "Оборудование" },
  { id: "workspace", name: "Рабочие места" },
  { id: "repair", name: "Ремонт" },
  { id: "result", name: "Результаты" },
  { id: "team", name: "Команда" },
];

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="gallery" className="gallery section-padding">
      <div className="container">
        <motion.div
          className="gallery__header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg">Наша галерея</h2>
          <p className="text-lg gallery__subtitle">
            Посмотрите на наше оборудование, рабочие места и результаты работы
          </p>
        </motion.div>

        <motion.div
          className="gallery__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          key={activeCategory}
        >
          <AnimatePresence mode="wait">
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                className="gallery__item"
                variants={itemVariants}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedImage(image)}
                layout
              >
                <div className="gallery__image-placeholder">
                  {image.src ? (
                    <img 
                      src={image.src} 
                      alt={image.title} 
                      className="gallery__image-real"
                    />
                  ) : (
                    <div className="gallery__image-content">
                      <div className="gallery__image-icon">📸</div>
                      <div className="gallery__image-text">
                        {image.placeholder}
                      </div>
                    </div>
                  )}
                  <div className="gallery__image-overlay">
                    <div className="gallery__image-title">{image.title}</div>
                    <div className="gallery__image-zoom">🔍</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Модальное окно */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="gallery__modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                className="gallery__modal-content"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="gallery__modal-close"
                  onClick={() => setSelectedImage(null)}
                >
                  ✕
                </button>
                <div className="gallery__modal-image">
                  {selectedImage.src ? (
                    <img 
                      src={selectedImage.src} 
                      alt={selectedImage.title} 
                      className="gallery__modal-real"
                    />
                  ) : (
                    <div className="gallery__modal-placeholder">
                      <div className="gallery__modal-icon">📸</div>
                      <div className="gallery__modal-text">
                        {selectedImage.placeholder}
                      </div>
                    </div>
                  )}
                </div>
                <div className="gallery__modal-info">
                  <h3>{selectedImage.title}</h3>
                  <p>
                    {selectedImage.src ? "Фото нашего автосервиса" : `Здесь будет ваша фотография: ${selectedImage.placeholder}`}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;
