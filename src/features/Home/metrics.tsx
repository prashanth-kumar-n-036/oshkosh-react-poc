import { useState } from "react";
import ExpandingSection from "../../components/expanding-section/ExpandingSection";
import { Card } from "primereact/card";

export default function Metrics() {
  const [conciseTable, setConciseTable] = useState<
    React.ReactNode | "loading" | null
  >(null);

  const metrics = [
    {
      title: "Weights & Dimensions",
      value: 128,
      icon: "pi pi-box",
      iconColor: "#4f8fd9",
    },
    {
      title: "Past Due Approvals",
      value: 7,
      icon: "pi pi-clock",
      iconColor: "#ff6f61",
    },
    {
      title: "Packaging Details",
      value: 42,
      icon: "pi pi-briefcase",
      iconColor: "#ff9f58",
    },
  ];

  const metricClicked = (metric: string) => {
    setConciseTable(<TableSkeletion />)
  }

  return (
    <ExpandingSection expandableContent={conciseTable}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {metrics.map((metric) => (
          <Card
            key={metric.title}
            className="
            bg-slate-100
            border
            border-blue-300
            cursor-pointer
            transition-all
            duration-200
            hover:-translate-y-1
            hover:shadow-lg
            shadow-none
            
          "
            onClick={() => metricClicked(metric.title)}
          >
            <div className="flex items-center justify-between">
              {/* Left: Text */}
              <div>
                <div className="text-sm font-semibold text-slate-600">
                  {metric.title}
                </div>
                <div className="mt-2 text-4xl font-bold text-slate-900">
                  {metric.value}
                </div>
              </div>

              {/* Right: Icon */}
              <i
                className={`pi ${metric.icon}`}
                style={{
                  fontSize: "3rem",
                  color: metric.iconColor,
                  opacity: 0.85,
                }}
              />
            </div>
          </Card>
        ))}
      </div>
    </ExpandingSection>
  );
}

export function TableSkeletion() {
  return (
    <div className="mt-4" id="table-skeleton">
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
