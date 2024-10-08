import Heading from "@/app/_components/heading";
import LineChart from "@/app/_components/line-chart";

export const metadata = {
  title: "Line Chart / Next Dashboard",
};

function page() {
  return (
    <div className="charts">
      <Heading title="line chart" desc="Simple Line Chart" />
      <LineChart />
    </div>
  );
}

export default page;
