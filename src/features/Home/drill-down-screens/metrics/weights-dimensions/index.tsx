import { WeightsAndDimensionsTable } from "../../../metric-tables/weights-dimensions-table";
import { weightDimesnsionSample } from "../../../sample-data";
import { SearchBar } from "./search-bar";

export const WeightsDimensionTable = () => {
  return (
    <>
      <SearchBar
        search={{ ORG_ID: "", FACILITY_ID: "", WORK_CENTER: [] }}
        setSearch={() => {}}
        onSearchClick={() => {}}
      />
      <div className="mx-8 mb-6 border border-blue-300 rounded-lg shadow-sm p-4">
        <WeightsAndDimensionsTable
          isConcise={false}
          data={weightDimesnsionSample()}
        />
      </div>
    </>
  );
};
