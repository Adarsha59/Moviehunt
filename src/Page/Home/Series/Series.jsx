import React, { useState } from "react";
import "../style.scss";
import ContentWrapper from "../../../components/ContentWrapper/wrapper";
import useFetch from "../../../hooks/fetch";
import List from "../../../components/list/List";

const Series = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const mediatype = "movie";

  const { data, loading } = useFetch(
    `/trending/tv/day?&page=${currentPage}`
  );

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="trendingSection">
      <ContentWrapper>
        <span className="trendingText">Series </span>
      </ContentWrapper>
      <ContentWrapper>
        {console.log("Total items in data:", data)}

        <List data={data?.results} mediatype={mediatype} loading={loading} />
        {!loading && (
          <button className="oi" onClick={handleNextPage}>Load More Tv Shows </button>
        )}
      </ContentWrapper>
      
    </div>
  );
};

export default Series;
