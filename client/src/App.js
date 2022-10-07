import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { onSnapshot } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux/es/exports";

import "./App.css";

import Header from "./components/header/header.component";
import Home from "./routes/home/home.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
import SectionContainer from "./routes/section/section.container";
import SectionPreviewWrapperContainer from "./routes/section-preview-wrapper/section-preview-wrapper.container";

import { addProfileDocumentToFirestore, auth } from "./firebase/firebase.utils";

import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { useEffect } from "react";
import Auth from "./routes/auth/auth.component";

const App = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userDocRef = await addProfileDocumentToFirestore(user);

        onSnapshot(userDocRef, (snapShot) => {
          dispatch(
            setCurrentUser({
              ...snapShot.data(),
            })
          );
        });
      } else {
        dispatch(setCurrentUser(user));
      }
    });

    return () => unsubscribeFromAuth();
  }, [dispatch]);

  // componentDidMount() {
  //   const { setCurrentUser } = this.props;
  //   this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
  //     if (user) {
  //       const userDocRef = await addProfileDocumentToFirestore(user);

  //       onSnapshot(userDocRef, (snapShot) => {
  //         setCurrentUser({
  //           ...snapShot.data(),
  //         });
  //       });
  //     } else {
  //       setCurrentUser(user);
  //     }
  //   });
  //   // addShopToFireStore("sections", sectionsForPreview);
  // }

  // componentWillUnmount() {
  //   this.unsubscribeFromAuth();
  // }

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/shop" element={<Shop />}>
          <Route
            exact
            path="/shop"
            element={<SectionPreviewWrapperContainer />}
          />
          <Route exact path="/shop/:sectionID" element={<SectionContainer />} />
        </Route>
        <Route exact path="/checkout" element={<Checkout />} />
        <Route
          exact
          path="/auth"
          element={currentUser ? <Navigate to="/" /> : <Auth />}
        />
      </Routes>
    </div>
  );
};

// const mapStateToProps = createStructuredSelector({
//   currentUser: selectCurrentUser,
// });

// const mapDispatchToProps = (dispatch) => ({
//   setCurrentUser: (user) => dispatch(setCurrentUser(user)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
