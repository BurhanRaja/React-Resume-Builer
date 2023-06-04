import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import ResumeForm from "./pages/ResumeForm";
import ResumeTemplate from "./components/ResumeTemplate";
import TestTemplate from "./components/TestTemplate";
import { ToastContainer } from "react-toastify";
import ResumeHome from "./pages/ResumeHome";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./components/ProtectedRoute";
import ViewResume from "./pages/ViewResume";

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/home" element={<ResumeHome />} />
              <Route path="/add/resume" element={<ResumeForm />} />
              <Route path="/resume/:id" element={<ViewResume />} />
              <Route path="/template" element={<TestTemplate />} />
              <Route path="/edit/resume" />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
