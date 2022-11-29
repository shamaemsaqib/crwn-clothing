import { getSectionsFromFirestore } from "../../firebase/firebase.utils";

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

export const fetchSectionsFromFirestoreAsync = () => async (dispatch) => {
  dispatch(fetchSectionsFromFirestoreStart());
  try {
    const sectionsMap = await getSectionsFromFirestore();
    dispatch(fetchSectionsFromFirestoreSuccess(sectionsMap));
  } catch (error) {
    dispatch(fetchSectionsFromFirestoreFailure(error));
  }
};
