import ReservationPageTitle from './ReservationPageTitle';
import ReservationSubtitle from './ReservationSubtitle';
import ReservationInfoCard from './ReservationInfoCard';
import { ReservationInfoData } from '../../@types/interface';

interface ReservationInfoProps {
  roomDetails?: ReservationInfoData | null;
}

const ReservationInfo = ({ roomDetails }: ReservationInfoProps) => {
  return (
    <>
      <ReservationPageTitle />
      <ReservationSubtitle />
      <ReservationInfoCard roomDetails={roomDetails} />
    </>
  );
};
ReservationInfo.defaultProps = {
  roomDetails: null,
};

export default ReservationInfo;
