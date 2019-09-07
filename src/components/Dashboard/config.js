const updatemenus = [
  {
    buttons: [
      {
        args: ["type", "bar"],
        label: "Bar",
        method: "restyle"
      },
      {
        args: ["type", "line"],
        label: "Line",
        method: "restyle"
      }
    ],
    direction: "right",
    pad: { r: 10, t: 10 },
    showactive: true,
    type: "buttons"
  }
];

export const defaultState = {
  data: [{ type: "bar", x: [], y: [] }],
  layout: {
    width: 1200,
    height: 600,
    updatemenus: updatemenus,
    xaxis: {
      autorange: true,
      rangeselector: {
        buttons: [
          {
            count: 1,
            label: "1m",
            step: "month",
            stepmode: "backward"
          },
          { step: "all" }
        ]
      },
      // rangeslider: {},
      type: "date"
    },
    yaxis: {
      title: "Waste [kg]"
    }
  },
  frames: [],
  config: {}
};
