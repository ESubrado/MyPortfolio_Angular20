const db = require("../models");
const Stories = db.stories;

// Create and Save a new Stories
exports.create = (req, res) => {

    // Validate request
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Tutorial
  const stories = new Stories({
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  });

  // Save Tutorial in the database
  stories
    .save(stories)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Stories."
      });
    });
  
};

// Retrieve all Stories from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

  Stories.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving stories."
      });
    });  
};

// Find a single Stories with an id
exports.findOne = (req, res) => {
     const id = req.params.id;

  Stories.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Story with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Story with id=" + id });
    });
};

// Update a Stories by the id in the request
exports.update = (req, res) => {
     if (!req.body) {
        return res.status(400).send({
        message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    Stories.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
        if (!data) {
            res.status(404).send({
            message: `Cannot update Story with id=${id}. Maybe Story was not found!`
            });
        } else res.send({ message: "Story was updated successfully." });
        })
        .catch(err => {
        res.status(500).send({
            message: "Error updating Story with id=" + id
        });
        });
  
};

// Delete a Stories with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Stories.findByIdAndRemove(id)
        .then(data => {
        if (!data) {
            res.status(404).send({
            message: `Cannot delete Story with id=${id}. Maybe stories was not found!`
            });
        } else {
            res.send({
            message: "Story was deleted successfully!"
            });
        }
        })
        .catch(err => {
        res.status(500).send({
            message: "Could not delete Story with id=" + id
        });
    });    
};

// Delete all Stories from the database.
exports.deleteAll = (req, res) => {
    Stories.deleteMany({})
        .then(data => {
        res.send({
            message: `${data.deletedCount} Stories were deleted successfully!`
        });
        })
        .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while removing all stories."
        });
    });
};

// Find all published Stories
exports.findAllPublished = (req, res) => {
    Stories.find({ published: true })
        .then(data => {
        res.send(data);
        })
        .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving tutorials."
        });
    });
};