import React, { useState } from "react";
import axios from "axios";
import VideoJS from "../VideoJS";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Card = styled(Link)`
  display: grid;
  height: 300px;
  width: 200px;
  border: 1px solid white;
`;

const RecordedSessions = ({ sessions }) => {
  //   const [sessions, setSessions] = useState([]);
  //   const fetchSessions = async () => {
  //     try {
  //       const url = `https://livepeer.com/api/stream/b8903d43-5dd2-4b70-8d82-1e4f40f9810a/sessions`;
  //       const options = {
  //         headers: {
  //           "content-type": "application/json",
  //           authorization: "Bearer 8dc398be-464b-448a-a377-b21e76da223b",
  //         },
  //       };
  //       const { data } = await axios.get(url, options);
  //       console.log(data);
  //       setSessions(data);
  //     } catch (err) {
  //       if (err) console.log(err);
  //     }
  //   };

  //   React.useEffect(() => {
  //     fetchSessions();
  //   }, []);
  return (
    <>
      <div>RecordedSessions</div>
      {sessions
        ? sessions.map((session, index) => {
            return <Card to={`pastSessions/${index + 1}`} />;
          })
        : null}
    </>
  );
};

export default RecordedSessions;
