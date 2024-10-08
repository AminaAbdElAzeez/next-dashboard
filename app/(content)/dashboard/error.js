"use client";
import { Result, Button } from "antd";

const ErrorPage = ({ error }) => {
  return (
    <Result
      status="error"
      title="Error"
      subTitle={error?.message || "An error occurred while loading the data."}
      extra={
        <Button type="primary" onClick={() => window.location.reload()}>
          Reload
        </Button>
      }
    />
  );
};

export default ErrorPage;
