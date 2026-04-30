import { useState } from "react";
import ExpandingSection from "../../components/expanding-section/ExpandingSection";
import { Card } from "primereact/card";
import { MetricSkeleton } from "../../components/Skeletons/metric";
import { TableSkeleton } from "../../components/Skeletons/table";

export default function Metrics({isLoading}: {isLoading: boolean}) {
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
    setConciseTable(<TableSkeleton />)
  }

  return (
    <ExpandingSection expandableContent={conciseTable}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {metrics.map((metric, i) => {
          if(isLoading) return <MetricSkeleton key={i}/>
          return <Card
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
        }
        )}
      </div>
    </ExpandingSection>
  );
}


