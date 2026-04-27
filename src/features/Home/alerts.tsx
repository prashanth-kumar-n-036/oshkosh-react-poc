import PfepShortageAlert from "./alerts/pfep-overplanned-alert";
import PfepRequiredAlert from "./alerts/pfep-required-alert";
import MOQCeilingAlert from "./alerts/moq-ceiling-alert";
import ERPAlert from "./alerts/erp-alert";
import DemandGapsAlert from "./alerts/demand-gaps-alert";
import ExpandingSection from "../../components/expanding-section/ExpandingSection";
import { legendData, typesOfAlerts } from "./constants";
import React, { useEffect, useState } from "react";
import { DemandGapsTable } from "./alert-tables/demand-gaps-table";
import { getTableData } from "./api";
import { demandGapsSampleData, duplciateWorkcenterSampleData, pfepRequiredSampleData, pfepShortageAlertsSampleData, erpDiscrepancySampleData, moqCeilingSampleData } from "./sample-data";
import type { AlertTableDataType } from "./sample-data";

export default function Alerts() {
  const [alertType, setAlertType] = useState<typeof typesOfAlerts[number] | null>(null);
  const [conciseTable, setConciseTable] = useState<React.ReactNode | "loading" | null>(<TableSkeletion />);


  useEffect(() => {
    const fetchData = async () => {
      setConciseTable(<TableSkeletion />);
      const getTableDataForAlert = async (alertType: typeof typesOfAlerts[number]) => await getTableData(alertType);
      let component = null;
      const data : AlertTableDataType = await getTableDataForAlert(alertType as typeof typesOfAlerts[number])
      switch (true) {
        case alertType === "pfepRequired" && data.type === "pfep_required_alerts":
            component = <DemandGapsTable data={data} isConcise={true} />;
        case alertType === "duplicateWorkcenter" && data.type === "pfep_duplicate_workcenter_assignment":
            component = <DemandGapsTable data={data} isConcise={true} />;
          break;
        case alertType === "pfepShortage" && data.type === "pfep_shortage_alerts":
            component = <DemandGapsTable data={data} isConcise={true} />;
          break;
        case alertType === "moqCeiling" && data.type === "pfep_moq_ceiling_alerts":
          component = <DemandGapsTable data={data} isConcise={true} />;
          break;
        case alertType === "erp" && data.type === "erp_discrepancy_alerts":
          component = <DemandGapsTable data={data} isConcise={true} />;
          break;
        case alertType === "demandGaps" && data.type === "pfep_demand_gaps":
          component = <DemandGapsTable data={data} isConcise={true} />;
          break;
        default:
          console.log("No alert selected");
      }

      setConciseTable(<TableSkeletion />);
    }

    fetchData();
  }, [alertType])

  return (
    <ExpandingSection
      title="Alerts"
      headerChildren={<CustomLegend payload={legendData} />}
      expandableContent={conciseTable}
    >
      <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm">
        <div className="flex flex-row justify-around flex-wrap gap-6 gap-y-12">
          <div className="border border-blue-300 px-4 py-3 rounded-md shadow-sm">
              <PfepRequiredAlert onClick={setAlertType} />
              <p className="text-slate-500 text-xs font-bold text-center pt-4">PFEP Required </p>
          </div>
          <div className="border border-blue-300 px-4 py-3 rounded-md shadow-sm">
            <PfepShortageAlert onClick={setAlertType} />
            <p className="text-slate-500 text-xs font-bold text-center pt-4">PFEP Over/Under Planned</p>
          </div>
          <div className="border border-blue-300 px-4 py-3 rounded-md shadow-sm">
            <MOQCeilingAlert onClick={setAlertType} />
            <p className="text-slate-500 text-xs font-bold text-center pt-4">MOQ Ceiling</p>
          </div>
          <div className="border border-blue-300 px-4 py-3 rounded-md shadow-sm">
            <ERPAlert onClick={setAlertType} />
            <p className="text-slate-500 text-xs font-bold text-center pt-4" >ERP Discrepancy</p>
          </div>
          <div className="border border-blue-300 px-4 py-3 rounded-md shadow-sm">
            <DemandGapsAlert onClick={setAlertType} value={45} label="Demand Gaps" />
            <p className="text-slate-500 text-xs font-bold text-center pt-4">PFEP Demand Gaps</p>
          </div>
          <div className="border border-blue-300 px-4 py-3 rounded-md shadow-sm">
            <DemandGapsAlert onClick={setAlertType} value={10} label="Duplicate Workcenter Assignment" />
            <p className="text-slate-500 text-xs font-bold text-center pt-4">Duplicate Workcenter Assignment</p>
          </div>
        </div>
      </div>
    </ExpandingSection>
  );
}

export function TableSkeletion() {
  return (
    <div className="mt-4">
      <div className="animate-pulse flex justify-center">
       {/*  <div className="h-4 bg-gray-300 rounded w-1/4 mb-4"></div>
        <div className="h-48 bg-gray-300 rounded"></div> */}
        <table className="w-full mt-4 mx-20  border-slate-300 border border-collapse">
          <thead>
            <tr>
              <th className="p-4 bg-gray-200 rounded-tl w-3/4  border border-slate-300">
               
              </th>
              <th className="p-4 bg-gray-200 rounded-tl w-1/4  border border-slate-300">
               
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 5 }).map((_, index) => (
              <tr key={index} className="border-0">
                <td className="p-4 border-0">
                  <div className="h-6 bg-gray-300 rounded mx-3"></div>
                </td>
                <td className="p-4  border-0">
                  <div className="h-6 bg-gray-300 rounded mx-3"></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-center text-gray-500 mt-2">Loading table data...</p>
    </div>
  );
}
     

export const CustomLegend = ({ payload }: any) => (
  <ul className="flex gap-4 text-sm">
    {payload.map((item: any) => (
      <li key={item.dataKey} className="flex items-center gap-2">
        <span
          className="h-3 w-3 rounded"
          style={{ backgroundColor: item.color }}
        />
        {item.value}
      </li>
    ))}
  </ul>
);
