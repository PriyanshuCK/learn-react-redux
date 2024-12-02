import React from "react";
import "./Search.css";

const SearchComponent: React.FC = () => {
  return (
    <div className="search-component">
      <div>
        <p>Select Year</p>
        <select>
          <option value="default">Year</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
        </select>
      </div>
      <div>
        <p>Body Style</p>
        <select>
          <option value="default">Style</option>
          <option value="sedan">Sedan</option>
          <option value="van">Van</option>
          <option value="roadster">Roadster</option>
        </select>
      </div>
      <div>
        <p>Select Make</p>
        <select>
          <option value="default">Make</option>
          <option value="toyota">Toyota</option>
          <option value="holden">Holden</option>
          <option value="mercedes-benz">Mercedes-Benz</option>
        </select>
      </div>
      <div>
        <p>Select Model</p>
        <select>
          <option value="default">Model</option>
          <option value="kia-rio">Kia Rio</option>
          <option value="mitsubishi">Mitsubishi</option>
          <option value="ford">Ford</option>
        </select>
      </div>
      <div>
        <p>Select Price</p>
        <select>
          <option value="default">Price</option>
          <option value="low">$0 - $10,000</option>
          <option value="medium">$10,000 - $20,000</option>
          <option value="high">$20,000+</option>
        </select>
      </div>
      <div>
        <button>Search</button>
      </div>
    </div>
  );
};

export default SearchComponent;
