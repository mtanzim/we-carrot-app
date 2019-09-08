import React, { useState, useEffect } from "react";
import CONSTANTS from "../../constants";
import MyMapComponent from "./GoogleMap";

function Maps(props) {
  const [businesses, setBusi] = useState(null);
  useEffect(() => {
    fetch(`${CONSTANTS.ENDPOINT}/businesses`)
      .then(response => response.json())
      .then(data => setBusi(data));
  }, []);
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-3 ml-2 mt-2 mr-2 mb-2">
          <div className="card">
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
        <div className="col-md ml-2 mt-2 mr-2 mb-2">
          <div className="">
            {businesses && <MyMapComponent businesses={businesses} />}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Maps;
