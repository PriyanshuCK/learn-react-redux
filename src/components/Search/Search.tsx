import React from "react";
import "./Search.css";

const SearchComponent: React.FC = () => {
  return (
    <div className="search-component">
      <h2>Select Year</h2>
      <select>
        <option value="default">Year</option>
        <option value="2018">2018</option>
        <option value="2017">2017</option>
        <option value="2016">2016</option>
      </select>

      <h2>Body Style</h2>
      <select>
        <option value="default">Style</option>
        <option value="sedan">Sedan</option>
        <option value="van">Van</option>
        <option value="roadster">Roadster</option>
      </select>

      <h2>Select Make</h2>
      <select>
        <option value="default">Make</option>
        <option value="toyota">Toyota</option>
        <option value="holden">Holden</option>
        <option value="mercedes-benz">Mercedes-Benz</option>
      </select>

      <h2>Select Model</h2>
      <select>
        <option value="default">Model</option>
        <option value="kia-rio">Kia Rio</option>
        <option value="mitsubishi">Mitsubishi</option>
        <option value="ford">Ford</option>
      </select>

      <h2>Select Price</h2>
      <select>
        <option value="default">Price</option>
        <option value="low">$0 - $10,000</option>
        <option value="medium">$10,000 - $20,000</option>
        <option value="high">$20,000+</option>
      </select>

      <button>Search</button>
    </div>
  );
};

export default SearchComponent;
