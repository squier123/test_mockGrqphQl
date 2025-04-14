import { GET_VISITS } from "../services/query.tsx";
import { UPDATE_VISIT } from "../services/mutation.tsx";

const mocks = [
  {
    request: {
      query: GET_VISITS,
    },
    result: {
      data: {
        visits: [
          {
            id: "1",
            clientName: "John Doe",
            caregiverName: "Jane Smith",
            clientId: "client1",
            caregiverId: "caregiver1",
            date: "2024-03-20",
            startTime: "09:00",
            endTime: "11:00",
            status: "scheduled",
            estimatedTime: "120",
            __typename: "Visit",
          },
          {
            id: "2",
            clientName: "Mary Johnson",
            caregiverName: "Robert Brown",
            clientId: "client2",
            caregiverId: "caregiver2",
            date: "2024-03-21",
            startTime: "14:00",
            endTime: "16:00",
            status: "completed",
            estimatedTime: "120",
            __typename: "Visit",
          },
          {
            id: "3",
            clientName: "David Wilson",
            caregiverName: "Sarah Davis",
            clientId: "client3",
            caregiverId: "caregiver3",
            date: "2024-03-22",
            startTime: "10:00",
            endTime: "12:00",
            status: "cancelled",
            estimatedTime: "120",
            __typename: "Visit",
          },
        ],
      },
    },
  },
  {
    request: {
      query: UPDATE_VISIT,
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
    },
    result: {
      data: {
        updateVisit: {
          id: "33",
          caregiverName: "John Doe",
          date: "2024-03-20",
          startTime: "09:00",
          endTime: "11:00",
          clientId: "1",
          caregiverId: "1",
          estimatedTime: "120",
          status: "scheduled",
          __typename: "Visit",
        },
      },
    },
  },
];

export default mocks;
