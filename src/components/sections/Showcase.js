import React, { useRef } from "react";
import styled, { keyframes } from "styled-components";

import ai16zCommon from "../../assets/Nfts/ai16z_common.png";
import ai16zRare from "../../assets/Nfts/ai16z_rare.png";
import ai16zEpic from "../../assets/Nfts/ai16z_epic.png";
import ai16zLegendary from "../../assets/Nfts/ai16z_legendary.png";
import ai16zMythical from "../../assets/Nfts/ai16z_mythical.png";
import drugsCommon from "../../assets/Nfts/drugs_common.png";
import drugsRare from "../../assets/Nfts/drugs_rare.png";
import drugsEpic from "../../assets/Nfts/drugs_epic.png";
import drugsLegendary from "../../assets/Nfts/drugs_legendary.png";
import drugsMythical from "../../assets/Nfts/drugs_mythical.png";
import Solana from "../../assets/solana.png";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.text};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  & > *:first-child {
    animation-duration: 20s;

    @media (max-width: 30em) {
      animation-duration: 15s;
    }
  }
  & > *:last-child {
    animation-duration: 15s;
    @media (max-width: 30em) {
      animation-duration: 10s;
    }
  }
`;
const move = keyframes`
0%{ transform: translateX(100%)   };
100%{ transform: translateX(-100%)   }

`;

const Row = styled.div`
  /* background-color: lightblue; */
  white-space: nowrap;
  box-sizing: content-box;
  margin: 2rem 0;
  display: flex;

  animation: ${move} linear infinite ${(props) => props.direction};
`;
const ImgContainer = styled.div`
  width: 15rem;
  margin: 0 1rem;
  background-color: ${(props) => props.theme.body};

  border-radius: 20px;
  cursor: pointer;

  @media (max-width: 48em) {
    width: 12rem;
  }
  @media (max-width: 30em) {
    width: 10rem;
  }

  img {
    width: 100%;
    height: auto;
  }
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 1rem;
  background-color: ${(props) => props.theme.text};
  border: 2px solid ${(props) => `rgba(${props.theme.bodyRgba},0.5)`};

  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  span {
    font-size: ${(props) => props.theme.fontsm};
    color: ${(props) => `rgba(${props.theme.bodyRgba},0.5)`};
    font-weight: 600;
    line-height: 1.5rem;
  }

  h1 {
    font-size: ${(props) => props.theme.fontmd};
    color: ${(props) => props.theme.body};
    font-weight: 600;

    @media (max-width: 30em) {
      font-size: ${(props) => props.theme.fontsm};
    }
  }
`;

const Price = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  img {
    width: 1rem;
    height: auto;
  }
`;

const NftItem = ({ img, number = 0, price = 0, passRef }) => {
  let play = (e) => {
    passRef.current.style.animationPlayState = "running";
  };
  let pause = (e) => {
    passRef.current.style.animationPlayState = "paused";
  };

  return (
    <ImgContainer onMouseOver={(e) => pause(e)} onMouseOut={(e) => play(e)}>
      <img width={500} height={400} src={img} alt="Heroes" />
      <Details>
        <div>
          <span>Heroes</span> <br />
          <h1>#{number}</h1>
        </div>

        <div>
          <span>Price</span>
          <Price>
            <img width={200} height={200} src={Solana} alt="Solana" />
            <h1>{Number(price).toFixed(1)}</h1>
          </Price>
        </div>
      </Details>
    </ImgContainer>
  );
};

const Showcase = () => {
  const Row1Ref = useRef(null);
  const Row2Ref = useRef(null);

  return (
    <Section id="showcase">
      <Row direction="none" ref={Row1Ref}>
        <NftItem img={ai16zCommon} number={852} price={1} passRef={Row1Ref} />
        <NftItem img={ai16zRare} number={123} price={1.2} passRef={Row1Ref} />
        <NftItem img={ai16zEpic} number={456} price={2.5} passRef={Row1Ref} />
        <NftItem
          img={ai16zLegendary}
          number={666}
          price={3.5}
          passRef={Row1Ref}
        />
        <NftItem
          img={ai16zMythical}
          number={452}
          price={4.7}
          passRef={Row1Ref}
        />
      </Row>
      <Row direction="reverse" ref={Row2Ref}>
        <NftItem img={drugsCommon} number={888} price={1.2} passRef={Row2Ref} />
        <NftItem img={drugsRare} number={211} price={3.2} passRef={Row2Ref} />
        <NftItem img={drugsEpic} number={455} price={1.8} passRef={Row2Ref} />
        <NftItem
          img={drugsLegendary}
          number={456}
          price={5.1}
          passRef={Row2Ref}
        />
        <NftItem
          img={drugsMythical}
          number={865}
          price={3.7}
          passRef={Row2Ref}
        />
      </Row>
    </Section>
  );
};

export default Showcase;
