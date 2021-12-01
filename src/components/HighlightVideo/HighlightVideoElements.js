import styled from "styled-components"; 

export const Container = styled.div`
height: 500px;
width: 1000px;
border: solid 2px white;
color: white;
/* display: flex;
flex-direction: column; */
display: inline-block;
margin: auto;
justify-items: inline;

&:hover {
  cursor: pointer;
}


`;

export const LeftContainer = styled.div`
height: 400px;
width: 400px;
align-items: right;
background-color:white;
float: left;
/* display: inline-block; */
display: flex;
justify-content: center;
width: 55%;
/* padding-bottom: 40px; */
/* align-self: baseline; */

@media screen and (min-width: 1080px) {
  align-self: flex-end;
  padding-bottom: 15px;
}

@media screen and (max-width: 1080px) {
  margin-bottom: 20px;
  width: 400px;
  justify-self: center;
}

@media screen and (max-width: 600px) {
  height: 350px;
}

`;

export const RightContainer = styled.div`

height: 500px;
width: 400px;
align-items: right;
/* float: right; */
padding: 20px 0px;
/* margin: 0 0 0 20px; */

display: inline-block;
width: 30%;
@media screen and (max-width: 1080px) {
  padding: 20px 0px;
  width: 400px;
}
`; 

export const Title = styled.h1``;

export const Description = styled.p``;

export const WatchNow = styled.button``;