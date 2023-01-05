import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Header from "../components/webContainer.js";
import { ADD_PET } from "../utils/mutations";
import { QUERY_PETS } from "../utils/queries";
import rollingCat from '../emmsHTMLGraveyard/rollingCat.GIF'
import Footer from '../components/Footer.js'

import Auth from "../utils/auth";
import jwt_decode from "jwt-decode";

const PetForm = () => {
  const token = window.localStorage.getItem("id_token");
  const user = jwt_decode(token);
  const userid = user.data._id;

  const [formState, setFormState] = useState({
    name: "",
    breed: "",
    sex: "",
    weight: "",
    age: "",
    owner: userid,
  });
  const [addPet, { error, data }] = useMutation(ADD_PET);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };
  // var navigate = useNavigate();
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addPet({
        variables: { ...formState },
      });
    } catch (e) {
      console.error(e);
    }
    setFormState({
      name: "",
      breed: "",
      sex: "",
      weight: "",
      age: "",
      owner: userid,
    });
  };

  return (
    <div>
      <Header></Header>
      <div className="homeBody">
      <h3 className="servH1"> Add Your Adorable Pet!</h3>
      <div className="petForm">
        <form onSubmit={handleFormSubmit}>
          <input
            className="form-input"
            placeholder="Pet Name"
            name="name"
            type="text"
            value={formState.name}
            onChange={handleChange}
          />
          <input
            className="form-input"
            placeholder="Pet Breed"
            name="breed"
            type="text"
            value={formState.breed}
            onChange={handleChange}
          />
          <input
            className="form-input"
            placeholder="Pet Gender"
            name="sex"
            type="text"
            value={formState.sex}
            onChange={handleChange}
          />
          <input
            className="form-input"
            placeholder="Pet Age"
            name="age"
            type="text"
            value={formState.age}
            onChange={handleChange}
          />
          <input
            className="form-input"
            placeholder="Pet Weight"
            name="weight"
            type="text"
            value={formState.weight}
            onChange={handleChange}
          />
          <button
            className="btn"
            style={{ cursor: "pointer" }}
            type="submit"
          >
            Submit
          </button>
        </form>

        {error && (
          <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
        )}


        </div>
        <img className="rollingCat" src={rollingCat}></img>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default PetForm;
