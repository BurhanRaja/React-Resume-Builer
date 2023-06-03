import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { decryptData, encryptData } from "../../utils/crypto";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMsg, setErrorMsg] = useState("");
  const [allUsers, setAllUsers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("/users")
      .then((res) => res.json())
      .then((data) => setAllUsers(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      setErrorMsg("Above field is required");
      return;
    }

    let userCheck = allUsers.filter((el) => el.email === email);
    if (userCheck.length === 0) {
      toast.error("User doesn't Exists.");
      return;
    }

    let user = userCheck[0];

    let decodedPassword = decryptData(user.password);

    if (decodedPassword !== password) {
      toast.error("Password is Incorrect.");
      return;
    }

    let token = encryptData(user.id);
    localStorage.setItem("token", token);
    setEmail("");
    setPassword("");
    toast.success("Login Successful.");
    navigate("/home");
    return;
  };

  return (
    <section className="flex justify-center items-center h-[100vh]">
      <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md">
        <div className="px-6 py-4">
          <div className="flex justify-center mx-auto text-2xl font-bold">
            Resume Craftr
          </div>

          <h3 className="mt-3 text-xl font-medium text-center text-gray-600 ">
            Welcome Back
          </h3>

          <p className="mt-1 text-center text-gray-500 ">Login</p>

          <form onSubmit={handleSubmit}>
            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
                placeholder="Email Address"
                aria-label="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errorMsg !== "" && email === "" ? (
                <small className="text-red-500">{errorMsg}</small>
              ) : (
                ""
              )}
            </div>

            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg   focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="password"
                placeholder="Password"
                aria-label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errorMsg !== "" && password === "" ? (
                <small className="text-red-500">{errorMsg}</small>
              ) : (
                ""
              )}
            </div>

            <div className="flex items-center justify-center mt-4">
              <button className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                Login
              </button>
            </div>
          </form>
        </div>

        <div className="flex items-center justify-center py-4 text-center bg-gray-50 ">
          <span className="text-sm text-gray-600">Don't have an account? </span>

          <Link
            to="/register"
            className="mx-2 text-sm font-bold text-blue-500  hover:underline"
          >
            Register
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Login;
