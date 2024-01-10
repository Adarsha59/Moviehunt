// VideoPopup.js
import React from "react";

const VideoPopup = ({ show, setShow, videoId }) => {
    const handleClose = () => {
        setShow(false);
    };

    return (
        <div className={`videoPopup ${show ? "show" : ""}`}>
            <div className="popupContent">
                <span className="closeIcon" onClick={handleClose}>
                    &times;
                </span>
                {/* Use the provided link to embed the video */}
                <iframe
                    title="Video"
                    width="560"
                    height="315"
                    // src={`https://embed.smashystream.com/playere.php?imdb=${videoId}`}
                    src={"https://embed.smashystream.com/playere.php?imdb=tt9288030"}
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default VideoPopup;
