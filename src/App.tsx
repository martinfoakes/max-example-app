import React from "react";
import "./App.css";
import WelcomeBanner from "./components/welcome-banner/WelcomeBanner";
import CustomButton from "./components/button/Button";
import Logo from "./img/logo.svg";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <WelcomeBanner />
      </header>
      <section style={{ display: "flex", flexDirection: "column" }}>
        <h3>{"Some string on the main App page"}</h3>
        <CustomButton text="Button text" iconSrc={Logo} />
      </section>
    </div>
  );
};

export default App;
