import React from "react";
import {
  Container,
  ImgWrapper,
  Img,
  WatchNow,
  Title,
  Description,
  TextWrapper,
} from "./elements";
import { Button } from "react-bootstrap";

import "./style.css";
import Image1 from "../../images/meme.png";
import Image2 from "../../images/gogo.jpeg";
import Image3 from "../../images/A.jpg";

var Video = "https://player.vimeo.com/video/578227462?h=a04379fb42";

const PostV = ({ content }) => {
  return (
    <>
      <Container>
        <TextWrapper>
          <Title> {content.title} </Title>
          <Description>{content.description}</Description>
         <WatchNow >Watch Now</WatchNow>

          {/* <Button className="button"> Book a Call </Button> */}
        </TextWrapper>
        <ImgWrapper>
          <iframe
            title="vimeo-player"
            src={content.video}
            width="500"
            height="500"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </ImgWrapper>

      </Container>
    </>
  );
};

export default PostV;
