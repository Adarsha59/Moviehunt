import React, { useState } from "react";
import "../style.scss";
import ContentWrapper from "../../../components/ContentWrapper/wrapper";
import useFetch from "../../../hooks/fetch";
import List from "../../../components/list/List";

const Watch = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const mediatype = "movie";

  const { data, loading } = useFetch(
   
    `/movie/top_rated?&page=${currentPage}`
    // `/discover/movie?region=IN&sort_by=popularity.desc&with_original_language=hi&page=${currentPage}`

  );
  
  
  //   /movie/{props.id}/recommendations4
  // movie/movie_id/recommendations?language=en-US&page=1
  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="trendingSection">
      <ContentWrapper>
        <span className="trendingText">Top Rated </span>
      </ContentWrapper>
      <ContentWrapper>
        {console.log("Total items in data:", data)}

        <List data={data?.results} mediatype={mediatype} loading={loading} />
        {!loading && (
          <button className="oi" onClick={handleNextPage}>
            Load More Trending Movie{" "}
          </button>
        )}
      </ContentWrapper>
    </div>
  );
};

export default Watch;
