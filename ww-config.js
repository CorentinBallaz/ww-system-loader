export default {
  editor: {
    label: {
      en: "System Loader",
    },
  },
  properties: {
    color: {
      label: {
        en: "Color",
      },
      type: "Color",
      bindable: true,
      responsive: true,
      defaultValue: "#000000",
    },
    animationDuration: {
      label: {
        en: "Animation duration",
      },
      type: "Number",
      options: {
          min: 100,
          max: 10000,
          step: 100,
      },
      bindable: true,
      responsive: true,
      defaultValue: 1500,
    },
    size: {
      label: {
        en: "Size",
      },
      type: "Number",
      options: {
          min: 0,
          max: 1000,
          step: 1,
      },
      bindable: true,
      responsive: true,
      defaultValue: 100,
    },
  },
};
