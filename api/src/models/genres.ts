import { Schema, model } from "mongoose";
import MongooseDelete from "mongoose-delete";
import { Genre } from "../interfaces/genres.interface";

const GenreSchema = new Schema<Genre>(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

GenreSchema.plugin(MongooseDelete, { overrideMethods: "all" });
const GenreModel = model("Genre", GenreSchema);

export default GenreModel;
