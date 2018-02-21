var express = require('express');
var router = express.Router();
var Favorite = require('../models').Favorite;

// /* test items */
// var favorites = [
//   { id: 1, title: 'The Grack', location: 'Yosemite', grade: '5.6', description: 'Beautiful and simple 3 pitch with a doubl rope repel. Perfect at sunset.',},
//   { id: 2, title: 'Double Cross', location: 'Joshua Tree', grade: '5.7', description: 'Most popular and hardest 5.7 in all of Joshua Tree.',},
//   { id: 3, title: 'Composure', location: 'Donner Summit', grade: '5.6', description: 'Simple fun classic on Snowshed Wall.',}
// ]

/* GET favorites listings */
router.get('/', function(req, res) {
  Favorite.all({
    order: [
      ['createdAt', 'ASC']
    ]
  })
  .then( function(favorites) {
    return res.render('favorites', { favorites: favorites });
  })
});

/* POST add favorites listing */
router.post('/', function(req, res) {
  var title = req.body.title;
  var location = req.body.location;
  var grade = req.body.grade;
  var description = req.body.description;

  Favorite.create({ title: title, location: location, grade: grade, description: description })
    .then( function() {
      res.redirect('/favorites');
    });
});

router.delete('/:id', function(req, res) {
  Favorite.findById(req.params.id)
    .then( function(favorite) {
      favorite.destroy()
    })
    .then( function() {
      return res.redirect('/favorites');
    })
})

router.get('/::id/edit', function(req, res) {
  Favorite.findById(req.params.id)
    .then( function(favorite) {
      return res.render('edit', { favorite: favorite });
    });
});

router.put('/:id', function(req, res) {
  Favorite.update(
    {title: req.body.title },
    {location: req.body.location },
    {grade: req.body.grade },
    {description: req.body.description },
    { where: { id: req.params.id } }
  )
  .then( function() {
    return res.redirect('/favorites');
  })
});

module.exports = router;