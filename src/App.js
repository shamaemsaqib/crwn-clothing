import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header.component";
import Register from "./pages/register/register.component";
import SectionsList from "./pages/sections-list/sections-list.component";
import Shop from "./pages/shop/shop.component";
import { auth } from "./data/firebase.utils";
import React from "react";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      userLogged: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({
        userLogged: user,
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="app">
        <Header currentUser={this.state.userLogged} />
        <Routes>
          <Route exact path="/" element={<SectionsList />} />
          <Route exact path="/shop" element={<Shop />} />
          <Route exact path="/sign-in" element={<Register />} />
        </Routes>
      </div>
    );
  }
}

export default App;
