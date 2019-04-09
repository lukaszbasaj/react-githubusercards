import React, { useState } from "react";
import axios from "axios";

const Form = props => {
  const [username, setUsername] = useState("");

  const handleSubmit = async event => {
    event.preventDefault();

    const resp = await axios
      .get(`https://api.github.com/users/${username}`)
      .then(resp => {
        props.onSubmit(resp.data);
        setUsername("");
      })
      .catch(err => [err]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        style={{
          display: "flex",
          margin: 1,
          width: "99.5%",
          position: "relative",
          left: "50%",
          transform: "translateX(-50%)"
        }}
        className='form-control form-control-sm'
        type='text'
        value={username}
        onChange={event => setUsername(event.target.value)}
        placeholder='Github username'
        required
      />

      <button
        className='btn btn-outline-primary btn-sm btn-block'
        type='submit'>
        Show another user and to the list
      </button>
    </form>
  );
};

export default Form;
