import React from 'react'; 
import {
    Container, 
    VideoWrapper, 
    Title, 
    Description,
    TextWrapper
} from "./videopageelements";

const Videopage = () => {
    return (
        <div>
            <Container>
                <VideoWrapper> 
                <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/578227462?h=a04379fb42"
            width="1000"
            height="500"
            border-radius="20px"
            frameBorder="0"
            allowFullScreen
          ></iframe>    
                </VideoWrapper>
                <TextWrapper>
                    <Description> ← Back to Episodes</Description>
                    <Title> Sanchit </Title>
                    <Description>The stakes are higher as Ms. Stoner's ailments worsen and the cat's sentience fades. 
                        Fefe tries to get her paws on more Skunky Smoke while Baxter discovers a mysterious world and 
                        Dave meets a new friend. </Description>
                </TextWrapper>
            </Container>
            
        </div>
    )
}

export default Videopage;
