import { Schema, model, models } from "mongoose";

const CollectionSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    artworks: [{
        type: Schema.Types.ObjectId,
        ref: 'Art',
    }]
},{
    timestamps: true,
})

const Collection = models.Collection || model('Collection', CollectionSchema)

export default Collection;