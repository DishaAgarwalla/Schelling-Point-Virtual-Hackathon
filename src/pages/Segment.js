import axios from "axios";
import React, { useState, useEffect } from "react";
import Post from "../components/Post-Image";
import PostV from "../components/Post-Video";

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
    <div style={{ marginTop: "40px" }}>
      {contents
        .map((content, index) => {
          if (content.img !== "") {
            return <Post key={index} content={content} />;
          } else if (content.video !== "") {
            return <PostV key={index} content={content} />;
          }
        })
        .reverse()}
    </div>
  );
};

export default Segment;
