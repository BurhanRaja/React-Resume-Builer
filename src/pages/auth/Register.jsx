import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { v4 as uuid } from "uuid";
import CryptoJS from "crypto-js";
import { useDispatch, useSelector } from "react-redux";
import { clearUsersState, getAllUsers } from "../../features/userSlice";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  const [error, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const [allUsers, setAllUsers] = useState([]);

  const { users, isLoading, isSuccess } = useSelector(
    (state) => state.allUsers
  );
  const dispatch = useDispatch();

  const handleAllUsers = () => {
    dispatch(clearUsersState());
    dispatch(getAllUsers());
  };

  useEffect(() => {
    handleAllUsers();
  }, []);

  useEffect(() => {
    if (!isLoading && isSuccess) {
      setAllUsers(users);
    }
  }, [isLoading, isSuccess]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== cPassword) {
      toast.warning("Both Passwords doesn't match.");
      return;
    }

    if (username === "" || email === "" || password === "") {
      setErrorMsg("Above field is required.");
      return;
    }

    let emailExists = allUsers?.filter((el) => el.email === email);
    if (emailExists.length > 0) {
      toast.error("Email Already Exists.");
      return;
    }

    let securePassword = CryptoJS.AES.encrypt(
      JSON.stringify(password),
      process.env.REACT_APP_SECRET_PASSWORD_KEY
    ).toString();

    let data = {
      id: uuid(),
      username,
      email,
      password: securePassword,
    };

    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((newData) => {
        let token = CryptoJS.AES.encrypt(
          JSON.stringify(newData.id),
          process.env.REACT_APP_SECRET_PASSWORD_KEY
        ).toString();
        localStorage.setItem("token", token);
        setUsername("");
        setEmail("");
        setPassword("");
        setCPassword("");
        toast.success("Registration Successful.");
        navigate("/home");
      });
  };

  return (
    <>
      <section className="bg-white flex items-center justify-center h-[100vh]">
        <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md ">
          <div className="px-6 py-4">
            <h3 className="mt-3 text-xl text-center text-gray-900 font-bold">
              Welcome to Resume Craftr
            </h3>
            <p className="mt-1 text-center text-gray-500 ">Create account</p>
            <form onSubmit={handleSubmit}>
              <div className="w-full mt-4">
                <input
                  className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                  type="text"
                  placeholder="Username"
                  aria-label="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                {error !== "" && username === "" ? (
                  <small className="text-red-500">{error}</small>
                ) : (
                  ""
                )}
              </div>

              <div className="w-full mt-4">
                <input
                  className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                  type="email"
                  placeholder="Email Address"
                  aria-label="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {error !== "" && email === "" ? (
                  <small className="text-red-500">{error}</small>
                ) : (
                  ""
                )}
              </div>

              <div className="w-full mt-4">
                <input
                  className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                  type="password"
                  placeholder="Password"
                  aria-label="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {error !== "" && password === "" ? (
                  <small className="text-red-500">{error}</small>
                ) : (
                  ""
                )}
              </div>

              <div className="w-full mt-4">
                <input
                  className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                  type="password"
                  placeholder="Confirm Password"
                  aria-label="Confirm Password"
                  value={cPassword}
                  onChange={(e) => setCPassword(e.target.value)}
                />
              </div>

              <div className="flex items-center justify-between mt-4">
                <button
                  type="submit"
                  className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                >
                  Register
                </button>
                <Link to="/">
                  <button className="px-6 py-2 text-sm font-medium tracking-wide capitalize transition-colors duration-300 transform bg-gray-200 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                    Back to Home
                  </button>
                </Link>
              </div>
            </form>
          </div>

          <div className="flex items-center justify-center py-4 text-center bg-gray-50 ">
            <span className="text-sm text-gray-600 ">
              Already have an account?{" "}
            </span>

            <Link
              to="/login"
              className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline"
            >
              Login
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
