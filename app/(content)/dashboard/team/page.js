import TeamTable from "@/app/_components/team-table";

export const metadata = {
  title: "Team / Next Dashboard",
};

export default function TeamPage() {
  return (
    <div>
      <h2 className="dashboard-title">TEAM</h2>
      <p>Managing the Team Members</p>
      <TeamTable />
    </div>
  );
}
