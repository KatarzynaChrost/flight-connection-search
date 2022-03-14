import React from "react";
import { airports as airportsData } from "../../../assets/data/airports";
import {
  Wrapper,
  SubmitButton,
  SelectOption,
  Option,
} from "./SearchInput.styles";

const SearchInput = ({ airports, setAirports, handleSearch }) => {
  const findConnection = () => {
    handleSearch(airports[0], airports[1]);
  };

  return (
    <Wrapper>
      <h3>Znajdź połączenie pomiędzy:</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Option>
          <label htmlFor="airportA">Lotnisko A: </label>
          <SelectOption
            value={airports[0]}
            onChange={(e) => setAirports[0](e.currentTarget.value)}
          >
            {airportsData.map((airport) => (
              <option key={airport} value={airport}>
                {airport}
              </option>
            ))}
          </SelectOption>
        </Option>
        <Option>
          <label htmlFor="airportB">Lotnisko B: </label>
          <SelectOption
            value={airports[1]}
            onChange={(e) => setAirports[1](e.currentTarget.value)}
          >
            {airportsData.map((airport) => (
              <option key={airport} value={airport}>
                {airport}
              </option>
            ))}
          </SelectOption>
        </Option>
        <SubmitButton type="submit" value="Znajdź" onClick={findConnection} />
      </form>
    </Wrapper>
  );
};

export default SearchInput;
