import React, { useState, useEffect } from "react";
import CONSTANTS from "../../constants";

function Maps(props) {
  const [businesses, setBusi] = useState(null);
  useEffect(() => {
    fetch(`${CONSTANTS.ENDPOINT}//businesses`)
      .then(response => response.json())
      .then(data => setBusi(data));
  }, []);
  return (
    <React.Fragment>
      <div className="ml-2 mt-2 mr-2 mb-2">
        <div className="card col-8">
          <div className="card-body">
            <h3>List</h3>
            <ul>
              {businesses &&
                businesses.map((busi, idx) => (
                  // <li>{JSON.stringify(busi)}</li>
                  <li key={idx}>{busi.name}</li>
                ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="ml-2 mt-2 mr-2 mb-2">
        <div className="card col-8">
          <div className="card-body">
            <h3>Map</h3>
            <ul>
              {businesses &&
                businesses.map((busi, idx) => (
                  // <li>{JSON.stringify(busi)}</li>
                  <li key={idx}>{busi.name}</li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Maps;
