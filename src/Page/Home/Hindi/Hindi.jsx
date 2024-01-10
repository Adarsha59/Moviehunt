import React, { useState } from "react";
import "../style.scss";
import ContentWrapper from "../../../components/ContentWrapper/wrapper";
import useFetch from "../../../hooks/fetch";
import List from "../../../components/list/List";

const Hindi = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const mediatype = "movie";

  const { data, loading } = useFetch(
    `/discover/movie?region=IN&sort_by=popularity.desc&with_original_language=hi&page=${currentPage}`
  );

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="trendingSection">
      <ContentWrapper>
        <span className="trendingText">Hindi </span>
      </ContentWrapper>
      <ContentWrapper>
        {console.log("Total items in data:", data)}

        <List data={data?.results} mediatype={mediatype} loading={loading} />
        {!loading && (
          <button className="oi" onClick={handleNextPage}>Load More Hindi Movie </button>
        )}
      </ContentWrapper>
      <hr />

    </div>
  );
};

export default Hindi;
