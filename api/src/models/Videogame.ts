import { Schema, model } from "mongoose";
import MongooseDelete from "mongoose-delete";
import { Videogame } from "../interfaces/videogame.interface";

const VideogameSchema = new Schema<Videogame>(
  {
    idVideogame: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    released: {
      type: String,
    },
    rating: {
      type: Number,
    },
    platforms: [
      {
        type: String,
        required: true,
      },
    ],
    background_image: {
      type: String,
    },
    createdInDb: {
      type: Boolean,
      default: false,
    },
    genres: [
      {
        type: Schema.Types.ObjectId,
        ref: "Genre",
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

VideogameSchema.plugin(MongooseDelete, { overrideMethods: "all" });
const VideogameModel = model("Videogame", VideogameSchema);

export default VideogameModel;
