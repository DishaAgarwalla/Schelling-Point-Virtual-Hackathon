import React from "react";
import {
  Container,
  ImgWrapper,
  Img,
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
        </TextWrapper>

        <ImgWrapper>
          <iframe
            title="vimeo-player"
            src={content.video}
            width="600"
            height="360"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </ImgWrapper>

        <TextWrapper>
          <Description>{content.description}</Description>

          {/* <Button className="button"> Book a Call </Button> */}
        </TextWrapper>
      </Container>
    </>
  );
};

export default PostV;
