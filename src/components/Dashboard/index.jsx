import React from "react";
import { Card } from "./card";
import Plot from "react-plotly.js";
import CONSTANTS from "../../constants";
import { defaultState } from "./config";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
  }

  componentDidMount() {
    const mapToEndpoint = {
      bgmeister: "wastes1",
      gyaya: "wastes2",
      futura: "wastes3"
    };
    // console.log(this.props);
    console.log(this.props.business.username);
    console.log(this.props.business.name);
    console.log(mapToEndpoint[this.props.business.username]);
    fetch(`${CONSTANTS.ENDPOINT}${mapToEndpoint[this.props.business.username]}`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          // title: this.props.business.name,
          // title: "Hello",
          layout: {
            ...this.state.layout,
            title: this.props.business.name
          },
          data: [
            {
              type: "line",
              x: data.map(item => item.timestamp),
              y: data.map(item => item.waste_kg)
            }
          ]
        })
      );
  }

  render() {
    return (
      <React.Fragment>
        <div className="ml-2 mt-2 mr-2 mb-2">
          <div className="row">
            <div className="col-md">
              <Card title="Badge" content={"image"} />
            </div>
            <div className="col-md">
              <Card title="Score" content={"score "} />
            </div>
          </div>
          <div className="ml-2 mt-2 mr-2 mb-2">
            <Plot
              data={this.state.data}
              layout={this.state.layout}
              frames={this.state.frames}
              config={this.state.config}
              onInitialized={figure => this.setState(figure)}
              onUpdate={figure => this.setState(figure)}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Dashboard;
