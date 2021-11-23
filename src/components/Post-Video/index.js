import React from 'react';
import {
    Container, 
    ImgWrapper, 
    Img, 
    Title, 
    Description, 
    TextWrapper
} from "./elements";
import {  Button } from 'react-bootstrap';

import "./style.css";
import Image1 from "../../images/meme.png"; 
import Image2 from "../../images/gogo.jpeg"; 
import Image3 from "../../images/A.jpg"; 

var Video = "https://player.vimeo.com/video/578227462?h=a04379fb42"; 


const PostV = () => {
    return (
        <>
            <Container>

                <TextWrapper>
                <Title> Meme Contest </Title>
                </TextWrapper>

                <ImgWrapper>
                <iframe title="vimeo-player" 
                src={Video}
                width="600" height="360" frameborder="0" allowfullscreen></iframe>

                </ImgWrapper>

                <TextWrapper>
                    
                    <Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                    velit esse cillum dolore eu fugiat nulla pariatur.
                    </Description>

                    <Button className="button"> Book a Call </Button>
                    
                 </TextWrapper> 





            </Container>



        </>
    )
}

export default PostV;
