import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import {
  pfepRequiredSampleData,
  pfepRequiredColumns,
  type AlertTableDataType,
} from "../sample-data";
import { tableKey, valueKey } from "../sample-data";

export function PFEPRequiredTable({
  data,
  isConcise,
}: {
  data: AlertTableDataType;
  isConcise: boolean;
}) {
  if (data.type !== "pfep_demand_gaps") return null;
  return (
    <div className="mt-4">
      {/** Datatable with colored header according to the current theme. */}
      <DataTable
        value={data.pfepRequired}
        paginator={isConcise ? false : true}
        rows={10}
        rowsPerPageOptions={[5, 10, 25, 50]}
        scrollHeight="400px"
        className="p-datatable-sm"
        size="small"
        showGridlines
      >
        {pfepShortageColumns.map((col) => (
          <Column
            key={col[valueKey]}
            field={col[valueKey]}
            header={col[tableKey]}
            headerStyle={{ backgroundColor: "#3e7fcb", color: "#ffffff" }}
            bodyClassName="text-sm font-semibold"
          />
        ))}
      </DataTable>
    </div>
  );
}
