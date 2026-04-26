import PfepShortageAlert from "./alerts/pfep-overplanned-alert";
import PfepRequiredAlert from "./alerts/pfep-required-alert";
import MOQCeilingAlert from "./alerts/moq-ceiling-alert";
import ERPAlert from "./alerts/erp-alert";
import DemandGapsAlert from "./alerts/demand-gaps-alert";

export default function Alerts() {
  return (
    <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm">
      <div className="flex flex-row justify-around flex-wrap gap-3">
        <div className="border border-blue-300 px-4 py-3 rounded-md shadow-sm">
          <PfepRequiredAlert />
        </div>
        <div className="border border-blue-300 px-4 py-3 rounded-md shadow-sm">
          <PfepShortageAlert />
        </div>
        <div className="border border-blue-300 px-4 py-3 rounded-md shadow-sm">
          <MOQCeilingAlert />
        </div>
        <div className="border border-blue-300 px-4 py-3 rounded-md shadow-sm">
          <ERPAlert />
        </div>
        <div className="border border-blue-300 px-4 py-3 rounded-md shadow-sm">
          <DemandGapsAlert value={45} />
        </div>
      </div>
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
