
import {  Routes, Route  } from "react-router-dom";
import { useState } from "react";
import Header from "./main";
import { Link } from "react-router-dom";
const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "" || password === "") {
alert("enter usename or password!")
      return;
    }

    if (username === "yekey" && password === "123") {
 alert("you loged in")

    } else {
    alert("username or password is false")
    }
  };

  return (
    <div>
      <h1>entering the system</h1>
      <form onSubmit={handleSubmit}>
<p> username </p>
        <input
          type="text"
          id="username"
          placeholder="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      <p> password </p>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
 <a href=""></a>  
     
  
   <button type="submit">enter</button>
<a href="/header.js">ok</a>

      </form>
    </div>
  );
};

const App = () => {
  return (

      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/header" element={<Header />} />
      </Routes>
  
  );
};


export default LoginPage;


