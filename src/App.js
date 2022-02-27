import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./Redux/Actions";
import Home from './Home';
function App() {
  const dispatch = useDispatch();
  const [user, setUser] = useState({ email: "", password: "" });
  const handleChange = (event) => {
    setUser({ ...user, [event.target.id]: event.target.value });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(addUser(user));
    setUser({ email: " ", password: " "})
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <p>email</p>
        <input onChange={handleChange} id="email" value={user.email} />
        <p>password</p>
        <input onChange={handleChange} id="password" value={user.password} />
        <button type="submit">Submit</button>
      </form>
      <Home/>
    </div>
  );
}

export default App;
