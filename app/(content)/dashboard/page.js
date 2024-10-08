import Heading from "@/app/_components/heading";
import LineChart from "@/app/_components/line-chart";
import {
  BulbOutlined,
  DollarOutlined,
  MailOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import UsersTable from "@/app/_components/table";
import BarChart from "@/app/_components/bar-chart";
import Chart from "@/app/_components/chart";
import PieItem from "@/app/_components/pie-item";

export const metadata = {
  title: {
    default: "Dashboard / Next Dashboard",
  },
};
export default function page() {
  return (
    <div className="dash-page">
      <Heading title="dashboard" desc="Welcome to your dashboard 🌹" />
      <div className="pie-container">
        <PieItem num="12,361" text="mails sent">
          <MailOutlined className="dash-icon" />
        </PieItem>
        <PieItem num="431,225" text="Sales Obtained">
          <DollarOutlined className="dash-icon" />
        </PieItem>
        <PieItem num="32,441" text="New Clients">
          <UserAddOutlined className="dash-icon" />
        </PieItem>
        <PieItem num="1,325,134" text="Traffic Received">
          <BulbOutlined className="dash-icon" />
        </PieItem>
      </div>
      <div className="sec-part">
        <div className="sec-part-item">
          <h3 className="dash-title">Revenue Generated</h3>

          <LineChart />
        </div>
        <div className="sec-part-item">
          <h3 className="dash-title">Recent Transactions</h3>
          <UsersTable />
        </div>
      </div>
      <div className="third-part">
        <div className="third-part-item">
          <h3 className="dash-title">Campaign</h3>
          <BarChart />
        </div>
        <div className="third-part-item">
          <h3 className="dash-title">Sales Quantity</h3>

          <Chart />
        </div>
      </div>
    </div>
  );
}
