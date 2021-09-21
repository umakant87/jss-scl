import React from 'react';
import './index.scss';

const CountrySelector = (props) => {
  const countries = props.fields.Countries;
  const handleOnChange = (e) => {
    var index = e.target.selectedIndex;
    var optionElement = e.target.childNodes[index];
    var countryUrl = optionElement.getAttribute('data-url');
    if (countryUrl) {
      window.open(countryUrl, '_blank');
    }
  };
  return (
    <div className="c-country">
      <div className="c-country__select">
        <label htmlFor="SelectCountry">Select Country</label>
        <select id="SelectCountry" onChange={handleOnChange}>
          {countries.map((country, index) => {
            return (
              <option
                key={index}
                data-url={country.fields.url.value.href}
                value={country.displayName}
              >
                {country.displayName}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default CountrySelector;
