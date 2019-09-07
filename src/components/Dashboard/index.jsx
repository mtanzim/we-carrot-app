import React from "react";
import Plot from "react-plotly.js";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.width = 800;
    this.height = 600;
  }

  render() {
    return (
      <React.Fragment>
        <div className="row border justify-content-between">
          <Plot
            data={[
              {
                x: [1, 2, 3],
                y: [2, 6, 3],
                type: "scatter",
                mode: "lines+markers",
                marker: { color: "red" }
              },
              { type: "bar", x: [1, 2, 3], y: [2, 5, 3] }
            ]}
            layout={{
              width: this.width,
              height: this.height,
              title: this.props.restaurant.name
            }}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Dashboard;
