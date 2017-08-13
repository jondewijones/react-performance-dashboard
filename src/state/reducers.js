import { initialState } from './initialState';

export default function reducers(state = initialState, action) {
    switch (action.type) {
        case ('RECEIVED_TRAFFIC_DATA'): {
            return Object.assign({}, state, {
                trafficPageData: action.trafficPageData
            })
        }
        case ('RECEIVED_SERVICE_DATA'): {
            return Object.assign({}, state, {
                servicePageData: action.servicePageData
            })
        }
        case ('UPDATE_ACTIVE_TAB'): {
            return Object.assign({}, state, {
                activeTab: action.activeTab
            })
        }
        default: {
            break;
        }
    }
    return state;
}