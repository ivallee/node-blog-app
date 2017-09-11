/* app.js */

//require and instatiate express
var app = require('express')()

//fake posts to simulate a database
var posts = [
  {
    id: 1,
    author: 'Isaac',
    title: 'How to pretend to know EJS',
    body: 'Lorem ipsum dolor sit amet, docendi tractatos at ius. Ex conceptam vituperatoribus pri, ei quo elit mnesarchum. Tempor lucilius maiestatis usu ei, nec sumo necessitatibus in. Qui in congue graece.'
  },
  {
    id: 2,
    author: 'Phil \"Doggy-Dog\" Filson',
    title: 'How to deal with having a weird nickname',
    body: 'Lorem ipsum dolor sit amet, docendi tractatos at ius. Ex conceptam vituperatoribus pri, ei quo elit mnesarchum. Tempor lucilius maiestatis usu ei, nec sumo necessitatibus in. Qui in congue graece.'
  },
  {
    id: 3,
    author: 'Isaac',
    title: 'I swear I know what I\'m doing',
    body: 'Lorem ipsum dolor sit amet, docendi tractatos at ius. Ex conceptam vituperatoribus pri, ei quo elit mnesarchum. Tempor lucilius maiestatis usu ei, nec sumo necessitatibus in. Qui in congue graece.'
  },
  {
    id: 4,
    author: 'Cody',
    title: 'Events',
    body: 'Lorem ipsum dolor sit amet, docendi tractatos at ius. Ex conceptam vituperatoribus pri, ei quo elit mnesarchum. Tempor lucilius maiestatis usu ei, nec sumo necessitatibus in. Qui in congue graece.'
  }
]

// set the view engine to ejs
app.set('view engine', 'ejs')

//blog home page
app.get('/', function(req, res) {
  // render `home.ejs` with the list of posts
  res.render('home', { posts: posts
  });
})

// blog post
app.get('/post/:id', function(req, res) {
  // find the post in the `posts` array
  var post = posts.filter(function(post) {
    return post.id == req.params.id
  })[0];

  //render the `post-ejs` template with the post content
  res.render('post', {
    author: post.author,
    title: post.title,
    body: post.body
  })
})

app.listen(8080)

console.log('listening on port 8080');