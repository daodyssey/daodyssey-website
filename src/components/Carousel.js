import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay, EffectCards } from "swiper/modules";

import ai16zCommon from "../assets/Nfts/ai16z_common.png";
import ai16zRare from "../assets/Nfts/ai16z_rare.png";
import ai16zEpic from "../assets/Nfts/ai16z_epic.png";
import ai16zLegendary from "../assets/Nfts/ai16z_legendary.png";
import ai16zMythical from "../assets/Nfts/ai16z_mythical.png";
import drugsCommon from "../assets/Nfts/drugs_common.png";
import drugsRare from "../assets/Nfts/drugs_rare.png";
import drugsEpic from "../assets/Nfts/drugs_epic.png";
import drugsLegendary from "../assets/Nfts/drugs_legendary.png";
import drugsMythical from "../assets/Nfts/drugs_mythical.png";

import Arrow from "../assets/Arrow.svg";

const Container = styled.div`
  width: 25vw;
  height: 70vh;

  @media (max-width: 70em) {
    height: 60vh;
  }

  @media (max-width: 64em) {
    height: 50vh;
    width: 30vw;
  }
  @media (max-width: 48em) {
    height: 50vh;
    width: 40vw;
  }
  @media (max-width: 30em) {
    height: 45vh;
    width: 60vw;
  }

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    background-color: ${(props) => props.theme.carouselColor};

    border-radius: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
      display: block;
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }

  .swiper-button-next {
    color: ${(props) => props.theme.text};
    right: 0;
    width: 4rem;
    top: 60%;

    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;

    &:after {
      display: none;
    }

    @media (max-width: 64em) {
      width: 3rem;
    }
    @media (max-width: 30em) {
      width: 2rem;
    }
  }
  .swiper-button-prev {
    color: ${(props) => props.theme.text};
    left: 0;
    top: 60%;
    width: 4rem;
    transform: rotate(180deg);
    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;

    &:after {
      display: none;
    }
    @media (max-width: 64em) {
      width: 3rem;
    }
    @media (max-width: 30em) {
      width: 2rem;
    }
  }
`;

const Carousel = () => {
  return (
    <Container>
      <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          type: "fraction",
        }}
        scrollbar={{
          draggable: true,
        }}
        modules={[EffectCards, Pagination, Navigation, Autoplay]}
        navigation={true}
        effect={"cards"}
        grabCursor={true}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <img
            width={500}
            height={400}
            src={ai16zCommon}
            alt="Ai16z Common"
          />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img width={500} height={400} src={ai16zRare} alt="Ai16z Rare" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img width={500} height={400} src={ai16zEpic} alt="Ai16z Epic" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            width={500}
            height={400}
            src={ai16zLegendary}
            alt="Ai16z Legendary"
          />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            width={500}
            height={400}
            src={ai16zMythical}
            alt="Ai16z Mythical"
          />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            width={500}
            height={400}
            src={drugsCommon}
            alt="Drugs Common"
          />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img width={500} height={400} src={drugsRare} alt="Drugs Rare" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img width={500} height={400} src={drugsEpic} alt="Drugs Epic" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            width={500}
            height={400}
            src={drugsLegendary}
            alt="Drugs Legendary"
          />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            width={500}
            height={400}
            src={drugsMythical}
            alt="Drugs Mythical"
          />{" "}
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default Carousel;
