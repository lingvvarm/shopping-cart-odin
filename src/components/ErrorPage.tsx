import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1>Oh no, this page doesn't exist!</h1>
      <Link to="/">
        Back to the homepage
      </Link>
    </div>
  );
};

export default ErrorPage;