import React from "react";
import styled from "styled-components";
import Post from "../Post-Image/index";
import PostV from "../Post-Video/index";

const Body = () => {
  const BodyContainer = styled.div`
    /* height: 100vh; */
  `;

  const BodyContent = styled.div`
    display: grid;
    /* grid-template-columns: 50vw 50vw; */
    align-items: center;
    justify-content: center;
  `;

  const Content = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
  `;

  const Para = styled.p`
    text-align: center;
    font-size: 4vh;
  `;
  return (
    <BodyContainer>
      {/* <Image src={homePage} /> */}
      <BodyContent>
        <Content>
          <Para>Welcome to Jorr Parivar</Para>
        </Content>
      </BodyContent>
    </BodyContainer>
  );
};

export default Body;
