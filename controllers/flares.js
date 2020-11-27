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
    newFlare.head = 2
    newFlare.neck = 2
    newFlare.hands = 2
    newFlare.arms = 2
    newFlare.stomach = 2
    newFlare.back = 2
    newFlare.legs = 2
    newFlare.feet = 2
    newFlare.blog = '5fc0e62b06ce5a48a063201a'

    
    newFlare.save().then(newFlare => {
        res.send(newFlare)
    }).catch(err => console.log(err))
    
}