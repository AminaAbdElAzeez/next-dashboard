"use client";
import React, { useEffect, useState } from "react";
import { Table } from "antd";
import placeholderInstance from "@/app/_utils/placeholderInstance";
import Link from "next/link";

const TeamTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    placeholderInstance.get("/users").then((response) => {
      const users = response.data.map((user) => ({
        key: user.id,
        id: user.id,
        name: user.name.slice(0, 14),
        city: user.address.city.slice(0, 14),
        phone: user.phone.slice(0, 14),
        company: user.company.name.slice(0, 14),
        description: `Details for ${user.name.slice(
          0,
          14
        )} from ${user.address.city.slice(
          0,
          14
        )} works in ${user.company.name.slice(
          0,
          14
        )} Company and its Phone is ${user.phone.slice(0, 14)}`,
      }));
      setData(users);
    });
  }, []);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: "10%",
      align: "center",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "25%",
      align: "center",
      render: (text, record) => (
        <Link
          href={`/dashboard/team/${record.id}`}
          style={{ cursor: "pointer", color: "blue" }}
        >
          {text}
        </Link>
      ),
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
      width: "20%",
      align: "center",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      width: "20%",
      align: "center",
    },
    {
      title: "Company",
      dataIndex: "company",
      key: "company",
      width: "20%",
      align: "center",
    },
  ];

  return (
    <div className="charts">
      <Table
        columns={columns}
        dataSource={data}
        expandable={{
          expandedRowRender: (record) => (
            <p style={{ margin: 0 }}>{record.description}</p>
          ),
          rowExpandable: (record) => record.name !== "Not Expandable",
        }}
        pagination={{ pageSize: 6 }}
        scroll={{ x: "760px" }}
      />
    </div>
  );
};

export default TeamTable;
