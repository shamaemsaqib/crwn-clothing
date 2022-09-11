import { collection, getDocs, query } from "firebase/firestore";

import {
  convertQuerySnapShotToMap,
  firestore,
} from "../../firebase/firebase.utils";

import { SHOP_ACTION_TYPES } from "./shop-action-types.actions";

export const fetchSectionsFromFirestoreStart = () => ({
  type: SHOP_ACTION_TYPES.FETCH_SECTIONS_FROM_FIRESTORE_START,
});

export const fetchSectionsFromFirestoreSuccess = (sections) => ({
  type: SHOP_ACTION_TYPES.FETCH_SECTIONS_FROM_FIRESTORE_SUCCESS,
  payload: sections,
});

export const fetchSectionsFromFirestoreFailure = (error) => ({
  type: SHOP_ACTION_TYPES.FETCH_SECTIONS_FROM_FIRESTORE_FAILURE,
  payload: error,
});

export const fetchSectionsFromFirestoreAsync = () => {
  return (dispatch) => {
    const sectionsColRef = collection(firestore, "sections");

    dispatch(fetchSectionsFromFirestoreStart());

    getDocs(query(sectionsColRef))
      .then((snapShot) => {
        const sectionsMap = convertQuerySnapShotToMap(snapShot);
        dispatch(fetchSectionsFromFirestoreSuccess(sectionsMap));
      })
      .catch((err) => dispatch(err));
  };
};
