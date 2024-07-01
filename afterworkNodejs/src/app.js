const fastify = require("fastify")({ logger: true });
const mongoose = require("mongoose");
require("dotenv").config();

//Import Routes
const userRoutes = require("./routes/user.routes");

//Connect to database
mongoose.connect(process.env.MONGODB_URI).then(() => console.log("Connected to the database")).catch(e => console.log("Error connecting to the database", e));

//Start server
fastify.register(userRoutes, { prefix: "/api/v1/users" });

const start = async () => {
  try {
    await fastify.listen(process.env.PORT || 5000);
    fastify.log.info(
      `Server is running on port ${fastify.server.address().port}`
    );
  } catch (error) {}
};

start();