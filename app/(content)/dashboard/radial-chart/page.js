import Chart from "@/app/_components/chart";
import Heading from "@/app/_components/heading";

export const metadata = {
  title: "Radial Chart / Next Dashboard",
};

function page() {
  return (
    <div className="charts">
      <Heading title="Radial chart" desc="Simple radial Chart" />
      <Chart />
    </div>
  );
}

export default page;
