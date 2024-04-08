import mongoose from "mongoose";
const { Schema, model } = mongoose;

const bookSchema = Schema({
  
  author: String,
  country: String,
  imageLink: String,
  language: String,
  link: String,
  pages: Number,
  title: String,
  year: Number,
  created_at: Number,
  updated_at: Number,
 
});

const Books = model("Books", bookSchema);
export default Books;
