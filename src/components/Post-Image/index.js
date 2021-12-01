import React from "react";
import {
  Container,
  ImgWrapper,
  Img,
  Title,
  Description,
  TextWrapper,
  OuterContainer,
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
        <ImgWrapper>
          <Img src={content.img}></Img>
        </ImgWrapper>

        <TextWrapper>
        <Title>{content.title} </Title>
          <Description>{content.description}</Description>
        </TextWrapper>
        {/* <Button className="button"> Book a Call </Button> */}
      </Container>
      
    </>
  );
};

export default Post;
