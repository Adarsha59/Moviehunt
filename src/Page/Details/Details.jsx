import React from "react";
import { useParams } from "react-router-dom";
import "./style.scss";
import useFetch from "../../hooks/fetch";

import VideoSection from "./VideoSection";
import ContentWrapper from "../../components/ContentWrapper/wrapper";
import Watch from "../Home/Watchit/Watch";

const Details = () => {
  const {  id } = useParams();
  const { data, loading } = useFetch(`/${id}`);
  // Assuming the API response includes videoName and videoURL

  let startParam = 1; // default value for 's'
  let endParam = 1; // default value for 'e'

  const videoURL0 = `https://www.2embed.cc/embedtvfull/${id}`;

  const videoURL1 = ` https://embed.smashystream.com/playere.php?tmdb=${id}`;

  const videoURL2 = ` https://multiembed.mov/directstream.php?video_id=${id}&tmdb=1`||
 ` https://multiembed.mov/se_player.php?video_id=${id}&tmdb=1&s=1&e=2`;
  // https://multiembed.mov/se_player.php?video_id=60625&tmdb=1&s=5&e=5


  return (
   
    <>
      <div>
        <h1>Player1</h1>
        <ContentWrapper>
          <div
            style={{
              position: "relative",
              paddingBottom: "56.25%",
              height: 0,
              overflow: "hidden",
            }}
          >
            <iframe
              title="Video"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: "1px solid #ccc",
                borderRadius: "8px",
              }}
              src={videoURL0}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </ContentWrapper>
      </div>
      <div>
        <h1>Player2</h1>

        <ContentWrapper>
          <div
            style={{
              position: "relative",
              paddingBottom: "56.25%",
              height: 0,
              overflow: "hidden",
            }}
          >
            <iframe
              title="Video"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: "1px solid #ccc",
                borderRadius: "8px",
              }}
              src={videoURL1}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </ContentWrapper>
      </div>
      <div>
      <h1>Player2</h1>

        <ContentWrapper>
          <div
            style={{
              position: "relative",
              paddingBottom: "56.25%",
              height: 0,
              overflow: "hidden",
            }}
          >
            <iframe
              title="Video"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: "1px solid #ccc",
                borderRadius: "8px",
              }}
              src={videoURL2}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </ContentWrapper>
      </div>
      
    </>
  );
};

export default Details;
