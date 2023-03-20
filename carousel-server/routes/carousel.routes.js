const express = require("express");
const router = express.Router();
//const post = require("../models/carousel.model");
const carousels = require("../data/carmodel");

const m = require("../helpers/middlewares");

// Routes
;


// router.post("/", async (req, res) => {
//   try {
//     // Create new student
//     let Carousel = new carousels({
//       title: req.body.title,
//       subtitle: req.body.subtitle,
//       imageURL:req.body.imageURL

//     });
//     // Save student
//     await Carousel.save();
//     res.json(Carousel);
//   } catch (err) {
//     console.log(err);
//   }
// });


/* All posts */
//"/"-- end point
router.get("/", async (req, res) => {  //get all carousels 
  await post
    .getCarousels()
    .then((posts) => res.json(posts)) //12 - 17 implement error
    .catch((err) => {
      if (err.status) {
        res.status(err.status).json({ message: err.message });
      } else {
        res.status(500).json({ message: err.message });
      }
    });
});

/* A post by id */
router.get("/:id", m.mustBeInteger, async (req, res) => { //get one  carousel by id
                                                            /**
                                                             * GET - View 
                                                             * PUT - Update
                                                             * POST - Create
                                                             * DELETE - delete
                                                           */
  const id = req.params.id;
  await post
    .getCarousel(id) //get the id to view the carousel
    .then((post) => res.json(post))
    .catch((err) => {
      if (err.status) {
        res.status(err.status).json({ message: err.message });
      } else {
        res.status(500).json({ message: err.message });
      }
    });
});

module.exports = router
