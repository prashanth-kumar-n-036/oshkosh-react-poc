import axios from "axios";
import * as constants from "./constants.ts";
import { sampleHomeDataPayload, homeDashbaordData } from "./sample-data.js";
import type { HomeDataPayload, HomeDashboardData } from "./sample-data.js";



export const getUserBasedOptions = (): Promise<HomeDataPayload> => {
    const currentUser = user.env;
    const work_center_id_list = JSON.parse(currentUser.work_center_id_list);
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
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

