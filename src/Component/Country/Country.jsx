/* eslint-disable valid-typeof */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */

import "./Country.css";

const Country = (props) => {
  const { name, flags, languages, coatOfArms, capital, area, currencies } =
    props.country;

  const langArray = [];
  for (let key in languages) {
    langArray.push(languages[key]);
  }

  /* Currencies  */
  let currenciesArray = [];
  for (let key in currencies) {
    currenciesArray.push(currencies[key]);
  }

  return (
    <>
      <div className="countryStyle">
        <h2>{name.common}</h2>
        <p className="nationalFlags">
          <img src={flags.png} alt="" />
        </p>
        <p>
          <span>Capital:</span> {capital}
        </p>
        <p>
          <span>Area:</span> {area} km²{" "}
        </p>
        <p>
          <span>Languages:</span> {langArray.join(", ")}
        </p>

        <div className="coatOfArms">
          {coatOfArms.png && (
            <p className="coatOfArms">
              <span>Coat Of Arms:</span>
              <img src={coatOfArms.png} alt="" />
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Country;
