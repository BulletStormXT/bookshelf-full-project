
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {useState} from "react";

const Add = () => {
  const [books, setBooks] = useState({
    title: "",
    author: "",
    country: "",
    imageLink: "",
    language: "",
    link: "",
    year: "",
    created: "",
    updated: "",
    pages: "",
    
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setBooks((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5003/books", books);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  console.log(books);
  return (
    <div
      className="form"
      style={{
        display: "flex",
        padding: "10px",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        gap: "10px",
      }}
    >
      <h1>Add New Book</h1>
      <input
        type="text"
        placeholder="title"
        onChange={handleChange}
        name="title"
      />
      <input
        type="text"
        placeholder="author"
        onChange={handleChange}
        name="author"
      />
       <input
        type="text"
        placeholder="country"
        onChange={handleChange}
        name="country"
      />
         <input
        type="text"
        placeholder="imageLink"
        onChange={handleChange}
        name="imageLink"
      />
     <input
        type="text"
        placeholder=" language"
        onChange={handleChange}
        name="language"
      /> 
      <input
        type="text"
        placeholder="link"
        onChange={handleChange}
        name="link"
      />
  
      <input
        type="number"
        placeholder=" year "
        onChange={handleChange}
        name="year"
      />
      <input
        type="number"
        placeholder=" pages"
        onChange={handleChange}
        name="pages"
      />
 
      <button
        onClick={handleClick}
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "10px",
          color: "white",
          borderRadius: "5px",
          cursor: "pointer",
          gap: "10px",
          backgroundColor: "green",
          border: "none",
        }}
      >
        Add
      </button>
    </div>
  );
};

export default Add;
