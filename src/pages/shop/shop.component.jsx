import React from "react";
import { Outlet } from "react-router-dom";
import { connect } from "react-redux";

import "./shop.styles.scss";

import { fetchSectionsFromFirestoreAsync } from "../../redux/shop/shop.actions";
class Shop extends React.Component {
  componentDidMount() {
    const { fetchSectionsFromFirestoreAsync } = this.props;
    fetchSectionsFromFirestoreAsync();
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
  fetchSectionsFromFirestoreAsync: () =>
    dispatch(fetchSectionsFromFirestoreAsync()),
});

export default connect(null, mapDispatchToProps)(Shop);
