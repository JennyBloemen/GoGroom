import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { ADD_PET } from "../utils/mutations";
import { QUERY_PETS } from "../utils/queries";

import Auth from "../utils/auth";

const PetForm = () => {
  //this is the sign up way
  const [formState, setFormState] = useState({
    name: "",
    breed: "",
    sex: "",
    weight: "",
    age: "",
    owner: Auth.getProfile().data.username,
  });
  const [addPet, { error, data }] = useMutation(ADD_PET);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addPet({
        variables: { ...formState },
      });

      // Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };
  // This is the thought way
  //   const [petText, setPetText] = useState("");
  //   const [characterCount, setCharacterCount] = useState(0);

  //   const [addPet, { error }] = useMutation(ADD_PET, {
  //     update(cache, {date: {addPet}}) {
  //       try {
  //         const {pets} = cache.readQuery({query: QUERY_PETS});

  //     cache.writeQuery({
  //       query: QUERY_PETS,
  //       data: {pets: [addPet, ...pets]},
  //     });
  //   } catch (e) {
  //     console.error(e);
  //   }
  // },
  // });

  // const handleFormSubmit = async (event) => {
  //     event.preventDefault();

  //     try {
  //       const { data } = await addPet({
  //         variables: {
  //           name,
  //           breed,
  //           sex,
  //           weight,
  //           age,
  //           owner: Auth.getProfile().data.username
  //          },
  //       });

  //         setPetText('');
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };

  // const handleChange = (event) => {
  //   const {name, value} = event.target;

  //   if (name === 'petText' && value.length <= 50) {
  //     setPetText(value);
  //     setCharacterCount(value.length);
  //   }
  // };

  return (
    <div>
      <h3> Add Your Adorable Pet!</h3>
      {/* {Auth.loggedIn() ? ( */}
      {/* <> */}
      {/* {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : ( */}
      <form onSubmit={handleFormSubmit}>
        <input
          className="form-input"
          placeholder="Pet Name"
          name="name"
          type="text"
          value={petText.name}
          onChange={handleChange}
        />
        <input
          className="form-input"
          placeholder="Pet Breed"
          name="breed"
          type="text"
          value={petText.breed}
          onChange={handleChange}
        />
        <input
          className="form-input"
          placeholder="Pet Gender"
          name="sex"
          type="text"
          value={petText.sex}
          onChange={handleChange}
        />
        <input
          className="form-input"
          placeholder="Pet Age"
          name="age"
          type="text"
          value={petText.age}
          onChange={handleChange}
        />
        <input
          className="form-input"
          placeholder="Pet Weight"
          name="weight"
          type="text"
          value={petText.weight}
          onChange={handleChange}
        />
        <button
          className="btn btn-block btn-info"
          style={{ cursor: "pointer" }}
          type="submit"
        >
          Submit
        </button>
      </form>
      )}
      {error && (
        <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
      )}
    </div>
  );
};

export default PetForm;
