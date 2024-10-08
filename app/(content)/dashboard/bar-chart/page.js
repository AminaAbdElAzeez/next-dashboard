import BarChart from "@/app/_components/bar-chart";
import Heading from "@/app/_components/heading";

export const metadata = {
  title: "Bar Chart / Next Dashboard",
};

function page() {
  return (
    <div className="charts">
      <Heading title="Bar chart" desc="Simple Bar Chart" />
      <BarChart />
    </div>
  );
}

export default page;
