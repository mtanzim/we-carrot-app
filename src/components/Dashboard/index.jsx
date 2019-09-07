import React from "react";
import Plot from "react-plotly.js";


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.width = 800;
    this.height = 600;
    this.state = {
      period: "Weekly",
      data: [
        { type: "bar", x: ["Jan", "Feb", "Mar"], y: [0.34, 0.55, 0.66] }
      ],
      layout: {
        width: this.width,
        height: this.height,
        title: this.props.restaurant.name,
        xaxis: {
          title: "Mon"
          // autorange: true,
          // range: ['2019-02-17', '2019-12-16'],
          // rangeselector: {buttons: [
          //     {
          //       count: 1,
          //       label: '1w',
          //       step: 'week',
          //       stepmode: 'backward'
          //     },
          //     {
          //       count: 6,
          //       label: '6m',
          //       step: 'month',
          //       stepmode: 'backward'
          //     },
          //     {step: 'all'}
          //   ]},
          // rangeslider: {range: ['2019-02-17', '2019-12-16']},
          // type: 'date'
        },
        yaxis: {
          title: "Waste [kg]",
        }
      },
      frames: [],
      config: {}
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="row border justify-content-between">
          <Plot
            data={this.state.data}
            layout={this.state.layout}
            frames={this.state.frames}
            config={this.state.config}
            onInitialized={figure => this.setState(figure)}
            onUpdate={figure => this.setState(figure)}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Dashboard;
