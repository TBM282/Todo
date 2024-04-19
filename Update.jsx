import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "./UserReducer";

export const Update = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const existingUsers = users.filter((user) => user.id == id);
  const { name, email } = existingUsers[0];
  const [updatedName, setUpdatedName] = useState(name);
  const [updatedEmail, setUpdatedEmail] = useState(email);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(
      updateUser({
        id: id,
        name: updatedName,
        email: updatedEmail,
      })
    );
    navigate("/");
  };
  return (
    <>
      <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
        <div className="w-50 border bg-secondary text-white p-5">
          <h3>Update User</h3>
          <form onSubmit={handleUpdate}>
            <div>
              <label htmlFor="name">Name: </label>

              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Name"
                value={updatedName}
                onChange={(e) => setUpdatedName(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="email">Email:</label>

              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email"
                value={updatedEmail}
                onChange={(e) => setUpdatedEmail(e.target.value)}
              />
            </div>
            <br />

            <button className="btn btn-info">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};
