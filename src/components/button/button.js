// // import { useEffect } from "react";
// import { useDispatch, useSelector } from 'react-redux';

// import { updateBookingStatus } from '../../redux/rockets/rockets';

// const ReservedButton = () => {
//   const ButtonState = () => {
//     // const [isLoading, setLoading] = useState(false);
//     const dispatch = useDispatch();
//     let reservedStatus = useSelector(({ rocketsReducer }) => rocketsReducer.reserved);
//     console.log(reservedStatus);
//     // useEffect(() => {
//     // }, [reservedStatus]);

//     const handleClick = () => {
//       reservedStatus = !reservedStatus;
//       dispatch(updateBookingStatus(reservedStatus));
//     };

//     return (
//       <Button
//         variant={!reservedStatus ? 'primary' : 'outline-secondary'}
//         onClick={handleClick}
//       >
//         {reservedStatus ? 'Cancel Reservation' : 'Reserve Rocket'}
//       </Button>
//     );
//   };

//   return (
//     <ButtonState />
//   );
// };

// export default ReservedButton;
