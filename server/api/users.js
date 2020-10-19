// API files from PairExercise.Readium-with-Redux server/api

// authors.js

// const router = require('express').Router()
// const {Author, Comment, Story} = require('../db')

// // GET /api/authors
// router.get('/', async (req, res, next) => {
//   try {
//     const authors = await Author.findAll({
//       attributes: ['id', 'name', 'imageUrl']
//     })
//     res.json(authors)
//   }
//   catch (error) {
//     next(error)
//   }
// })

// // GET /api/authors/:authorId
// router.get('/:authorId', async (req, res, next) => {
//   try {
//     const author = await Author.findById(req.params.authorId)
//     res.json(author)
//   }
//   catch (error) {
//     next(error)
//   }
// })

// // GET /api/authors/:authorId/comments
// router.get('/:authorId/comments', async (req, res, next) => {
//   try {
//     const comments = await Comment.findAll({
//       where: {
//         authorId: req.params.authorId
//       },
//       include: [Author]
//     })
//     res.json(comments)
//   }
//   catch (error) {
//     next(error)
//   }
// })

// // GET /api/authors/:authorId/stories
// router.get('/:authorId/stories', async (req, res, next) => {
//   try {
//     const story = await Story.findAll({
//       where: {
//         authorId: req.params.authorId
//       },
//       include: [Author]
//     })
//     res.json(story)
//   }
//   catch (error) {
//     next(error)
//   }
// })

// module.exports = router

// -----------------------------------------------------------------------------------

// index.js

// const router = require('express').Router()

// router.use('/stories', require('./stories'))
// router.use('/authors', require('./authors'))

// module.exports = router

// -----------------------------------------------------------------------------------

// stories.js

// const router = require('express').Router()
// const {Story, Author, Comment} = require('../db')

// // GET /api/stories
// router.get('/', async (req, res, next) => {
//   try {
//     const stories = await Story.findAll({
//       where: req.query,
//       attributes: ['id', 'title'],
//       include: [Author]
//     })
//     res.json(stories)
//   }
//   catch (error) {
//     next(error)
//   }
// })

// // GET /api/stories/:storyId
// router.get('/:storyId', async (req, res, next) => {
//   try {
//     const story = await Story.findById(req.params.storyId, {
//       include: [Author, {model: Comment, include: Author}]
//     })
//     res.json(story)
//   }
//   catch (error) {
//     next(error)
//   }
// })

// module.exports = router
