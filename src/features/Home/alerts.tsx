export default function Alerts() {
  const alerts = [
    { id: 1, message: "Alert 1: This is the first alert." },
    { id: 2, message: "Alert 2: This is the second alert." },
    { id: 3, message: "Alert 3: This is the third alert." },
  ];
  return (
    <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm">
      <div className="flex flex-row justify-around">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className=" border border-blue-300  px-4 py-3 rounded-md shadow-sm"
          >
            {alert.message}
          </div>
        ))}
      </div>
    </div>
  );
}
