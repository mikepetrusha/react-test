import React, { useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";

const QUERY_SEARCH_COUNTRY = gql`
  query Country($code: ID!) {
    country(code: $code) {
      name
      capital
      emoji
      code
      currency
    }
  }
`;

function Search() {
  const [countrySearch, setCountrySearch] = useState("");
  const [searchCountry, { data, loading, error }] =
    useLazyQuery(QUERY_SEARCH_COUNTRY);
  return (
    <div className="search">
      <div className="inputs">
        <input
          type="text"
          placeholder="Enter Country Code (ex. BR)..."
          onChange={(event) => {
            setCountrySearch(event.target.value);
          }}
        />
        <button
          onClick={() =>
            searchCountry({ variables: { code: countrySearch.toUpperCase() } })
          }
        >
          Search Country
        </button>
      </div>

      <div className="searchCountry">
        {data && (
          <div className="countryDisplay">
            <h2>
              {data.country.name} {data.country.emoji}
            </h2>
            <h2>Capital: {data.country.capital}</h2>
            <h2>Currency: {data.country.currency}</h2>
            <h2>Country Code: {data.country.code}</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
