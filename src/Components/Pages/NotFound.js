import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div>
      Page Not Found
      <p>
        <Link to="/">Go To home Page</Link>
      </p>
    </div>
  );
};

export default NotFound;
