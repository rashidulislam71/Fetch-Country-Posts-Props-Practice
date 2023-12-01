/* eslint-disable react/jsx-key */

import { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [Countries, setCountries] = useState([]);

  useEffect(() => {
    const url = "https://restcountries.com/v3.1/all";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <>
      <h1 className="countryInfo">Country Information</h1>  
      <div className="Countries">
        {Countries.map((country) => (<Country country={country} />))}
      </div>
    </>
  );
};

export default Countries;
