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