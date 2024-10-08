"use client";
import { Button } from "antd";

const NotFoundPage = () => {
  return (
    <div className="notfound-container">
      <h2 className="title">404 - Page Not Found</h2>
      <p className="notfound-message">
        Sorry, the page you are looking for does not exist.
      </p>
      <Button type="primary" onClick={() => (window.location.href = "/")}>
        Go to Home
      </Button>
    </div>
  );
};

export default NotFoundPage;
