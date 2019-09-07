import React, { useState, useEffect } from "react";
import CONSTANTS from "../../constants";

function Maps(props) {
  const [businesses, setBusi] = useState(null);
  useEffect(() => {
    fetch(`${CONSTANTS.ENDPOINT}//businesses`)
      .then(response => response.json())
      .then(data => setBusi(data));
  },[]);
  return (
    <React.Fragment>
      <div className="ml-2 mt-2">
        <h3>List</h3>
        <ul>
          {businesses &&
            businesses.map((busi, idx) => (
              // <li>{JSON.stringify(busi)}</li>
              <li key={idx}>{busi.name}</li>
            ))}
        </ul>
      </div>
    </React.Fragment>
  );
}
export default Maps;
