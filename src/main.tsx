import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCoffee, faHeart } from "@fortawesome/free-solid-svg-icons";

library.add(faCoffee, faHeart);

// REDUX
// import { Provider } from "react-redux";
// import store from "./store.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <Provider store={store}>
  //   <App />
  // </Provider>
  <App />
);