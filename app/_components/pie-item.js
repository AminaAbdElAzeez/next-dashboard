import PieChart from "@/app/_components/pie-chart";

export default function PieItem({ children, num, text }) {
  return (
    <div className="pie-item">
      <div className="pie-item-text">
        {children}
        <p className="pie-item-num">1{num}</p>
        <p className="pie-item-desc">{text}</p>
      </div>
      <PieChart className="pie-item-chart" />
    </div>
  );
}
