const Flare = require('../models/flare')

exports.getFlares = (req, res) => {
    new Flare({
        head: 0,
        neck: 1,
        hands: 2,
        arms: 3,
        stomach: 4,
        back: 5,
        legs: 6,
        feet: 7,
    }).save()
    // selectFlares
    // .then(flares => {
      Flare.find({}, (err, flares) => {
        res.status(200).send(flares)    
      })
    // })
    //  res.status(200).send(selectFlares())
}

/*exports.getFlares = (req, res) => {
    selectFlares()
    .then(function(flares) {
        console.log("I'm in the controller")
    })
}
*/