import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { FloatLabel } from "primereact/floatlabel";
import { MultiSelect } from "primereact/multiselect";
import { OverlayPanel } from "primereact/overlaypanel";
import { data } from "react-router";
import type { HomeDashboardData } from "./sample-data";
import React, { useRef, useState } from "react";

export interface SearchState {
    ORG_ID: string;
    FACILITY_ID: string;
    FIELD3: string;
}

export const SearchBar = ({ data, search, setSearch }: { data: HomeDashboardData; search: SearchState; setSearch: React.Dispatch<React.SetStateAction<SearchState>> }) => {
    const [lookupOpen, setLookupOpen] = useState<boolean>(false);
    const lookupRef = useRef<OverlayPanel>(null);

    const openLookup = (e: React.MouseEvent<HTMLButtonElement>) => {
        
            lookupRef.current?.toggle(e);
        setLookupOpen(!lookupOpen);
    };

    return (
        <div className="px-16 py-8 w-5/6">
            <div className="bg-white border border-gray-200 rounded-3xl p-6 flex items-center gap-4 shadow-sm">
                <FloatLabel className="flex-1">
                    <Dropdown
                        id="org_id_dd"
                        className="p-inputtext-sm rounded-full border-gray-200 bg-gray-50 w-full"
                        optionValue="ORG_ID"
                        optionLabel="ORG_ID"
                        options={data.Segment}
                        value={search.ORG_ID}
                        onChange={(e) => setSearch(prev => ({ ...prev, ORG_ID: e.value }))}
                    ></Dropdown>
                    <label htmlFor="org_id_dd">Select Organization</label>
                </FloatLabel>
                <FloatLabel className="flex-1">
                    <Dropdown
                        id="facility_id_dd"
                        className="p-inputtext-sm rounded-full border-gray-200 bg-gray-50 w-full"
                        optionValue="FACILITY_ID"
                        optionLabel="FACILITY_ID"
                        options={data.Warehouse}
                        value={search.FACILITY_ID}
                        onChange={(e) => setSearch(prev => ({ ...prev, FACILITY_ID: e.value }))}
                    ></Dropdown>
                    <label htmlFor="facility_id_dd">Select Facility</label>
                </FloatLabel>
                <div className="p-inputgroup flex-1 rounded-full">
                    <Button icon="pi pi-search" className="p-button-warning p-button-sm outline-none" size="small" onClick={e => lookupRef?.current?.toggle(e)}/>
                    <FloatLabel className="flex-1 flex flex-row flex-nowrap">
                        <MultiSelect
                            value={search.FIELD3}
                            onChange={(e) => setSearch(prev => ({ ...prev, FIELD3: e.value }))}
                            optionLabel="FIELD3"
                            options={[
                                { FIELD3: "Option 1", id: "1" },
                                { FIELD3: "Option 2", id: "2" },
                                { FIELD3: "Option 3", id: "3" },
                                { FIELD3: "Option 4", id: "4" },
                                { FIELD3: "Option 5", id: "5" },
                                { FIELD3: "Option 6", id: "6" }
                            ]}
                            className="p-inputtext-sm border-gray-200 bg-gray-50 w-11/12 outline-none rounded-r-full"
                            display="chip"
                            maxSelectedLabels={2}
                            disabled={lookupOpen}>
                        </MultiSelect>
                        <label htmlFor="field3_input">Field 3</label>
                    </FloatLabel>
                    <OverlayPanel ref={lookupRef} showCloseIcon={true} dismissable={false} closeIcon="pi pi-times" id="lookup_panel" className="w-1/4 p-4">
                        <div className="flex flex-col gap-2">
                            <span className="font-semibold">Lookup Content</span>
                            <span>Additional details or actions can be placed here.</span>
                        </div>
                    </OverlayPanel>
                </div>
                <Button
                    label="Search"
                    className="p-button-rounded p-button-outlined p-button-sm"
                />
            </div>
        </div>
    )
}