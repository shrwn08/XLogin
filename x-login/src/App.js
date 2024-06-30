import React, { useState } from "react";
import "./App.css";

function App() {
  const [getUsername, setGetUsername] = useState("");
  const [getPassword, setGetPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState('')
  const [submit, setSubmit] = useState(false);

  const handleSubmitBtn = (e) => {
    e.preventDefault();
    if (getUsername === "user" && getPassword === "password") {
      setSubmit(true);
    } else {
      setErrorMessage('Invalid username or password')
      setSubmit(false);
    }
  };
  const handleOnChangeUsername = (e) => {
    setGetUsername(e.target.value);
  };
  const handleOnChangePassword = (e) => {
    setGetPassword(e.target.value);
  };

  return (
    <div className="App">
      <h1>Login Page</h1>
      
      {!submit ? (
        <form onSubmit={handleSubmitBtn}>
          <label>Username: </label>
          <input
            type="text"
            value={getUsername}
            onChange={handleOnChangeUsername}
            placeholder="username"
            required
          />
          <br />
          <label>Password: </label>
          <input
            type="password"
            value={getPassword}
            onChange={handleOnChangePassword}
            placeholder="password"
            required
          />
          <br />
          <button type="submit">Submit</button>
          {errorMessage&&(<p>Invalid username or password</p>)}
        </form>
        
      ) : (
       <p>Welcome, user!</p>
      )}
    </div>
  );
}

export default App;
