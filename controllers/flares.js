const Flare = require('../models/flare')

exports.getFlares = (req, res) => {

      Flare.find({}).then(flares => {
          res.status(200).send(flares)

      })
    //   .catch (err => {
    //       res.status(400).send(err.message)
    //       console.log(err.message)
    //   })
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