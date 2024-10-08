import { Spin } from "antd";

const LoadingPage = () => {
  return (
    <div className="loading-container">
      <Spin size="large" /> <p>Loading, please wait...</p>
    </div>
  );
};

export default LoadingPage;
