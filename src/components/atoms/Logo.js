import React from "react";
import logo from "../../assets/img/Logo.png";
import styled from "styled-components";

const Icon = styled.img`
  width: 80px;
  height: auto;
  @media only screen and (max-width: 350px) {
    width: 70px;
  }
`;

const Logo = () => {
  return <Icon src={logo} alt="Logo" />;
};

export default Logo;
