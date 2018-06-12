const Hapi = require("hapi");
const mongoose = require("mongoose");
const { graphqlHapi, graphiqlHapi } = require("apollo-server-hapi");
const schema = require("./graphql/schema");

const env = process.env.NODE_ENV || "dev";
const config = require("./config")[env];
// Init Server
const server = new Hapi.Server({
  port: config.server.port,
  host: config.server.host
});

//Connect to db
mongoose.connect(
  `mongodb://${config.mongodb.username}:${
    config.mongodb.password
  }@ds111441.mlab.com:11441/tango_events`
);
mongoose.connection.once("open", () => {
  console.log("Successful connection to db.");
});

server.route({
  method: "GET",
  path: "/",
  handler: (request, h) => {
    return h.response("Server is up.").code(200);
  }
});

//Start Server
const init = async () => {
  // Self documenting graphql endpoint
  await server.register({
    plugin: graphiqlHapi,
    options: {
      path: "/graphiql",
      graphiqlOptions: {
        endpointURL: "/graphql"
      }
    },
    route: {
      cors: true
    }
  });
  //Graphql endpoint
  await server.register({
    plugin: graphqlHapi,
    options: {
      path: "/graphql",
      graphqlOptions: {
        schema
      },
      route: {
        cors: true
      }
    }
  });
  try {
    await server.start();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server started at: ${server.info.uri}`);
};
init();
