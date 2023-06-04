import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { decryptData } from "../utils/crypto";
import {
  clearSingleUserState,
  getSingleUser,
} from "../features/singleUsersSlice";
import { useEffect } from "react";
import { useState } from "react";

const Header = () => {
  const { user, isLoading, isSuccess } = useSelector(
    (state) => state.singleUser
  );
  const [singleUser, setSingleUser] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSingleUser = () => {
    dispatch(clearSingleUserState());
    let token = localStorage.getItem("token");
    if (token) {
      let decodedId = decryptData(token);
      dispatch(getSingleUser(decodedId));
    }
  };

  useEffect(() => {
    handleSingleUser();
  }, []);

  useEffect(() => {
    if (!isLoading && isSuccess) {
      setSingleUser(user);
    }
  }, [isLoading, isSuccess]);

  const handleLogout = () => {
    dispatch(clearSingleUserState());
    setSingleUser({});
    localStorage.removeItem("token");
    navigate("/");
  };

  console.log(singleUser);

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-xl font-bold">Resume Craftr</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center"></nav>

        {singleUser?.username ? (
          <>
            <p className="text-lg font-bold mr-4">
              {singleUser?.username.toUpperCase()}
            </p>
            <button
              className="inline-flex items-center bg-gray-900 text-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-500 rounded text-base mt-4 md:mt-0 mr-3"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/register">
              <button className="inline-flex items-center bg-gray-900 text-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-500 rounded text-base mt-4 md:mt-0 mr-3">
                Register
              </button>
            </Link>
            <Link to="/login">
              <button className="inline-flex items-center bg-gray-200 text-black border-0 py-1 px-3 focus:outline-none hover:bg-gray-100 rounded text-base mt-4 md:mt-0">
                Login
              </button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
