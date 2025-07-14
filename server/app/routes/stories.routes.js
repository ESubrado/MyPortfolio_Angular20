module.exports = app => {
  const stories = require("../controllers/stories.controller.js");

  var router = require("express").Router();

  // Create a new Story
  router.post("/", stories.create);

  // Retrieve all Stories
  router.get("/", stories.findAll);

  // Retrieve all published Stories
  router.get("/published", stories.findAllPublished);

  // Retrieve a single Story with id
  router.get("/:id", stories.findOne);

  // Update a Story with id
  router.put("/:id", stories.update);

  // Delete a Story with id
  router.delete("/:id", stories.delete);

  // Delete all Stories
  router.delete("/", stories.deleteAll);

  app.use('/api/stories', router);
};