export const RECEIVED_TRAFFIC_DATA = 'RECEIVED_TRAFFIC_DATA';
export const RECEIVED_SERVICE_DATA = 'RECEIVED_SERVICE_DATA';
export const UPDATE_ACTIVE_TAB = 'UPDATE_ACTIVE_TAB';


export function receivedTrafficData(trafficData) {
    return {
        type: RECEIVED_TRAFFIC_DATA,
        trafficPageData: trafficData
    }
}

export function receivedServiceData(serviceData) {
    return {
        type: RECEIVED_SERVICE_DATA,
        servicePageData: serviceData
    }
}

export function updateActiveTab(activeTab) {
    return {
        type: UPDATE_ACTIVE_TAB,
        activeTab: activeTab
    }
}
