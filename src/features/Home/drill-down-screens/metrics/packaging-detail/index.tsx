import { PackagingDetailTable } from "../../../metric-tables/packaging-detail";
import { packagingDetailsSample, weightDimesnsionSample } from "../../../sample-data";
import { SearchBar } from "./search-bar";

export const PackagingDetailsTable = () => {
  return (
    <>
      <SearchBar
        search={{ ORG_ID: "", FACILITY_ID: "", WORK_CENTER: [] }}
        setSearch={() => {}}
        onSearchClick={() => {}}
      />
      <div className="mb-6 border border-blue-300 rounded-lg shadow-sm p-8 w-11/12">
        <PackagingDetailTable
          isConcise={false}
          data={packagingDetailsSample()}
        />
      </div>
    </>
  );
};
