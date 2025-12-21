import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import TitleContainer from "./TitleContainer";

interface CarouselProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  title?: string;
  showTitle?: boolean;
  className?: string;
}

const Carousel = <T,>({
  items,
  renderItem,
  title,
  showTitle = true,
  className,
}: CarouselProps<T>) => {
  return (
    <div
      style={{ width: "100%", maxWidth: "100%", minWidth: 0, marginTop: 20 }}
    >
      {showTitle && title && (
        <div className="mb-4">
          <TitleContainer title={title} className="text-font24 font-bold" />
        </div>
      )}

      <div style={{ width: "100%", overflow: "hidden", minWidth: 0 }}>
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".swiper-button-prev-custom",
            nextEl: ".swiper-button-next-custom",
          }}
          className={className}
          spaceBetween={16}
          watchOverflow={false}
          allowTouchMove={true}
          slidesPerView="auto"
        >
          {items.map((item, index) => (
            <SwiperSlide key={index} style={{ width: "auto" }}>
              {renderItem(item)}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
