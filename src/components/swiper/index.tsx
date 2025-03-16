import { useState } from "react";

type CustomSwiperProps = {
  children: React.ReactNode[]; // Os slides (por exemplo, imagens ou cards)
};

export default function CustomSwiper({ children }: CustomSwiperProps) {
  const visiblePages = 2; // Número de "páginas" visíveis
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalPages = Math.ceil(children.length / visiblePages); // Número total de "páginas"

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative flex px-24 justify-center items-center h-full w-full overflow-hidden">
      {/* Swiper Container */}
      <div
        className="flex transition-transform duration-500"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          width: `${totalPages * 100}%`, // Largura total baseada nas páginas
          gap: "20px", // Espaço entre slides
        }}
      >
        {children.map((child, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[calc(100%/2)] transition-transform duration-500"
          >
            {child}
          </div>
        ))}
      </div>

      {/* Botões de Navegação */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-2 rounded-full z-10"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-2 rounded-full z-10"
      >
        &gt;
      </button>

      {/* Indicadores (bolinhas) */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
