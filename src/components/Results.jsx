import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Loading from './Loading';
import { useResultContext } from './ResultContextProvider';

const Results = () => {
  const { getResults, results, isLoading } = useResultContext();
  const location = useLocation();

  useEffect(() => {
    getResults('?query=google&limit=14');
  }, []);

  if (isLoading) {
    return <Loading />;
  }


  return (
    <div className="resultContainer grid">
      {results?.results?.map(({ url, title }, position) => (
        <div className="result flex" key={position}>
          <a href={url} target="_blank" rel='noreferrer'>
            <span className="text">
              {url.length > 30 ? url.substring(0, 30) : url}
            </span>
            <h2>{title}</h2>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Results;
