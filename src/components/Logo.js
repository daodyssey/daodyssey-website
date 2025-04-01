import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import daodyssey from "../assets/Nfts/daodyssey_logo.png";

const LogoText = styled.h1`
  font-family: "Akaya Telivigala", cursive;
  font-size: ${(props) => props.theme.fontxxxl};
  color: ${(props) => props.theme.text};
  transition: all 0.2s ease;
  position: relative;
  margin-top: 24px;
  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
`;

const Logo = () => {
  return (
    <LogoText>
      <Link to="/">
        <img width={100} height={100} src={daodyssey} alt="DAOdyssey" />
      </Link>
    </LogoText>
  );
};

export default Logo;
