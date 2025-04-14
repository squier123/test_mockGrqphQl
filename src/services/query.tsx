import { gql } from "@apollo/client";

export const GET_VISITS = gql`
  query GetVisits {
    visits {
      id
      clientName
      caregiverName
      clientId
      caregiverId
      date
      startTime
      endTime
      status
      estimated_time
    }
  }
`;
