import { collection, query, getFirestore, getDocs } from "firebase/firestore";
import { REVENUE_DATA_ACTIONS } from "./constants";

export const getRevenueData = async (token: any, dispatch: (action: any) => void, state: any) => {
    if (!!token) {
        const db = getFirestore();
        const companiesRef = collection(db, "revenue-data");
        const q = query(companiesRef);
        const allDocs = await getDocs(q);

        const newState: any = { ...state?.revenue };
        allDocs.forEach((doc) => {
            const data = doc.data();
            newState[data.company] = data;
        });
        dispatch({
            type: REVENUE_DATA_ACTIONS.GET,
            payload: {
                response: newState
            }
        });
    } else {
        dispatch({
            type: REVENUE_DATA_ACTIONS.GET,
            payload: {
                response: null
            }
        });
    }
}