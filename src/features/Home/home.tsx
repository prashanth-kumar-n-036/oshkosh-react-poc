import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Alerts from "./alerts";
import ExpandingSection from "../../components/expanding-section/ExpandingSection";
import HomeContext from "./homeContext";
import useFetchHomeLoadData from "./useFetchHomeLoadData";
import { HomeContextProvider } from "./homeContext";
import { SearchBar } from "./search-bar";
import type { SearchState } from "./search-bar";



export function HomeComponent() {
  const navigate = useNavigate();
  const data = useContext(HomeContext);
  const [search, setSearch] = useState<SearchState>({ORG_ID: "", FACILITY_ID: "", FIELD3: ""});
  const { isDataFetched, isError } = useFetchHomeLoadData();

  console.log("Data from context:", data);
  console.log("Is data fetched:", isDataFetched);
  console.log("Is there an error:", isError);

  const handleUserClick = () => {
    navigate("/profile");
  };

  if(!data.homeDashboardData || !data.dropDownData || !isDataFetched) return (<div>Loading</div>)
  return (
    <div className="bg-white min-h-screen flex flex-col items-center">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 flex items-center justify-between px-8 py-6 w-full">
        <div className="text-2xl font-semibold text-gray-900">Logo</div>
        <div className="flex items-center gap-4">
          <span className="text-lg text-gray-700">Welcome User</span>
          <button
            onClick={handleUserClick}
            className="text-gray-500 hover:text-gray-700 cursor-pointer transition-colors"
          >
            <i className="pi pi-user text-xl"></i>
          </button>
        </div>
      </header>

      {/* Search Section */}
      <SearchBar data={data.homeDashboardData!} search={search} setSearch={setSearch} />

      <div className="px-8 py-4 w-full">
        {/* Alerts Section */}
        <div className="mb-4">
          <ExpandingSection
            title="Alerts"
            expandableContent={<div>Additional alert details can go here.</div>}
          >
            <Alerts />
          </ExpandingSection>
        </div>
      </div>
    </div>
  );
}


export default function Home() {
  return (
    <HomeContextProvider>
      <HomeComponent />
    </HomeContextProvider>
  );
}
