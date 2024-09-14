import { BrowserRouter, Outlet, Routes, Route } from "react-router-dom";
import Footer from "./layout/Footer";
import React from "react";
import Navbar from "./layout/Navbar";
import LandingPage from "./pages/LandingPage"; // 오타 수정
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { Provider } from "react-redux";
import { store } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./store/index";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Layout() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <ToastContainer
        position="bottom-right"
        theme="light"
        pauseOnHover
        autoClose={1500}
      />
      <Navbar />
      <main className="mb-auto w-10/12 max-w-4xl mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<LandingPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
            </Route>
          </Routes>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
}
