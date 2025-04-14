import React from "react";

interface Visit {
  id: string;
  clientName: string;
  caregiverName: string;
  date: string;
  startTime: string;
  endTime: string;
  status: string;
  estimated_time: string;
  clientId: string;
  caregiverId: string;
}

interface VisitItemProps {
  visit: Visit;
}

const VisitItem: React.FC<VisitItemProps> = ({ visit }) => {
  return (
    <div className="border p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold">{visit.caregiverName}</h2>
      <div className="grid grid-cols-2 gap-2 mt-2">
        <p>
          <span className="font-medium">Caregiver:</span> {visit.caregiverName}
        </p>
        <p>
          <span className="font-medium">Date:</span> {visit.date}
        </p>
        <p>
          <span className="font-medium">Time:</span> {visit.startTime} -{" "}
          {visit.endTime}
        </p>
        <p>
          <span className="font-medium">Status:</span> {visit.status}
        </p>
        <p>
          <span className="font-medium">Estimated Time:</span>{" "}
          {visit.estimated_time} hours
        </p>
        <p>
          <span className="font-medium">Client ID:</span> {visit.clientId}
        </p>
        <p>
          <span className="font-medium">Caregiver ID:</span> {visit.caregiverId}
        </p>
      </div>
    </div>
  );
};

export default VisitItem;
