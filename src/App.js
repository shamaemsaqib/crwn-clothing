import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { onSnapshot } from "firebase/firestore";
import { connect } from "react-redux/es/exports";
import { createStructuredSelector } from "reselect";

import "./App.css";

import Header from "./components/header/header.component";
import Register from "./pages/register/register.component";
import SectionsList from "./pages/sections-list/sections-list.component";
import Shop from "./pages/shop/shop.component";
import { addProfileDocumentToFirestore, auth } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
import Checkout from "./pages/checkout/checkout.component";
import SectionPreviewWrapper from "./pages/section-preview-wrapper/section-preview-wrapper.component";
import Section from "./pages/section/section.component";
import { selectIsSectionsLoaded } from "./redux/shop/shop.selectors";
class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userDocRef = await addProfileDocumentToFirestore(user);

        onSnapshot(userDocRef, (snapShot) => {
          setCurrentUser({
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(user);
      }
    });
    // addShopToFireStore("sections", sectionsForPreview);
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { isSectionsLoaded } = this.props;
    return (
      <div className="app">
        <Header />
        <Routes>
          <Route exact path="/" element={<SectionsList />} />
          <Route exact path="/shop" element={<Shop />}>
            <Route
              exact
              path="/shop"
              element={<SectionPreviewWrapper isLoading={!isSectionsLoaded} />}
            />
            <Route
              exact
              path="/shop/:sectionID"
              element={<Section isLoading={!isSectionsLoaded} />}
            />
          </Route>
          <Route exact path="/checkout" element={<Checkout />} />
          <Route
            exact
            path="/sign-in"
            element={
              this.props.currentUser ? <Navigate to="/" /> : <Register />
            }
          />
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isSectionsLoaded: selectIsSectionsLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
