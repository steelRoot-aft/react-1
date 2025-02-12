import sliderStyle from './slider.module.css';
import infoSlide from './infoSlide';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider = () => {
  return (
    <div className={sliderStyle.container}>
      <Swiper
        className={sliderStyle.body}
        modules={[Pagination, Navigation, Autoplay]}
        navigation
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          1023: {
            slidesPerView: 2.5,
            spaceBetween: 50,
          },
          767: {
            slidesPerView: 1.8,
            spaceBetween: 50,
          },
          424: {
            slidesPerView: 1.3,
            spaceBetween: 20,
          },
          320: {
            slidesPerView: 1.2,
            spaceBetween: 10,
          },
        }}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={3000}
      >
        {infoSlide.map((item, index) => {
          return (
            <SwiperSlide className={sliderStyle.slide} key={index}>
              <div className={sliderStyle.comment}>
                <p>{item.comment}</p>
                <span className={sliderStyle.triangle}></span>
              </div>
              <div className={sliderStyle.name}>
                <h4>{item.name}</h4>
                <p>{item.position}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;

{
  /* <Swiper
        className={sliderStyle.body}
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={60}
        slidesPerView={2.3}
        navigation
        pagination={{ clickable: true}}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={6000}
        loop={true}
      >
        <SwiperSlide className={sliderStyle.slide}>
          <div className={sliderStyle.comment}>
            <p>
              "We have been working with Positivus for the past year and have
              seen a significant increase in website traffic and leads as a
              result of their efforts. The team is professional, responsive, and
              truly cares about the success of our business. We highly recommend
              Positivus to any company looking to grow their online presence."
            </p>
          </div>
          <div className={sliderStyle.name}>
            <h4>John Smith</h4>
            <p>Marketing Director at XYZ Corp</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={sliderStyle.slide}>
          <div className={sliderStyle.comment}>
            <p>
              "We have been working with Positivus for the past year and have
              seen a significant increase in website traffic and leads as a
              result of their efforts. The team is professional, responsive, and
              truly cares about the success of our business. We highly recommend
              Positivus to any company looking to grow their online presence."
            </p>
          </div>
          <div className={sliderStyle.name}>
            <h4>John Smith</h4>
            <p>Marketing Director at XYZ Corp</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={sliderStyle.slide}>
          <div className={sliderStyle.comment}>
            <p>
              "We have been working with Positivus for the past year and have
              seen a significant increase in website traffic and leads as a
              result of their efforts. The team is professional, responsive, and
              truly cares about the success of our business. We highly recommend
              Positivus to any company looking to grow their online presence."
            </p>
          </div>
          <div className={sliderStyle.name}>
            <h4>John Smith</h4>
            <p>Marketing Director at XYZ Corp</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={sliderStyle.slide}>
          <div className={sliderStyle.comment}>
            <p>
              "We have been working with Positivus for the past year and have
              seen a significant increase in website traffic and leads as a
              result of their efforts. The team is professional, responsive, and
              truly cares about the success of our business. We highly recommend
              Positivus to any company looking to grow their online presence."
            </p>
          </div>
          <div className={sliderStyle.name}>
            <h4>John Smith</h4>
            <p>Marketing Director at XYZ Corp</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={sliderStyle.slide}>
          <div className={sliderStyle.comment}>
            <p>
              "We have been working with Positivus for the past year and have
              seen a significant increase in website traffic and leads as a
              result of their efforts. The team is professional, responsive, and
              truly cares about the success of our business. We highly recommend
              Positivus to any company looking to grow their online presence."
            </p>
          </div>
          <div className={sliderStyle.name}>
            <h4>John Smith</h4>
            <p>Marketing Director at XYZ Corp</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={sliderStyle.slide}>
          <div className={sliderStyle.comment}>
            <p>
              "We have been working with Positivus for the past year and have
              seen a significant increase in website traffic and leads as a
              result of their efforts. The team is professional, responsive, and
              truly cares about the success of our business. We highly recommend
              Positivus to any company looking to grow their online presence."
            </p>
          </div>
          <div className={sliderStyle.name}>
            <h4>John Smith</h4>
            <p>Marketing Director at XYZ Corp</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={sliderStyle.slide}>
          <div className={sliderStyle.comment}>
            <p>
              "We have been working with Positivus for the past year and have
              seen a significant increase in website traffic and leads as a
              result of their efforts. The team is professional, responsive, and
              truly cares about the success of our business. We highly recommend
              Positivus to any company looking to grow their online presence."
            </p>
          </div>
          <div className={sliderStyle.name}>
            <h4>John Smith</h4>
            <p>Marketing Director at XYZ Corp</p>
          </div>
        </SwiperSlide>
      </Swiper> */
}
