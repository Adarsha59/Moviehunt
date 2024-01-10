import React, { useRef } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs, { Dayjs } from "dayjs";

import Img from "../LazyLoad/image";

import PosterFallback from "../../assets/no-poster.png";

import "./style.scss";
import ContentWrapper from "../ContentWrapper/wrapper";

const List = ({ data, mediatype,loading }) => {
  const carouselContainer = useRef();
  const { url, url2 } = useSelector((state) => state.home);
  const navigate = useNavigate();
  const navigation = (dir) => {
    const container = carouselContainer.current;

    const scrollAmount =
        dir === "left"
            ? container.scrollLeft - (container.offsetWidth + 20)
            : container.scrollLeft + (container.offsetWidth + 20);

    container.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
    });
  };
  const skItem = () => {
    return (
      <div className="skeletonItem">
        <div className="posterBlock skeleton"></div>
        <div className="textBlock">
          <div className="title skeleton"></div>
          <div className="date skeleton"></div>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="main">
        <ContentWrapper>
          <BsFillArrowLeftCircleFill
            className="carouselLeftNav arrow"
            onClick={() => navigation("left")}
          />
          <BsFillArrowRightCircleFill
            className="carouselRighttNav arrow"
            onClick={() => navigation("right")}
          />
          {!loading ? (
            <div className="movieItem" ref={carouselContainer}>
              {data?.map((item) => {

                const posterUrl = item.poster_path
                  ? url.poster + item.poster_path
                  : PosterFallback;
                // Map genre_ids to genre names using url2
                // Map genre_ids to genre names using url2
               
                return (
                  
                  <div className="movieeItem" onClick={()=>navigate(`/${item?.title}/${item.id}`)} key={item.id}>
                    <div className="posterImg">
                      <Img src={posterUrl} />
                     

                    </div>
                    <div className="textItem">
                      <span className="title">{item.title || item.name}</span>{" "}
                      <span className="date">
                        {dayjs(item.release_Date).format("MMM DD YYYY")}
                      
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="loadskeleton">
              {skItem()}
              {skItem()}
              {skItem()}
              {skItem()}
              {skItem()}
              {skItem()}
              {skItem()}
            </div>
          )}
        </ContentWrapper>
      </div>
    </>
  );
};

export default List;
