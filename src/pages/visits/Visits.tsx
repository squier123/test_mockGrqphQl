import { useMutation, useQuery } from "@apollo/client";
import React, { useEffect, useId, useState } from "react";
import { GET_VISITS } from "../../services/query.tsx";
import { UPDATE_VISIT } from "../../services/mutation.tsx";
import VisitItem from "./VisitItem.tsx";
import { Button } from "../../app/ui/Button.tsx";

type SortOption = "date" | "startTime" | "caregiverName";

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

const Visits = () => {
  const { data, loading, error } = useQuery(GET_VISITS);
  const [updData, setUpdData] = useState<Visit[]>([]);
  const [isAdded, setIsAdded] = useState(false);
  const [updateVisit, { loading: profileLoading, error: profileError }] =
    useMutation(UPDATE_VISIT);

  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("date");
  const id = useId();

  useEffect(() => {
    if (data?.visits) {
      setUpdData(data.visits);
    }
  }, [data?.visits]);

  if (loading) return <p>Loading...</p>;
  if (profileError || error)
    return <p>Error: {profileError?.message || error?.message}</p>;

  const filteredVisits = updData
    .filter((visit) => {
      const searchLower = searchTerm.toLowerCase();
      return visit.caregiverName.toLowerCase().includes(searchLower);
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "date":
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case "startTime":
          return a.startTime.localeCompare(b.startTime);
        case "caregiverName":
          return a.caregiverName.localeCompare(b.caregiverName);
        default:
          return 0;
      }
    });

  const addVisit = async () => {
    try {
      const newData = await updateVisit({
        variables: {
          id: "33",
          caregiverName: "John Doe",
          date: "2024-03-20",
          startTime: "09:00",
          endTime: "11:00",
          clientId: "1",
          caregiverId: "1",
          estimatedTime: "120",
          status: "scheduled",
        },
      });

      setIsAdded(true);

      setUpdData([...updData, newData?.data?.updateVisit]);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Visits</h1>
      <div className="flex justify-end mb-4">
        <Button disabled={profileLoading || isAdded} onClick={addVisit}>
          {loading ? "Adding Visit..." : "Add one mock visit"}
        </Button>
      </div>
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="Search visits by name..."
          className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as SortOption)}
          className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="date">Sort by Date</option>
          <option value="startTime">Sort by Start Time</option>
          <option value="caregiverName">Sort by Caregiver Name</option>
        </select>
      </div>
      <div className="grid gap-4">
        {filteredVisits?.map((visit: Visit) => (
          <VisitItem key={visit.id} visit={visit} />
        ))}
      </div>
    </div>
  );
};

export default Visits;
