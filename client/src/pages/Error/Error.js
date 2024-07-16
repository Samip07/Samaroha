import { Link } from "react-router-dom";
import "./Error.css";

const Error = () => {
  return (
    <div className="full-page error-page ">
      <div>
        <img src="img/not-found.svg" alt="not found" />
        <h3>Ohh! Page not found</h3>
        <p>We can't seem to find the page you're looking for</p>
        <Link to="/">back home</Link>
      </div>
    </div>
  );
};

export default Error;
