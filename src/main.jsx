import React from "react";
import ReactDOM from "react-dom/client";
import './styles/app.css';
import { Provider } from 'react-redux';
import TodoApp from "./components/TodoApp";
import { store } from './redux/store';


const domContainer = document.getElementById("root");
const root = ReactDOM.createRoot(domContainer);
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <TodoApp />
    </Provider>
  </React.StrictMode>
);
