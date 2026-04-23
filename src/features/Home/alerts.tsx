import PfepShortageAlert from "./alerts/pfep-overplanned-alert";
import PfepRequiredAlert from "./alerts/pfep-required-alert";
import MOQCeilingAlert from "./alerts/moq-ceiling-alert";
import ERPAlert from "./alerts/erp-alert";

export default function Alerts() {
  return (
    <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm">
      <div className="flex flex-row justify-around">
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
      </div>
    </div>
  );
}
