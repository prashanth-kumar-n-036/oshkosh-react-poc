import PfepShortageAlert from "./alerts/pfep-overplanned-alert";
import PfepRequiredAlert from "./alerts/pfep-required-alert";
import MOQCeilingAlert from "./alerts/moq-ceiling-alert";
import ERPAlert from "./alerts/erp-alert";
import DemandGapsAlert from "./alerts/demand-gaps-alert";
import ExpandingSection from "../../components/expanding-section/ExpandingSection";
import { legendData, typesOfAlerts } from "./constants";
import React, { useEffect, useState, useMemo } from "react";
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

import {
  DndContext,
  closestCenter,
  type DragEndEvent,
  useSensor,
  useSensors,
  PointerSensor,
} from "@dnd-kit/core";

import {
  arrayMove,
  SortableContext,
  useSortable,
  rectSortingStrategy,
} from "@dnd-kit/sortable";

import { CSS } from "@dnd-kit/utilities";

const expandingSectionId = "table-container";
const scrollToTable = () => {
  const tableElement = document.getElementById(expandingSectionId);
  if (tableElement) {
    setTimeout(() => tableElement.scrollIntoView({ behavior: "smooth" }), 1000);
  }
};

const allAlerts = [
    "pfepShortage",
    "pfepRequired",
    "moqCeiling",
    "erp",
    "demandGaps",
    "duplicateWorkcenter",
  ];

const getAlertConfig = (alert: string) => {
  const componentMap: Record<
    string,
    {
      component: React.ComponentType<any>;
      name: string;
      key?: keyof HomeDashboardData;
    }
  > = {
    pfepShortage: {
      component: PfepShortageAlert,
      name: "PFEP Over/Under Planned",
      key: "ShortageAlertGraphs",
    },
    pfepRequired: {
      component: PfepRequiredAlert,
      name: "PFEP Required",
      key: "RequiredAlertGraphs",
    },
    moqCeiling: {
      component: MOQCeilingAlert,
      name: "MOQ Ceiling",
      key: "MOQAlertGraphs",
    },
    erp: {
      component: ERPAlert,
      name: "ERP Discrepancy",
      key: "ERPAlertGraphs",
    },
    demandGaps: {
      component: DemandGapsAlert,
      name: "Demand Gaps",
      key: "DemandGap",
    },
    duplicateWorkcenter: {
      component: DuplicateWCAlert,
      name: "Duplicate Workcenter Assignment",
      key: "MultipleAssignmentCount",
    },
  };

  return componentMap[alert] ?? null;
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

  const [alerts, setAlerts] = useState<string[]>(AlertLocalStorageUtility.getAlerts() || [...allAlerts]);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
  );

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
      if (
        alertType === "pfepRequired" &&
        data.type === "pfep_required_alerts"
      ) {
        component = <PFEPRequiredTable data={data} isConcise={true} />;
      } else if (
        alertType === "duplicateWorkcenter" &&
        data.type === "pfep_duplicate_workcenter_assignment"
      ) {
        component = <DuplicateWCAlertTable data={data} isConcise={true} />;
      } else if (
        alertType === "pfepShortage" &&
        data.type === "pfep_shortage_alerts"
      ) {
        component = <ShortageALertTable data={data} isConcise={true} />;
      } else if (
        alertType === "moqCeiling" &&
        data.type === "pfep_moq_ceiling_alerts"
      ) {
        component = <MOQCeilingTable data={data} isConcise={true} />;
      } else if (
        alertType === "erp" &&
        data.type === "erp_discrepancy_alerts"
      ) {
        component = <ERPDiscrepancyTable data={data} isConcise={true} />;
      } else if (
        alertType === "demandGaps" &&
        data.type === "pfep_demand_gaps"
      ) {
        component = <DemandGapsTable data={data} isConcise={true} />;
      } else {
        console.log("No alert selected");
      }

      setConciseTable(component);
    };
    if (alertType) {
      fetchData();
    }
  }, [alertType]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (
      !over ||
      active.id === over.id ||
      typeof active.id !== "string" ||
      typeof over.id !== "string"
    )
      return;

    const oldIndex = alerts.indexOf(active.id);
    const newIndex = alerts.indexOf(over.id);

    setAlerts((alerts) => arrayMove(alerts, oldIndex, newIndex));
  };

  const getExcludedAlerts = () => {
    return allAlerts.filter(a => alerts.indexOf(a) === -1)
  }

  return (
    <ExpandingSection
      title="Alerts"
      headerChildren={<CustomLegend payload={legendData} />}
      expandableContent={conciseTable}
      scrollToID={expandingSectionId}
    >
      <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm">
        <div className="flex flex-row justify-around flex-wrap gap-6 gap-y-12 mb-3">
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext items={alerts} strategy={rectSortingStrategy}>
              <>
                {alerts.map((alert) => (
                  <SortableItem
                    key={alert}
                    alert={alert}
                    setAlertType={setAlertType}
                    isLoading={isLoading}
                    data={data}
                  />
                ))}
              </>
            </SortableContext>
          </DndContext>

          {/* 
           <div className="border border-blue-300 px-4 py-3 rounded-md shadow-sm overflow-x-auto hover:overflow-hidden">
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
          <div className="border border-blue-300 px-4 py-3 rounded-md shadow-sm overflow-x-auto hover:overflow-hidden">
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
          <div className="border border-blue-300 px-4 py-3 rounded-md shadow-sm overflow-x-auto hover:overflow-hidden">
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
          <div className="border border-blue-300 px-4 py-3 rounded-md shadow-sm overflow-x-auto hover:overflow-hidden">
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
          <div className="border border-blue-300 px-4 py-3 rounded-md shadow-sm overflow-x-auto hover:overflow-hidden  flex flex-col">
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
          <div className="border border-blue-300 px-4 py-3 rounded-md shadow-sm overflow-x-auto hover:overflow-hidden  flex flex-col">
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
          </div> */}
        </div>
        <div className="flex">
            {getExcludedAlerts().map(a => (
              <span className="h-2 min-w-10 border border-slate-300 bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-700">{a}</span>
            ))}
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

const SortableItem = ({
  alert,
  setAlertType,
  isLoading,
  data,
}: {
  alert: string;
  setAlertType: (value: (typeof typesOfAlerts)[number]) => void;
  isLoading: boolean;
  data?: HomeDashboardData | null;
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: alert,
    animateLayoutChanges: ({ isDragging }) => !isDragging,
  });

  const style = {
    transform: transform ? CSS.Transform.toString(transform) : undefined,
    transition: isDragging ? undefined : transition,
    position: isDragging ? ("relative" as const) : undefined,
    zIndex: isDragging ? 999 : undefined,
    willChange: "transform",
    transformStyle: "preserve-3d" as const,
    backfaceVisibility: "hidden" as const,
  };

  const Alert = useMemo(() => getAlertConfig(alert), [alert]);

  if (!Alert) return null;

  return (
    <div
      className="bg-white border border-blue-300 px-4 py-3 rounded-md shadow-sm overflow-x-auto hover:overflow-hidden"
      ref={setNodeRef}
      style={style}
      {...attributes}
    >
      <Alert.component
        onClick={setAlertType}
        isLoading={isLoading}
        isDragging={isDragging}
        data={Alert.key ? data?.[Alert.key] || null : null}
      />
      {!isLoading && (
        <p
          className="group text-slate-500 text-xs font-bold text-center pt-0.5 mt-4 cursor-move select-none hover:text-slate-700 hover:bg-slate-100 rounded transition-colors border border-transparent hover:border-slate-300 flex justify-between"
          {...listeners}
        >
          <span className="text-slate-200 group-hover:text-slate-700 ml-1">⋮⋮</span>
          <span>{Alert.name}</span>
          <span className="text-slate-200 group-hover:text-slate-700 mr-1">⋮⋮</span>
        </p>
      )}
    </div>
  );
};

const AlertLocalStorageUtility = {
  localStorageKey: "dashboard_alerts",
  getAlerts: (): string[] | null => {
    const stored = localStorage.getItem(AlertLocalStorageUtility.localStorageKey);
    return stored ? JSON.parse(stored) : null;
  },
  setAlerts: (alerts: string[]) => {
    localStorage.setItem(AlertLocalStorageUtility.localStorageKey, JSON.stringify(alerts));
  },

}
