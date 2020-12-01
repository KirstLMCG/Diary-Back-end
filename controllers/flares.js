const Flare = require('../models/flare')

exports.getFlares = (req, res) => {

      Flare.find({}).then(flares => {
          res.status(200).send(flares)
          
      })
      .catch (err => {
          res.status(400).send(err.message)
          console.log(err.message)
      })
}

exports.getFlaresById = (req, res) => {
    const { id } = req.params
    Flare.findById(id).then(flareid => {
        res.status(200).send(flareid)
   
    })
    .catch(err => {
        res.status(500).json({message: err.message})
    })
}

exports.postFlare = (req, res) => {
    const newFlare = new Flare();
    newFlare.head = req.body.head
    newFlare.neck = req.body.neck
    newFlare.hands = req.body.hands
    newFlare.arms = req.body.arms
    newFlare.stomach = req.body.stomach
    newFlare.back = req.body.back
    newFlare.legs = req.body.legs
    newFlare.feet = req.body.feet
    newFlare.blog = req.params.id

    
    newFlare.save().then(newFlare => {
        res.send(newFlare)
    }).catch(err => console.log(err))
    
}