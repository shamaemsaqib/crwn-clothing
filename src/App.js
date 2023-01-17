import { React, lazy, Suspense, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { onSnapshot } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux/es/exports";

import "./App.css";

import Header from "./components/header/header.component";
import Home from "./routes/home/home.component";

import {
  addProfileDocumentToFirestore,
  onAuthStateChangedListener,
} from "./firebase/firebase.utils";

import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
import DottedSpinner from "./components/withSpinnerHOC/dotted-spinner/dotted-spinner.component";

//Lazy imports
const Shop = lazy(() => import("./routes/shop/shop.component"));
const Checkout = lazy(() => import("./routes/checkout/checkout.component"));
const SectionContainer = lazy(() =>
  import("./routes/section/section.container")
);
const SectionPreviewWrapperContainer = lazy(() =>
  import("./routes/section-preview-wrapper/section-preview-wrapper.container")
);
const PaymentSuccessful = lazy(() =>
  import("./routes/payment-successful/payment-succussful.component")
);
const PaymentUnsuccessful = lazy(() =>
  import("./routes/payment-unsuccessful/payment-unsuccussful.component")
);
const Auth = lazy(() => import("./routes/auth/auth.component"));

const App = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    const unsubscribeFromAuth = onAuthStateChangedListener(async (user) => {
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

    return unsubscribeFromAuth;
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
    <Suspense fallback={DottedSpinner}>
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
            <Route
              exact
              path="/shop/:sectionID"
              element={<SectionContainer />}
            />
          </Route>
          <Route exact path="/checkout" element={<Checkout />} />
          <Route
            exact
            path="/auth"
            element={currentUser ? <Navigate to="/" /> : <Auth />}
          />
          <Route
            exact
            path="/payment-successful"
            element={<PaymentSuccessful />}
          />
          <Route
            exact
            path="/payment-unsuccessful"
            element={<PaymentUnsuccessful />}
          />
        </Routes>
      </div>
    </Suspense>
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
