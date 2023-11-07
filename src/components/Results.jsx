import React, { useEffect } from 'react';
import { useResultContext } from './ResultContextProvider';
import ErrorDog from '../assets/ErrorDog.png';
import { useLocation } from 'react-router-dom';
import Loading from './Loading';

const Results = () => {
  const { getResults, results, isLoading } = useResultContext();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('query');

  useEffect(() => {
    if (searchQuery) {
      getResults(`?query=${searchQuery}&limit=15`);
      const newUrl = window.location.pathname;
      window.history.replaceState({}, '', newUrl);
    }
  }, [searchQuery]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="resultContainer grid">
      {results?.results?.map(({ title, url }, id) => (
        <div className="result flex" key={id}>
          <a href={url} target="_blank" rel="noreferrer">
            <span className="text">
              {url.length > 30 ? url.substring(0, 30) : url}
            </span>
            <h2>{title}</h2>
          </a>
        </div>
      ))}
      {results.message && (
        <div className="errorField flex">
          <div className="error-message">
            <h1>500 Service Error</h1>
            <p>This service is temporarily busy. Try again later.</p>
          </div>
          <img src={ErrorDog} alt="" />
        </div>
      )}
    </div>
  );
};

export default Results;