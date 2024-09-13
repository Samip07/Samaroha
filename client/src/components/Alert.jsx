import { useAppContext } from "../context/appContext";
import "./Alert.css";

const Alert = () => {
  const { alertText, alertType } = useAppContext();

  return <div className={`alert alert-${alertType}`}>{alertText}</div>;
};

export default Alert;
