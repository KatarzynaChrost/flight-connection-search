import React, { useState } from "react";
import { Wrapper, Header } from "./Form.styles";
import { airports } from "../../../assets/data/airports";
import { flights } from "../../../assets/data/flights";
import SearchResult from "../../molecules/SearchResult/SearchResult";
import SearchInput from "../../molecules/SearchInput/SearchInput";
import Logo from "../../atoms/Logo";

const Form = () => {
  const [airportA, setAirportA] = useState(airports[0]);
  const [airportB, setAirportB] = useState(airports[0]);
  const [result, setResult] = useState([]);
  const handleSearch = (start, end) => {
    setResult(bfs(start, end));
  };

  const connectionsList = new Map();

  function setKeys(airport) {
    connectionsList.set(airport, []);
  }

  function setValues(beginning, destination) {
    connectionsList.get(beginning).push(destination);
    connectionsList.get(destination).push(beginning);
  }

  airports.forEach(setKeys);
  flights.forEach((flight) => setValues(...flight));

  function bfs(start, end) {
    const visited = new Set();
    const queue = [start];
    const paths = new Map();
    paths.set(start, [start]);

    while (queue.length > 0) {
      const airport = queue.shift();
      const destinations = connectionsList.get(airport);
      for (const destination of destinations) {
        if (!visited.has(destination) && !paths.has(destination)) {
          visited.add(destination);
          queue.push(destination);
          paths.set(destination, [...paths.get(airport), destination]);
        }
        if (destination === end) {
          return paths.get(end);
        }
      }
    }
  }

  return (
    <Wrapper>
      <Header>
        <h1>Wyszukiwarka lotów </h1>
        <Logo />
      </Header>
      <SearchInput
        airports={[airportA, airportB]}
        setAirports={[setAirportA, setAirportB]}
        handleSearch={handleSearch}
      />
      <SearchResult result={result} />
    </Wrapper>
  );
};

export default Form;
