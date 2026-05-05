import PfepShortageAlert from "./alerts/pfep-overplanned-alert";
import PfepRequiredAlert from "./alerts/pfep-required-alert";
import MOQCeilingAlert from "./alerts/moq-ceiling-alert";
import ERPAlert from "./alerts/erp-alert";
import DemandGapsAlert from "./alerts/demand-gaps-alert";
import ExpandingSection from "../../components/expanding-section/ExpandingSection";
import { legendData, typesOfAlerts } from "./constants";
import React, { useEffect, useState } from "react";
import { DemandGapsTable } from "./alert-tables/demand-gaps-table";
import { ERPDiscrepancyTable } from "./alert-tables/erp-alert-table";
import { ShortageALertTable } from "./alert-tables/pfep-overplanned-table";
import { MOQCeilingTable } from "./alert-tables/moq-ceiling-table";
import { PFEPRequiredTable } from "./alert-tables/pfep-required-table";
import { DuplicateWCAlertTable } from "./alert-tables/duplicate-WC-table";
import { getTableData } from "./api";
import type { AlertTableDataType, HomeDashboardData } from "./sample-data";
import DuplicateWCAlert from "./alerts/duplicate-WC-alert";
import { TableSkeleton } from "../../components/Skeletons/table";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";

const expandingSectionId = "table-container";
const scrollToTable = () => {
  const tableElement = document.getElementById(expandingSectionId);
  if (tableElement) {
    setTimeout(() => tableElement.scrollIntoView({ behavior: "smooth" }), 1000);
  }
};

export default function Alerts({
  isLoading = false,
  data,
}: {
  isLoading: boolean;
  data?: HomeDashboardData | null;
}) {
  const [alertType, setAlertType] = useState<
    (typeof typesOfAlerts)[number] | null
  >(null);
  const [conciseTable, setConciseTable] = useState<
    React.ReactNode | "loading" | null
  >(null);

  useEffect(() => {
    const fetchData = async () => {
      setConciseTable(<TableSkeleton />);
      scrollToTable();
      const getTableDataForAlert = async (
        alertType: (typeof typesOfAlerts)[number],
      ) => await getTableData(alertType);
      let component = null;
      const data: AlertTableDataType = await getTableDataForAlert(
        alertType as (typeof typesOfAlerts)[number],
      );
      switch (true) {
        case alertType === "pfepRequired" &&
          data.type === "pfep_required_alerts":
          component = <PFEPRequiredTable data={data} isConcise={true} />;
        case alertType === "duplicateWorkcenter" &&
          data.type === "pfep_duplicate_workcenter_assignment":
          component = <DuplicateWCAlertTable data={data} isConcise={true} />;
          break;
        case alertType === "pfepShortage" &&
          data.type === "pfep_shortage_alerts":
          component = <ShortageALertTable data={data} isConcise={true} />;
          break;
        case alertType === "moqCeiling" &&
          data.type === "pfep_moq_ceiling_alerts":
          component = <MOQCeilingTable data={data} isConcise={true} />;
          break;
        case alertType === "erp" && data.type === "erp_discrepancy_alerts":
          component = <ERPDiscrepancyTable data={data} isConcise={true} />;
          break;
        case alertType === "demandGaps" && data.type === "pfep_demand_gaps":
          component = <DemandGapsTable data={data} isConcise={true} />;
          break;
        default:
          console.log("No alert selected");
      }

      setConciseTable(component);
    };
    if (alertType) {
      fetchData();
    }
  }, [alertType]);

  return (
    <ExpandingSection
      title="Alerts"
      headerChildren={<CustomLegend payload={legendData} />}
      expandableContent={conciseTable}
      scrollToID={expandingSectionId}
    >
      <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm">
        <div className="flex flex-row justify-around flex-wrap gap-6 gap-y-12">
          <DragDropContext onDragEnd={(res) => console.log(res)}>
            <Droppable droppableId="alerts-droppable">
              {(provided, snapshot) => (
                <div ref={provided.innerRef} {...provided.droppableProps} className="flex flex-row justify-around flex-wrap gap-6 gap-y-12">
                  <Draggable draggableId="draggable-required-alert" index={0} key="alert-0">
                    {(provided, snapshot) => (
                      <div
                        className="border border-blue-300 px-4 py-3 rounded-md shadow-sm overflow-x-auto hover:overflow-hidden"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <PfepRequiredAlert
                          onClick={setAlertType}
                          isLoading={isLoading}
                          data={data?.RequiredAlertGraphs}
                        />
                        {!isLoading && (
                          <p className="text-slate-500 text-xs font-bold text-center pt-4">
                            PFEP Required{" "}
                          </p>
                        )}
                      </div>
                    )}
                  </Draggable>
                  <Draggable draggableId="draggable-shortage-alert" index={1} key="alert-1">
                    {(provided, snapshot) => (
                      <div
                        className="border border-blue-300 px-4 py-3 rounded-md shadow-sm overflow-x-auto hover:overflow-hidden"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <PfepShortageAlert
                          onClick={setAlertType}
                          isLoading={isLoading}
                          data={data?.ShortageAlertGraphs}
                        />
                        {!isLoading && (
                          <p className="text-slate-500 text-xs font-bold text-center pt-4">
                            PFEP Over/Under Planned
                          </p>
                        )}
                      </div>
                    )}
                  </Draggable>
                  <Draggable draggableId="draggable-moq-alert" index={2} key="alert-2">
                    {(provided, snapshot) => (
                      <div
                        className="border border-blue-300 px-4 py-3 rounded-md shadow-sm overflow-x-auto hover:overflow-hidden"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <MOQCeilingAlert
                          onClick={setAlertType}
                          isLoading={isLoading}
                          data={data?.MOQAlertGraphs}
                        />
                        {!isLoading && (
                          <p className="text-slate-500 text-xs font-bold text-center pt-4">
                            MOQ Ceiling
                          </p>
                        )}
                      </div>
                    )}
                  </Draggable>
                  <Draggable draggableId="draggable-erp-alert" index={3} key="alert-3">
                    {(provided, snapshot) => (
                      <div
                        className="border border-blue-300 px-4 py-3 rounded-md shadow-sm overflow-x-auto hover:overflow-hidden"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <ERPAlert
                          onClick={setAlertType}
                          isLoading={isLoading}
                          data={data?.ERPAlertGraphs}
                        />
                        {!isLoading && (
                          <p className="text-slate-500 text-xs font-bold text-center pt-4">
                            ERP Discrepancy
                          </p>
                        )}
                      </div>
                    )}
                  </Draggable>
                  <Draggable draggableId="draggable-demand-alert" index={4} key="alert-4">
                    {(provided, snapshot) => (
                      <div
                        className="border border-blue-300 px-4 py-3 rounded-md shadow-sm overflow-x-auto hover:overflow-hidden  flex flex-col" 
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <DemandGapsAlert
                          onClick={setAlertType}
                          value={45}
                          label="Demand Gaps"
                          isLoading={isLoading}
                        />
                        {!isLoading && (
                          <p className="text-slate-500 text-xs font-bold text-center pt-4">
                            PFEP Demand Gaps
                          </p>
                        )}
                      </div>
                    )}
                  </Draggable>
                  <Draggable draggableId="draggable-duplicateWC-alert" index={5} key="alert-5">
                    {(provided, snapshot) => (
                      <div
                        className="border border-blue-300 px-4 py-3 rounded-md shadow-sm overflow-x-auto hover:overflow-hidden  flex flex-col"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <DuplicateWCAlert
                          onClick={setAlertType}
                          value={10}
                          label="Duplicate Workcenter Assignment"
                          isLoading={isLoading}
                        />
                        {!isLoading && (
                          <p className="text-slate-500 text-xs font-bold text-center pt-4">
                            Duplicate Workcenter Assignment
                          </p>
                        )}
                      </div>
                    )}
                  </Draggable>
                </div>
              )}
            </Droppable>
          </DragDropContext>

          {/* <div className="border border-blue-300 px-4 py-3 rounded-md shadow-sm overflow-x-auto hover:overflow-hidden"></div>
          <div className="border border-blue-300 px-4 py-3 rounded-md shadow-sm overflow-x-auto hover:overflow-hidden"></div>
          <div className="border border-blue-300 px-4 py-3 rounded-md shadow-sm overflow-x-auto hover:overflow-hidden flex flex-col"></div>
          <div className="border border-blue-300 px-4 py-3 rounded-md shadow-sm overflow-x-auto hover:overflow-hidden flex flex-col"></div> */}
        </div>
      </div>
    </ExpandingSection>
  );
}

export const CustomLegend = ({ payload }: any) => (
  <ul className="flex gap-3 text-sm sm:gap-4">
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
