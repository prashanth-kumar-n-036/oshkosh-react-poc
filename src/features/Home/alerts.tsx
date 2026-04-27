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
  const [conciseTable, setConciseTable] = useState<React.ReactNode | null>(null);


  useEffect(() => {

    const fetchData = async () => {
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
          component = <DemandGapsTable data={data} isConcise={false} />;
          break;
        default:
          console.log("No alert selected");
      }

      setConciseTable(component);
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
        <div className="flex flex-row justify-around flex-wrap gap-3">
          <div className="border border-blue-300 px-4 py-3 rounded-md shadow-sm">
            <PfepRequiredAlert onClick={setAlertType} />
          </div>
          <div className="border border-blue-300 px-4 py-3 rounded-md shadow-sm">
            <PfepShortageAlert onClick={setAlertType} />
          </div>
          <div className="border border-blue-300 px-4 py-3 rounded-md shadow-sm">
            <MOQCeilingAlert onClick={setAlertType} />
          </div>
          <div className="border border-blue-300 px-4 py-3 rounded-md shadow-sm">
            <ERPAlert onClick={setAlertType} />
          </div>
          <div className="border border-blue-300 px-4 py-3 rounded-md shadow-sm">
            <DemandGapsAlert onClick={setAlertType} value={45} />
          </div>
        </div>
      </div>
    </ExpandingSection>
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
