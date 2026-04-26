export const wildCardCollectionKeys = {
    WORK_CENTER_ID: "WorkCenterList"
};

export const workCenterWildCardConfig = {
     serviceUrl: {
        dropdown: "WildcardSearch/GetFields?fieldName=WORK_CENTER_ID",
        table: "WildcardSearch/GetDropdownValuesWorkCenter"
    },
    tableFields: [
        { header: "ID", field: "WORK_CENTER_ID" },
        { header: "Description", field: "WORK_CENTER_DESC" }
    ],
    label: "Work Center (Parent or Child)",
    isMultiSelect: true,
    selectedData: [],
    options: [],
    modelName: "WORK_CENTER_ID",
    styleclass: "col-md-2",
    dependentData: {
        ORG_ID: "",
        FACILITY_ID: ""
    }
}

export const barColors = ['#4f8fd9', '#ffdd57', '#ff9f58', '#ff6f61']; // Brighter elegant blue, sunny yellow, coral orange, vivid red
export const legendData = [
    {dataKey: '>4 Weeks', value: '>4 Weeks', color: '#4f8fd9'},
    {dataKey: '2-4 Weeks', value: '2-4 Weeks', color: '#ffdd57'},
    {dataKey: '<2 Weeks', value: '<2 Weeks', color: '#ff9f58'},
    {dataKey: 'BP New', value: 'BP New', color: '#ff6f61'}
]
