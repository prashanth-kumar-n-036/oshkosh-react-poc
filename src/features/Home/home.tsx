import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import Alerts, {CustomLegend} from "./alerts";
import ExpandingSection from "../../components/expanding-section/ExpandingSection";
import HomeContext from "./homeContext";
import useFetchHomeLoadData from "./useFetchHomeLoadData";
import { HomeContextProvider } from "./homeContext";
import { SearchBar } from "./search-bar";
import type { SearchState } from "./search-bar";
import { legendData } from "./constants";



export function HomeComponent() {
  const navigate = useNavigate();
  const data = useContext(HomeContext);
  const [search, setSearch] = useState<SearchState>({ORG_ID: "", FACILITY_ID: "", WORK_CENTER: []});
  const { isDataFetched, isError } = useFetchHomeLoadData();

  const handleUserClick = () => {
    navigate("/profile");
  };

  if(!data.homeDashboardData || !data.dropDownData || !isDataFetched) return (<div>Loading</div>)
  return (
    <div className="bg-white min-h-screen flex flex-col items-center">
      {/* Header */}
      <header className="bg-orange-50 border-b border-orange-200 flex items-center justify-between px-8 py-4 w-full shadow-sm">
        <div className="flex items-center gap-3">
          <img src="/src/assets/OSKMAR_ScopeLogo_OrangeBlack.jpg" alt="Logo" className="h-12 w-auto" />
          <div className="h-8 w-0.5 bg-gradient-to-b from-orange-300 to-blue-300"></div>
          <span className="text-xl font-semibold text-gray-800">Dashboard</span>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-gray-700">Welcome {data.userBasedOptions?.Name} !!</span>
          <button
            onClick={handleUserClick}
            className="p-2 rounded-full hover:bg-orange-100 text-orange-600 transition-colors"
          >
            <i className="pi pi-user text-lg"></i>
          </button>
        </div>
      </header>

      {/* Search Section */}
      <SearchBar data={data.homeDashboardData!} search={search} setSearch={setSearch} />

      <div className="px-8 py-4 w-full">
        {/* Alerts Section */}
        <div className="mb-4">
            <Alerts />
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
