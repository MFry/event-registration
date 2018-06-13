const Hapi = require("hapi");
const mongoose = require("mongoose");
const { graphqlHapi, graphiqlHapi } = require("apollo-server-hapi");
const schema = require("./graphql/schema");
const Event = require("./models/Events.js");
//Settings up environmental variables
const env = process.env.NODE_ENV || "dev";
const config = require("./config/config")[env];
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
server.route({
  method: "GET",
  path: "/api/v1/events",
  handler: (request, h) => {
    return Event.find();
  }
});
server.route({
  method: "POST",
  path: "/api/v1/events",
  handler: (request, h) => {
    const {
      title,
      teacher,
      description,
      startDate,
      address,
      maxSlots,
      courses
    } = request.payload;
    const event = new Event({
      title,
      teacher,
      description,
      startDate,
      address,
      maxSlots,
      courses
    });

    return event.save();
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
