import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { demandGapsSampleData, pfepDemandGapColumns, type AlertTableDataType } from "../sample-data";
import { tableKey, valueKey } from "../sample-data";


export function DemandGapsTable({data, isConcise}: {data: AlertTableDataType; isConcise: boolean}) {
        if(data.type !== "pfep_demand_gaps") return null
    return (
        <div className="mt-4">
            <DataTable 
                value={data.pfepDemandGaps} 
                paginator={isConcise ? false : true} 
                rows={10} 
                rowsPerPageOptions={[5, 10, 25, 50]}
                scrollHeight="400px"
                className="p-datatable-sm"
                size="small"
                showGridlines
                >
                {pfepDemandGapColumns.map((col) => (
                    <Column key={col[valueKey]} field={col[valueKey]} header={col[tableKey]} />
                ))}
            </DataTable>
        </div>
    );
}