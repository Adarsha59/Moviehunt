// AllCards.js

import React from "react";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import PosterFallback from "../../assets/no-poster.png";
// import Img from "../LazyLoad/image";


import "./style.scss";
import ContentWrapper from "../../components/ContentWrapper/wrapper";

const explore = ({ data, loading }) => {
  return (
    <ContentWrapper>
      <div className="movie-list-container">
        <div className="movie-list">
          {data?.results.map((movie) => (
            <div key={movie.id} className="movie-card">
              <Img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                    : PosterFallback
                }
                alt={movie.title || movie.name}
                className="movie-image"
              />
              <div className="movie-details">
                hiobkli
                <div className="movie-title">{movie.title || movie.name}</div>
                <div className="movie-rating">{movie.vote_average}</div>
                <div className="movie-date">
                  {dayjs(movie.release_date).format("MMM D, YYYY")}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ContentWrapper>
  );
};

export default explore;
