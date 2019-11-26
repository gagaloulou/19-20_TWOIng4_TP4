var express = require('express');
var router = express.Router();
var _ = require('lodash');
const axios = require('axios').default;

let movies = [{
    title: "blade_runner",
    id : "0"
}]


/* GET movies listing. */
router.get('/', (req, res) => {
    // Get List of movies and return JSON
    res.status(200).json({ movies });
});


/* GET one movie. */
router.get('/:id', (req, res) => {
    const { id } = req.params;
    // Find movie in DB
    const user = _.find(movies, ["id", id]);
    // Return title
    res.status(200).json({
      message: 'Movie found!',
      title 
    });
});


/* PUT new movie. */
router.put('/', (req, res) => {
    // Get the data from request from request
    const { title } = req.body;
    // Create new unique id
    const id = _.uniqueId();
    // Insert it in array (normaly with connect the data with the database)
    movies.push({ title, id });
    // Return message
    res.json({
      message: `Movie added ${id}`,
      title: { title, id }
    });
  });


  /* DELETE user. */
router.delete('/:id', (req, res) => {
    // Get the :id of the user we want to delete from the params of the request
    const { id } = req.params;
  
    // Remove from "DB"
    _.remove(movies, ["id", id]);
  
    // Return message
    res.json({
      message: `Movie removed ${id}`
    });
  });

  /* UPDATE user. */
router.post('/:id', (req, res) => {
    // Get the :id of the user we want to update from the params of the request
    const { id } = req.params;
    // Get the new data of the user we want to update from the body of the request
    const { title } = req.body;
    // Find in DB
    const userToUpdate = _.find(movies, ["id", id]);
    // Update data with new data (js is by address)
    titleToUpdate.title = title;
  
    // Return message
    res.json({
      message: `Movie updated ${id} with ${user}`
    });
  });
  
  


module.exports = router;