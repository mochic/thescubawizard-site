export default ["production"].includes(process.env.GATSBY_ACTIVE_ENV)
  ? require("./api.prod.js").default
  : require("./api.dev.js").default
