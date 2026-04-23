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
    "MOQAlertGraphs": [
        {
            "Week_Start_Date": "2026-04-19T00:00:00",
            "Total_Count": 181,
            "series": [
                {
                    "name": "BP New",
                    "value": 136
                },
                {
                    "name": "<2 Weeks",
                    "value": 33
                },
                {
                    "name": "2-4 Weeks",
                    "value": 4
                },
                {
                    "name": ">4 Weeks",
                    "value": 8
                }
            ]
        },
        {
            "Week_Start_Date": "2026-04-12T00:00:00",
            "Total_Count": 45,
            "series": [
                {
                    "name": "BP New",
                    "value": 24
                },
                {
                    "name": "<2 Weeks",
                    "value": 10
                },
                {
                    "name": "2-4 Weeks",
                    "value": 6
                },
                {
                    "name": ">4 Weeks",
                    "value": 5
                }
            ]
        },
        {
            "Week_Start_Date": "2026-04-05T00:00:00",
            "Total_Count": 21,
            "series": [
                {
                    "name": "BP New",
                    "value": 9
                },
                {
                    "name": "<2 Weeks",
                    "value": 4
                },
                {
                    "name": "2-4 Weeks",
                    "value": 6
                },
                {
                    "name": ">4 Weeks",
                    "value": 2
                }
            ]
        },
        {
            "Week_Start_Date": "2026-03-29T00:00:00",
            "Total_Count": 12,
            "series": [
                {
                    "name": "BP New",
                    "value": 1
                },
                {
                    "name": "<2 Weeks",
                    "value": 6
                },
                {
                    "name": "2-4 Weeks",
                    "value": 5
                },
                {
                    "name": ">4 Weeks",
                    "value": 0
                }
            ]
        },
        {
            "Week_Start_Date": "2026-03-22T00:00:00",
            "Total_Count": 11,
            "series": [
                {
                    "name": "BP New",
                    "value": 3
                },
                {
                    "name": "<2 Weeks",
                    "value": 6
                },
                {
                    "name": "2-4 Weeks",
                    "value": 2
                },
                {
                    "name": ">4 Weeks",
                    "value": 0
                }
            ]
        },
        {
            "Week_Start_Date": "2026-03-15T00:00:00",
            "Total_Count": 8,
            "series": [
                {
                    "name": "BP New",
                    "value": 3
                },
                {
                    "name": "<2 Weeks",
                    "value": 5
                },
                {
                    "name": "2-4 Weeks",
                    "value": 0
                },
                {
                    "name": ">4 Weeks",
                    "value": 0
                }
            ]
        },
        {
            "Week_Start_Date": "2026-03-08T00:00:00",
            "Total_Count": 5,
            "series": [
                {
                    "name": "BP New",
                    "value": 3
                },
                {
                    "name": "<2 Weeks",
                    "value": 2
                },
                {
                    "name": "2-4 Weeks",
                    "value": 0
                },
                {
                    "name": ">4 Weeks",
                    "value": 0
                }
            ]
        },
        {
            "Week_Start_Date": "2026-03-01T00:00:00",
            "Total_Count": 2,
            "series": [
                {
                    "name": "BP New",
                    "value": 2
                },
                {
                    "name": "<2 Weeks",
                    "value": 0
                },
                {
                    "name": "2-4 Weeks",
                    "value": 0
                },
                {
                    "name": ">4 Weeks",
                    "value": 0
                }
            ]
        }
    ],
    "ShortageAlertGraphs": [
        {
            "Week_Start_Date": "2026-04-19T00:00:00",
            "Total_Count": 60,
            "series": [
                {
                    "name": "BP New",
                    "value": 56
                },
                {
                    "name": "<2 Weeks",
                    "value": 1
                },
                {
                    "name": "2-4 Weeks",
                    "value": 0
                },
                {
                    "name": ">4 Weeks",
                    "value": 3
                }
            ]
        },
        {
            "Week_Start_Date": "2026-04-05T00:00:00",
            "Total_Count": 4,
            "series": [
                {
                    "name": "BP New",
                    "value": 1
                },
                {
                    "name": "<2 Weeks",
                    "value": 0
                },
                {
                    "name": "2-4 Weeks",
                    "value": 0
                },
                {
                    "name": ">4 Weeks",
                    "value": 3
                }
            ]
        },
        {
            "Week_Start_Date": "2026-03-01T00:00:00",
            "Total_Count": 3,
            "series": [
                {
                    "name": "BP New",
                    "value": 3
                },
                {
                    "name": "<2 Weeks",
                    "value": 0
                },
                {
                    "name": "2-4 Weeks",
                    "value": 0
                },
                {
                    "name": ">4 Weeks",
                    "value": 0
                }
            ]
        }
    ],
    "RequiredAlertGraphs": [
        {
            "Week_Start_Date": "2026-04-12T00:00:00",
            "Total_Count": 44,
            "series": [
                {
                    "name": "BP New",
                    "value": 27
                },
                {
                    "name": "<2 Weeks",
                    "value": 1
                },
                {
                    "name": "2-4 Weeks",
                    "value": 0
                },
                {
                    "name": ">4 Weeks",
                    "value": 16
                }
            ]
        },
        {
            "Week_Start_Date": "2026-04-05T00:00:00",
            "Total_Count": 17,
            "series": [
                {
                    "name": "BP New",
                    "value": 1
                },
                {
                    "name": "<2 Weeks",
                    "value": 0
                },
                {
                    "name": "2-4 Weeks",
                    "value": 0
                },
                {
                    "name": ">4 Weeks",
                    "value": 16
                }
            ]
        },
        {
            "Week_Start_Date": "2026-03-01T00:00:00",
            "Total_Count": 16,
            "series": [
                {
                    "name": "BP New",
                    "value": 16
                },
                {
                    "name": "<2 Weeks",
                    "value": 0
                },
                {
                    "name": "2-4 Weeks",
                    "value": 0
                },
                {
                    "name": ">4 Weeks",
                    "value": 0
                }
            ]
        }
    ],
    "ERPAlertGraphs": [
        {
            "Name": "POU CONTAINER",
            "Total_Count": 26,
            "series": [
                {
                    "name": "BP New",
                    "value": 26
                },
                {
                    "name": "<2 Weeks",
                    "value": 0
                },
                {
                    "name": "2-4 Weeks",
                    "value": 0
                },
                {
                    "name": ">4 Weeks",
                    "value": 0
                }
            ]
        },
        {
            "Name": "SUPPLIER CONTAINER",
            "Total_Count": 9,
            "series": [
                {
                    "name": "BP New",
                    "value": 9
                },
                {
                    "name": "<2 Weeks",
                    "value": 0
                },
                {
                    "name": "2-4 Weeks",
                    "value": 0
                },
                {
                    "name": ">4 Weeks",
                    "value": 0
                }
            ]
        },
        {
            "Name": "SUPPLIER CONTAINER QTY",
            "Total_Count": 9,
            "series": [
                {
                    "name": "BP New",
                    "value": 9
                },
                {
                    "name": "<2 Weeks",
                    "value": 0
                },
                {
                    "name": "2-4 Weeks",
                    "value": 0
                },
                {
                    "name": ">4 Weeks",
                    "value": 0
                }
            ]
        },
        {
            "Name": "KANBAN CARDS",
            "Total_Count": 30,
            "series": [
                {
                    "name": "BP New",
                    "value": 30
                },
                {
                    "name": "<2 Weeks",
                    "value": 0
                },
                {
                    "name": "2-4 Weeks",
                    "value": 0
                },
                {
                    "name": ">4 Weeks",
                    "value": 0
                }
            ]
        },
        {
            "Name": "CONTAINER QTY",
            "Total_Count": 14,
            "series": [
                {
                    "name": "BP New",
                    "value": 14
                },
                {
                    "name": "<2 Weeks",
                    "value": 0
                },
                {
                    "name": "2-4 Weeks",
                    "value": 0
                },
                {
                    "name": ">4 Weeks",
                    "value": 0
                }
            ]
        }
    ],
    "ApprovedMetrics": [
        {
            "Week_Start_Date": "2026-03-01T00:00:00",
            "series": [
                {
                    "name": "Approved_Percentage",
                    "value": 16.000000
                },
                {
                    "name": "Not_Approved_Percentage",
                    "value": 84.000000
                }
            ]
        },
        {
            "Week_Start_Date": "2026-03-08T00:00:00",
            "series": [
                {
                    "name": "Approved_Percentage",
                    "value": 16.000000
                },
                {
                    "name": "Not_Approved_Percentage",
                    "value": 84.000000
                }
            ]
        },
        {
            "Week_Start_Date": "2026-03-15T00:00:00",
            "series": [
                {
                    "name": "Approved_Percentage",
                    "value": 16.000000
                },
                {
                    "name": "Not_Approved_Percentage",
                    "value": 84.000000
                }
            ]
        },
        {
            "Week_Start_Date": "2026-03-22T00:00:00",
            "series": [
                {
                    "name": "Approved_Percentage",
                    "value": 16.000000
                },
                {
                    "name": "Not_Approved_Percentage",
                    "value": 84.000000
                }
            ]
        },
        {
            "Week_Start_Date": "2026-03-29T00:00:00",
            "series": [
                {
                    "name": "Approved_Percentage",
                    "value": 16.000000
                },
                {
                    "name": "Not_Approved_Percentage",
                    "value": 84.000000
                }
            ]
        },
        {
            "Week_Start_Date": "2026-04-05T00:00:00",
            "series": [
                {
                    "name": "Approved_Percentage",
                    "value": 16.000000
                },
                {
                    "name": "Not_Approved_Percentage",
                    "value": 84.000000
                }
            ]
        },
        {
            "Week_Start_Date": "2026-04-12T00:00:00",
            "series": [
                {
                    "name": "Approved_Percentage",
                    "value": 16.000000
                },
                {
                    "name": "Not_Approved_Percentage",
                    "value": 84.000000
                }
            ]
        },
        {
            "Week_Start_Date": "2026-04-19T00:00:00",
            "series": [
                {
                    "name": "Approved_Percentage",
                    "value": 16.000000
                },
                {
                    "name": "Not_Approved_Percentage",
                    "value": 84.000000
                }
            ]
        }
    ],
    "DisparateMetrics": [
        {
            "Week_Start_Date": "2026-03-01T00:00:00",
            "series": [
                {
                    "name": "Disparate_Percentage",
                    "value": 3.000000
                },
                {
                    "name": "Not_Disparate_Percentage",
                    "value": 97.000000
                }
            ]
        },
        {
            "Week_Start_Date": "2026-03-08T00:00:00",
            "series": [
                {
                    "name": "Disparate_Percentage",
                    "value": 3.000000
                },
                {
                    "name": "Not_Disparate_Percentage",
                    "value": 97.000000
                }
            ]
        },
        {
            "Week_Start_Date": "2026-03-15T00:00:00",
            "series": [
                {
                    "name": "Disparate_Percentage",
                    "value": 3.000000
                },
                {
                    "name": "Not_Disparate_Percentage",
                    "value": 97.000000
                }
            ]
        },
        {
            "Week_Start_Date": "2026-03-22T00:00:00",
            "series": [
                {
                    "name": "Disparate_Percentage",
                    "value": 3.000000
                },
                {
                    "name": "Not_Disparate_Percentage",
                    "value": 97.000000
                }
            ]
        },
        {
            "Week_Start_Date": "2026-03-29T00:00:00",
            "series": [
                {
                    "name": "Disparate_Percentage",
                    "value": 3.000000
                },
                {
                    "name": "Not_Disparate_Percentage",
                    "value": 97.000000
                }
            ]
        },
        {
            "Week_Start_Date": "2026-04-05T00:00:00",
            "series": [
                {
                    "name": "Disparate_Percentage",
                    "value": 3.000000
                },
                {
                    "name": "Not_Disparate_Percentage",
                    "value": 97.000000
                }
            ]
        },
        {
            "Week_Start_Date": "2026-04-12T00:00:00",
            "series": [
                {
                    "name": "Disparate_Percentage",
                    "value": 3.000000
                },
                {
                    "name": "Not_Disparate_Percentage",
                    "value": 97.000000
                }
            ]
        },
        {
            "Week_Start_Date": "2026-04-19T00:00:00",
            "series": [
                {
                    "name": "Disparate_Percentage",
                    "value": 3.000000
                },
                {
                    "name": "Not_Disparate_Percentage",
                    "value": 97.000000
                }
            ]
        }
    ],
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

