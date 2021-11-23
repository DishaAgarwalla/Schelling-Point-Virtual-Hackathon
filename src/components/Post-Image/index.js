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

const Post = ({ content }) => {
  return (
    <>
      <Container>
        <TextWrapper>
          <Title>{content.title} </Title>
        </TextWrapper>

        <ImgWrapper>
          <Img src={content.img}></Img>
        </ImgWrapper>

        <TextWrapper>
          <Description>{content.description}</Description>
        </TextWrapper>
        <Button className="button"> Book a Call </Button>
      </Container>
    </>
  );
};

export default Post;
