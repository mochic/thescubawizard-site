export default process.env.NODE_ENV === "production"
  ? require("./api.prod.js").default
  : require("./api.dev.js").default
