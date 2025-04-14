import { gql } from "@apollo/client";

export const UPDATE_VISIT = gql`
  mutation UpdateVisit(
    $id: String
    $caregiverName: String
    $date: String
    $startTime: String
    $endTime: String
    $clientId: String
    $caregiverId: String
    $estimatedTime: String
    $status: String
  ) {
    updateVisit(
      id: $id
      caregiverName: $caregiverName
      date: $date
      startTime: $startTime
      endTime: $endTime
      clientId: $clientId
      caregiverId: $caregiverId
      estimatedTime: $estimatedTime
      status: $status
    ) {
      id
      caregiverName
      date
      startTime
      endTime
      clientId
      caregiverId
      estimatedTime
      status
    }
  }
`;
