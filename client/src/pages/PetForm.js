import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { ADD_PET } from "../utils/mutations";

import Auth from "../utils/auth";
import { addTypenameToDocument } from "@apollo/client/utilities";

const addPet = () => {
  const [formState, setFormState] = useState({
    name: "",
    breed: "",
    sex: "",
    weight: "",
    age: "",
  });
  const [addPet, { error, data }] = useMutation(ADD_PET);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addTypenameToDocument({
        variables: { ...formState },
      });

      Auth.login(data.addProfile.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">Add a Pet!</h4>
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{" "}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
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
                  className="btn btn-block btn-info"
                  style={{ cursor: "pointer" }}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;

// {projects.map((data, idx) => (
//   <Projects data={data} key={idx} />
// ))}
