import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./shop.styles.scss";

import { fetchSectionsFromFirestoreAsync } from "../../redux/shop/shop.actions";
import { selectSections } from "../../redux/shop/shop.selectors";

const Shop = () => {
  const dispatch = useDispatch();
  const sections = useSelector(selectSections);

  useEffect(() => {
    //Routes remounts every time when there is a route change
    //So to prevent unnecessary fetching on every route change
    //It will only fetch when there is no sections available
    if (sections == null) {
      dispatch(fetchSectionsFromFirestoreAsync());
    }
  }, [sections, dispatch]);

  // componentDidMount() {
  //   const { fetchSectionsFromFirestoreAsync } = this.props;
  //   fetchSectionsFromFirestoreAsync();
  // }

  return (
    <div className="shop">
      <Outlet />
    </div>
  );
};

// const mapDispatchToProps = (dispatch) => ({
//   fetchSectionsFromFirestoreAsync: () =>
//     dispatch(fetchSectionsFromFirestoreAsync()),
// });

// export default connect(null, mapDispatchToProps)(Shop);

export default Shop;
