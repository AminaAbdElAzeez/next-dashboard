import placeholderInstance from "@/app/_utils/placeholderInstance";
import { Card } from "antd";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { id } = params;

  const response = await placeholderInstance.get(`/users/${id}`);
  const userData = response.data;
  if (!userData) {
    notFound();
  }
  return {
    title: `${userData.name} - Team / Dashboard`,
    description: `Profile of ${userData.name} who lives in ${userData.address.city} and works at ${userData.company.name}.`,
  };
}

const UserPage = async ({ params }) => {
  const { id } = params;

  const response = await placeholderInstance.get(`/users/${id}`);
  const userData = response.data;
  if (!userData) {
    notFound();
  }

  return (
    <Card title="User Info" className="user-info">
      <p>
        <strong>ID:</strong> {userData.id}
      </p>
      <p>
        <strong>Name:</strong> {userData.name}
      </p>
      <p>
        <strong>Email:</strong> {userData.email}
      </p>
      <p>
        <strong>Phone:</strong> {userData.phone}
      </p>
      <p>
        <strong>City:</strong> {userData.address.city}
      </p>
      <p>
        <strong>Company:</strong> {userData.company.name}
      </p>
    </Card>
  );
};

export async function generateStaticParams() {
  const response = await placeholderInstance.get("/users");
  const users = response.data;

  return users.map((user) => ({ id: user.id.toString() }));
}

export const revalidate = 60;

export default UserPage;
