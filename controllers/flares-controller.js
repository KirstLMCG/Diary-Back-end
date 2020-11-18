const { selectFlares } = require('../models/flares-model')

exports.getFlares = (req, res) => {
     res.status(200).send(selectFlares())
}

/*exports.getFlares = (req, res) => {
    selectFlares()
    .then(function(flares) {
        console.log("I'm in the controller")
    })
}
*/