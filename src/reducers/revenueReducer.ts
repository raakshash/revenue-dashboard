import { REVENUE_DATA_ACTIONS } from '../actions/revenue/constants';

export const RevenueReducer = (state: any, action: any) => {
    switch (action.type) {
        case REVENUE_DATA_ACTIONS.GET:
            return action.payload.response;
        default:
            return state?.revenue || {};
    }
}
