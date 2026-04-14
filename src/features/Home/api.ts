import axios from "axios";
import * as constants from "./constants.ts";

const sampleHomeDataPayload = {
    EFF_FROM_DATE:
        "2026-02-17",
    EFF_TO_DATE:
        "2026-04-14",
    FACILITY_ID:
        "STH001",
    ORG_ID:
        "DEF",
    WorkCenterList:
        [{ WORK_CENTER_ID: "S7" }],
    alert_preference_list:
        "4,2,6,5"
}

type HomeDataPayload = typeof sampleHomeDataPayload;
export const getHomeData = (payload: HomeDataPayload) => axios.post("https://entpfepd01/testpfepService/api/HomeDashboard/HomeDashboardLoad", payload);


export const getUserBasedOptions = (): HomeDataPayload => {
        const currentUser = user.env;
        console.log(currentUser);
        const work_center_id_list = JSON.parse(currentUser.work_center_id_list);
        return {
            EFF_FROM_DATE: "2026-02-17",
            EFF_TO_DATE: "2026-04-14",
            ORG_ID: currentUser ? currentUser.org_id : "",
            FACILITY_ID: currentUser ? currentUser.facility_id : "",
            WorkCenterList:
                currentUser && work_center_id_list
                    ? work_center_id_list.map((obj) => ({
                          WORK_CENTER_ID: obj
                      }))
                    : [],
            alert_preference_list:
                currentUser && currentUser.alert_preference_list
                    ? currentUser.alert_preference_list
                    : "1,2,3,4,5,6"
        };
    };