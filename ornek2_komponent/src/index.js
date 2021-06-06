//React'in temel kutuphaneleri
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//App modulunun eklenmesi
import App from "./App";
// Web sayfasina basilacak olan herseyi olusturan veya guncelleyen metot.(render)
// ? render method’u 2 parametre alir
// ** 1. parametre hangi modulu render edecegidir.
// ** 2. parametre nerede render edilecegidir.
ReactDOM.render(
  <React.StrictMode>
    <App /> {/* App modulunun cagrilmasi  */}
    <App /> {/* App modulunun cagrilmasi  */}
  </React.StrictMode>,
  document.getElementById("root") //** .2.kisim
);
