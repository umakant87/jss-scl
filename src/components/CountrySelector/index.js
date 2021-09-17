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
        <label htmlFor="Select Language">Select Language</label>
        <select id="Select Language" onChange={handleOnChange}>
          {countries.map((country, index) => {
            console.log(country);
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
