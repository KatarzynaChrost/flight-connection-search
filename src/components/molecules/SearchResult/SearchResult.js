import React from "react";
import { Wrapper } from "./SearchResult.style";

const SearchResult = ({ result }) => {
  return (
    <Wrapper>
      {result.length > 0 && (
        <h3>Lotniska przez które będzie przebiegać podróż: </h3>
      )}
      <ol>
        {result.map((airport) => (
          <li key={airport}>{airport}</li>
        ))}
      </ol>
    </Wrapper>
  );
};
export default SearchResult;
