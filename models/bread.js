const mongoose = require('mongoose')
const { Schema } = mongoose

// schema
const breadSchema = new Schema({
    name: { type: String, required: true },
    hasGluten: Boolean,
    image: { type: String, default: 'http://placehold.it/500x500.png' },
    baker: {
        type: Schema.Types.ObjectID,
        ref: 'Baker'
    }
})



//helper methods
breadSchema.methods.getBakedBy = function () {
    console.log(this)
    return `${this.name} was baked with love by ${this.baker.name}`
}

const Bread = mongoose.model('Bread', breadSchema)


module.exports = Bread

