import styled from "styled-components";

export const Container = styled.div`
  height: 600px;
  width: 600px;
  border: solid 2px white;
  color: white;
  /* display: flex;
  flex-direction: column; */
  display: grid;
  margin: 30px auto;
  justify-items: center;

  &:hover {
    cursor: pointer;
  }
`;

export const ImgWrapper = styled.div`
  /* display: center; */
  width: 600px;
  height: 400px;
  margin: auto;
  display: grid;
  justify-items: center;
`;

export const TextWrapper = styled.div`
  max-width: 600px;
`;

export const Img = styled.img`
  margin: auto;
  max-width: 100%;
`;

export const Title = styled.h1`
  font-family: Roboto;
  font-size: 45px;
  font-weight: bold;
  font-style: normal;
  text-align: center;
  color: white;
  margin: 10px 0 0 0;
`;

export const Description = styled.p`
  font-size: 15px;
  color: grey;
  text-align: center;
  margin: 0px 0 0 0;
  padding: 0 10px 0 10px;
`;
