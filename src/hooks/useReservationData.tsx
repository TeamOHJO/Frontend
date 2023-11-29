// import { useEffect } from 'react';
// import { useRecoilState } from 'recoil';
// import { useQuery } from '@tanstack/react-query';
// import { reservationDataState } from '../states/atom';
// import { getReservation } from '../api';
// import { ReservationData } from '../@types/interface';

// export const useReservationData = (roomsId: number) => {
//   const [reservations, setReservations] = useRecoilState(reservationDataState);

//   const { data, isLoading, error } = useQuery({
//     queryKey: ['reservation', roomsId],
//     queryFn: () => getReservation(roomsId),
//     staleTime: 1000 * 60,
//   });

//   if (error) {
//     console.error(error);
//   }

//   useEffect(() => {
//     if (data) {
//       const newData = data.data as ReservationData;
//       setReservations(prevReservations => {
//         if (
//           !prevReservations.find(
//             reservation => reservation.reservationId === newData.reservationId,
//           )
//         ) {
//           return [...prevReservations, newData];
//         }
//         return prevReservations;
//       });
//     }
//   }, [data]);

//   return { reservations, isLoading };
// };
