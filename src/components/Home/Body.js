import React from "react";
import styled from "styled-components";
import Videopage from "../VideoPage";

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

  const Container = styled.div`
    background-color: #1B1B1B;
    border-radius: 20px;
    height: 400px;
    width: 700px;
    margin: auto;
    padding: 40px 0 0 70px ;

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
          <Para>Welcome to JorrParivar Perks</Para>
          <Container>
          <iframe src="https://player.vimeo.com/video/653647466?h=a5c51b7b7d" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen ></iframe>
          </Container>
        </Content>
      </BodyContent>
      {/* <Videopage /> */}
    </BodyContainer>
  );
};

export default Body;
