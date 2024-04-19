import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import UserReducer from "./UserReducer.jsx";

const store = configureStore({
  reducer: {
    users: UserReducer,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* we use this store property to store the public datas */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
