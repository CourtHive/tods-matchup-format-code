import pkg from "./package.json";

export default {
  title: "TODS MatchUp Format Code",
  description: pkg.description,
  base: `/${pkg.name}/`,
  dest: `/docs`,
  version: pkg.version,
  propsParser: false,
  hashRouter: true,
  typescript: true,
  themeConfig: {
    showPlaygroundEditor: false,
    colors: {
      primary: "#000000"
    }
  },
  menu: [
    "Readme",
    {
      name: "Examples"
    }
  ]
};
