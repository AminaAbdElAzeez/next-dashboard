"use client";
import React, { useEffect, useState } from "react";
import { Table, Tag } from "antd";
import placeholderInstance from "../_utils/placeholderInstance";

const UsersTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    placeholderInstance
      .get("/users") 
      .then((response) => {
        const users = response.data.map((user) => ({
          key: user.id,
          id: user.id,
          name: user.name.slice(0, 22),
          age: Math.floor(Math.random() * (50 - 20 + 1)) + 20, 
          salary: Math.floor(Math.random() * 10000) + 3000,
        }));

        setData(users);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      sorter: (a, b) => a.id - b.id,
      width: "15%",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "45%",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      width: "15%",
    },
    {
      title: "Salary",
      dataIndex: "salary",
      key: "salary",
      sorter: (a, b) => a.salary - b.salary,
      width: "25%",
      render: (salary) => (
        <Tag color="#cd201f" style={{ textAlign: "center" }}>
          {salary}$
        </Tag>
      ),
    },
  ];

  return (
    <Table
      dataSource={data}
      columns={columns}
      pagination={{ pageSize: 4 }}
      scroll={{ x: "400px" }}
    />
  );
};

export default UsersTable;
