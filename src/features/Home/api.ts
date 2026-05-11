import axios from "axios";
import * as constants from "./constants.ts";
import { 
    homeDashbaordData,
    demandGapsSampleData, 
    pfepRequiredSampleData, 
    pfepShortageAlertsSampleData, 
    erpDiscrepancySampleData, 
    moqCeilingSampleData, 
    duplciateWorkcenterSampleData,
    weightDimesnsionSample, 
    packagingDetailsSample} from "./sample-data.js";
import type { HomeDataPayload, HomeDashboardData, ItemRecord, ContainerRecord } from "./sample-data.js";

/* // Mock user object for POC
const user = {
  env: {
    name: "Test User",
    org_id: "ORG001",
    facility_id: "FAC001",
    work_center_id_list: '["WC1", "WC2"]',
    alert_preference_list: "1,2,3,4,5,6"
  }
}; */



export const getUserBasedOptions = (): Promise<HomeDataPayload> => {
    const currentUser = user.env;
    const work_center_id_list = JSON.parse(currentUser.work_center_id_list);
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                Name: currentUser.name,
                EFF_FROM_DATE: "2026-02-17",
                EFF_TO_DATE: "2026-04-14",
                ORG_ID: currentUser ? currentUser.org_id : "",
                FACILITY_ID: currentUser ? currentUser.facility_id : "",
                WorkCenterList:
                    currentUser && work_center_id_list
                        ? work_center_id_list.map((obj: string) => ({
                            WORK_CENTER_ID: obj
                        }))
                        : [],
                alert_preference_list:
                    currentUser && currentUser.alert_preference_list
                        ? currentUser.alert_preference_list
                        : "1,2,3,4,5,6"
            });
        }, 1000);
    });
};


export const getHomeData = (payload: HomeDataPayload) => {
    return new Promise<HomeDashboardData>((resolve) => {
        setTimeout(() => {
            resolve(homeDashbaordData);
        }, 1000);
    });
};

export const getTableData = (alertType: typeof constants.typesOfAlerts[number]) => {
    const tableMap = {
        "pfepShortage": pfepShortageAlertsSampleData,
        "pfepRequired": pfepRequiredSampleData,
        "moqCeiling": moqCeilingSampleData,
        "erp": erpDiscrepancySampleData,
        "demandGaps": demandGapsSampleData,
        "duplicateWorkcenter": duplciateWorkcenterSampleData
    };
    return new Promise<typeof tableMap[typeof constants.typesOfAlerts[number]]>((resolve) => {
        setTimeout(() => {
            resolve(tableMap[alertType]);
        }, 1000);
    });
};

export const getMetricTableData = (metricType: typeof constants.typesOfMetrics[number]): Promise<ItemRecord[] | ContainerRecord[] | never[]>  => {
    const tableMap = {
        "WeightDimension": weightDimesnsionSample() ,"PastDueApprovals": [], "PackagingDetail": packagingDetailsSample()
    }

    return new Promise<typeof tableMap[typeof constants.typesOfMetrics[number]]>(res => {
        setTimeout(() => res(tableMap[metricType]), 1000)
    })
}
