import React, { useState, useEffect } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/fetch";
import { useSelector } from "react-redux";
import Img from "../../../components/LazyLoad/image";
import ContentWrapper from "../../../components/ContentWrapper/wrapper";

const Herobanner = () => {
  const { data, loading } = useFetch("/movie/upcoming");
  const [query, setQuery] = useState("");
  const [background, setBackground] = useState("");
  const Navigate = useNavigate();
  const { url } = useSelector((state) => state.home);

  useEffect(() => {
    if (data?.results?.length > 0) {
      const bg =
        url.backdrop +
        data.results[Math.floor(Math.random() * data.results.length)]
          ?.backdrop_path;
      setBackground(bg);
    }
  }, [data, url]);

  const searchHandle = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      console.log("ok");
      Navigate(`/search/${query}`);
    } else {
      console.log("error");
    }
  };

  return (
    <div className="heroBanner">
      {!loading && (
        <div className="backdrop-img">
          <Img src={background} />
        </div>
      )}

      <div className="opacity-layer"></div>
      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Welcome.</span>
          <span className="subTitle">
            Millions of movies, TV shows and people to discover. Explore now.
          </span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for a movie or TV show...."
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchHandle}
            />
            <button>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Herobanner;
