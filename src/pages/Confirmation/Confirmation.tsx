import { useSelector } from "react-redux";
import { User } from "../../Types/Types";

const Confirmation = () => {
  const data = useSelector(
    (state) => (state as { user: { user: User } }).user.user
  );
  console.log("userData", data);
  return <div>CONFIRMATION</div>;
};
export default Confirmation;
