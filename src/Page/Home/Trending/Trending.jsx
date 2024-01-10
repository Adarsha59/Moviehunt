import React, { useState } from "react";
import "../style.scss";
import ContentWrapper from "../../../components/ContentWrapper/wrapper";
import useFetch from "../../../hooks/fetch";
import List from "../../../components/list/List";

const Trending = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const mediatype = "movie";

  const { data, loading } = useFetch(
    `/trending/all/day?&page=${currentPage}`
  );

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    
    <div className="trendingSection">
      
      <ContentWrapper>
        <span className="trendingText">Trending </span>
      </ContentWrapper>
      <ContentWrapper>
        {console.log("Total items in data:", data)}

        <List data={data?.results} mediatype={mediatype} loading={loading} />
        {!loading && (
          <button className="oi" onClick={handleNextPage}>Load More Trending Movie </button>
        )}
      </ContentWrapper>
      <hr />
    </div>
  );
};

export default Trending;
