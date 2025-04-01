import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import Accordion from "../Accordion";

const Section = styled.section`
  min-height: 100vh;
  height: auto;
  width: 100vw;
  background-color: ${(props) => props.theme.text};
  position: relative;
  color: ${(props) => props.theme.body};
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: uppercase;
  color: ${(props) => props.theme.body};

  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.carouselColor};
  width: fit-content;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;

  display: flex;
  justify-content: space-between;
  align-content: center;

  @media (max-width: 64em) {
    width: 80%;
  }
  @media (max-width: 48em) {
    width: 90%;
    flex-direction: column;

    & > *:last-child {
      & > *:first-child {
        margin-top: 0;
      }
    }
  }
`;
const Box = styled.div`
  width: 45%;
  @media (max-width: 64em) {
    width: 90%;
    align-self: center;
  }
`;

const Faq = () => {
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    let element = ref.current;

    ScrollTrigger.create({
      trigger: element,
      start: "bottom bottom",
      end: "bottom top",
      pin: true,
      pinSpacing: false,
      scrub: 1,
      // markers:true,
    });

    return () => {
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <Section ref={ref} id="faq">
      <Title>Faq</Title>

      <Container>
        <Box>
          <Accordion
            ScrollTrigger={ScrollTrigger}
            title="How do I play DAOdyssey?"
          >
            To play, you’ll need a Phantom Wallet, which allows you to store and
            manage your in-game assets. Simply connect your wallet, mint your
            first hero, and start your adventure!
          </Accordion>
          <Accordion
            ScrollTrigger={ScrollTrigger}
            title="Are my in-game assets truly mine?"
          >
            Yes! All game assets are NFTs, meaning you have full ownership and
            can trade them in our marketplace or with other players.
          </Accordion>
          <Accordion
            ScrollTrigger={ScrollTrigger}
            title="What can I do in the DAOdyssey world?"
          >
            You can embark on quests, strengthen your heroes, build and upgrade
            strongholds, trade NFTs, and earn rewards through various in-game
            activities.
          </Accordion>
        </Box>
        <Box>
          <Accordion
            ScrollTrigger={ScrollTrigger}
            title="Is DAOdyssey free to play?"
          >
            While some basic features may be free, acquiring certain heroes,
            strongholds, or items might require transactions on the Solana
            blockchain.
          </Accordion>
          <Accordion
            ScrollTrigger={ScrollTrigger}
            title="How do transactions work in DAOdyssey?
"
          >
            All in-game transactions, including buying and selling NFTs, use
            Solana (SOL) for gas fees and payments. Your Phantom Wallet will
            handle all transactions securely.
          </Accordion>
          <Accordion
            ScrollTrigger={ScrollTrigger}
            title="Can I earn real rewards by playing?
"
          >
            Yes! DAOdyssey features a Play-to-Earn model where players can earn
            rewards by completing quests, trading NFTs, and participating in
            special events.
          </Accordion>
        </Box>
      </Container>
    </Section>
  );
};

export default Faq;
