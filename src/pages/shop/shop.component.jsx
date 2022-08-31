import { collection, getDocs, query } from "firebase/firestore";
import React from "react";
import { Outlet } from "react-router-dom";
import { connect } from "react-redux";

import "./shop.styles.scss";

import {
  convertQuerySnapShotToMap,
  firestore,
} from "../../firebase/firebase.utils";
import { updateShopWithFirestoreData } from "../../redux/shop/shop.actions";
class Shop extends React.Component {
  componentDidMount() {
    const { updateShopWithFirestoreData } = this.props;
    const sectionsColRef = collection(firestore, "sections");

    getDocs(query(sectionsColRef)).then((snapShot) => {
      const sectionsMap = convertQuerySnapShotToMap(snapShot);
      updateShopWithFirestoreData(sectionsMap);
    });
  }

  render() {
    return (
      <div className="shop">
        <Outlet />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateShopWithFirestoreData: (sections) =>
    dispatch(updateShopWithFirestoreData(sections)),
});

export default connect(null, mapDispatchToProps)(Shop);
