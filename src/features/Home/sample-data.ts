export const sampleHomeDataPayload = {
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
};

export type HomeDataPayload = typeof sampleHomeDataPayload & {Name? : string};

export const homeDashbaordData = {
    "Segment": [
        {
            "ORG_ID": "DEF",
            "IsSelected": true
        },
        {
            "ORG_ID": "DLV",
            "IsSelected": false
        },
        {
            "ORG_ID": "LEON",
            "IsSelected": false
        },
        {
            "ORG_ID": "MTM",
            "IsSelected": false
        }
    ],
    "Warehouse": [
        {
            "FACILITY_ID": "611351",
            "IsSelected": false
        },
        {
            "FACILITY_ID": "622726",
            "IsSelected": false
        },
        {
            "FACILITY_ID": "623112",
            "IsSelected": false
        },
        {
            "FACILITY_ID": "623164",
            "IsSelected": false
        },
        {
            "FACILITY_ID": "628278",
            "IsSelected": false
        },
        {
            "FACILITY_ID": "628734",
            "IsSelected": false
        },
        {
            "FACILITY_ID": "9708040",
            "IsSelected": false
        },
        {
            "FACILITY_ID": "9749150",
            "IsSelected": false
        },
        {
            "FACILITY_ID": "9749155",
            "IsSelected": false
        },
        {
            "FACILITY_ID": "9759252",
            "IsSelected": false
        },
        {
            "FACILITY_ID": "9781269",
            "IsSelected": false
        },
        {
            "FACILITY_ID": "APL001",
            "IsSelected": false
        },
        {
            "FACILITY_ID": "ARF001",
            "IsSelected": false
        },
        {
            "FACILITY_ID": "ATC001",
            "IsSelected": false
        },
        {
            "FACILITY_ID": "AVE001",
            "IsSelected": false
        },
        {
            "FACILITY_ID": "CONCEPT",
            "IsSelected": false
        },
        {
            "FACILITY_ID": "ECT001",
            "IsSelected": false
        },
        {
            "FACILITY_ID": "GPS001",
            "IsSelected": false
        },
        {
            "FACILITY_ID": "JEF001",
            "IsSelected": false
        },
        {
            "FACILITY_ID": "MWA001",
            "IsSelected": false
        },
        {
            "FACILITY_ID": "NPD001",
            "IsSelected": false
        },
        {
            "FACILITY_ID": "NTH001",
            "IsSelected": false
        },
        {
            "FACILITY_ID": "OKD001",
            "IsSelected": false
        },
        {
            "FACILITY_ID": "OSK001",
            "IsSelected": false
        },
        {
            "FACILITY_ID": "PLT001",
            "IsSelected": false
        },
        {
            "FACILITY_ID": "PMA001",
            "IsSelected": false
        },
        {
            "FACILITY_ID": "PMI001",
            "IsSelected": false
        },
        {
            "FACILITY_ID": "RET001",
            "IsSelected": false
        },
        {
            "FACILITY_ID": "RSC001",
            "IsSelected": false
        },
        {
            "FACILITY_ID": "SSP001",
            "IsSelected": false
        },
        {
            "FACILITY_ID": "STH001",
            "IsSelected": true
        },
        {
            "FACILITY_ID": "TWA001",
            "IsSelected": false
        },
        {
            "FACILITY_ID": "WST001",
            "IsSelected": false
        },
        {
            "FACILITY_ID": "YPG001",
            "IsSelected": false
        }
    ],
    "MOQAlertGraphs": [],
    "ShortageAlertGraphs": [],
    "RequiredAlertGraphs": [],
    "ERPAlertGraphs": [],
    "ApprovedMetrics": null,
    "DisparateMetrics": null,
    "PackagingType": null,
    "WeightDimension": 23607,
    "PackagingDetail": 49,
    "PastDueApprovals": 5,
    "DemandGap": 0,
    "WorkCenterList": [
        {
            "WORK_CENTER_ID": "S7"
        }
    ],
    "InventoryAvailabilityCount": 0,
    "MultipleAssignmentCount": 13
};

export type HomeDashboardData = typeof homeDashbaordData;

