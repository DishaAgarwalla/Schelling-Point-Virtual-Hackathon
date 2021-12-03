import axios from "axios";
import React, { useState, useEffect } from "react";
import Post from "../components/Post-Image";
import PostV from "../components/Post-Video";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 40px;
`;

const Segment = ({ segment }) => {
  const [contents, setcontents] = useState([]);
  const displayPost = async () => {
    const url = `https://test-admin.kraznikunderverse.com/api/${segment}`;
    const options = {
      validate: "alpha romeo tango",
    };
    const { data } = await axios.post(url, options);
    console.log(data.data);
    setcontents(data.data);
  };

  useEffect(() => {
    displayPost();
  }, []);

  return (
    <Container>
      {contents
        .map((content, index) => {
          if (index == contents.length - 1) {
            return <PostV key={index} content={content} />;
          }
          if (content.img !== "") {
            return <Post key={index} content={content} video={false} />;
          } else if (content.video !== "") {
            return <Post key={index} content={content} video={true} />;
          }
        })
        .reverse()}
    </Container>
  );
};

export default Segment;
