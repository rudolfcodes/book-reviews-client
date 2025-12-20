import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import BaseButton from "./buttons/BaseButton";
import PrevIcon from "./icons/PrevIcon";
import NextIcon from "./icons/NextIcon";
import "swiper/css";
import "swiper/css/navigation";

interface CarouselProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  className?: string;
}

const Carousel = <T,>({ items, renderItem, className }: CarouselProps<T>) => {
  return (
    <div className="relative">
      <div className="flex gap-2 justify-end">
        <BaseButton className="swiper-button-prev-custom" type="button">
          <PrevIcon />
        </BaseButton>
        <BaseButton className="swiper-button-next-custom" type="button">
          <NextIcon />
        </BaseButton>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: ".swiper-button-prev-custom",
          nextEl: ".swiper-button-next-custom",
        }}
        className={className}
        spaceBetween={16}
        slidesPerView="auto"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index} style={{ width: "auto" }}>
            {renderItem(item)}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
