import React, { useState } from "react";
import { Table, Tooltip, Switch, Input, Modal } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { toWords } from "number-to-words";
import moment from "moment";
import "../../App.css";
import UseDeleteEmployee from "../../Hooks/Employee/UseDeleteEmployeeHook";
import EditEmployeeForm from "./EditEmployeeForm";

const { Search } = Input;
const EmployeeTable = ({ employees }) => {
  // console.log("employees: ", employees)
  const [filteredData, setFilteredData] = useState(employees);
  const [handleValue, setHandleValue] = useState({
    model: false,
    id: null,
    edit: false,
    record: null,
  });
  // console.log("handleValue: ", handleValue)
  const { mutate: mutateDelete } = UseDeleteEmployee();
  const showModel = (id) => {
    setHandleValue({
      ...handleValue,
      model: true,
      id: id
    });
  };


  const handleOk = async () => {
    // console.log("handleValue: ", handleValue);
    mutateDelete(handleValue.id);

    setHandleValue({
      ...handleValue,
      model: false
    });
  };

  const showModelEdit = (id, record) => {
    setHandleValue({
      ...handleValue,
      edit: true,
      id: id,
      record: record,
    });
  };
  const handleOkEditModel = () => {
    setHandleValue({ ...handleValue, edit: false, id: null });
  };


  const columns = [
    {
      title: 'Sr.',
      dataIndex: 'id',
      key: 'id',
      width: '10%',
      render: (text, record, index) => (
        <span style={{ fontWeight: "bold" }}>{`${index + 1}_`}</span>
      ),
    },
    {
      title: "Photo",
      dataIndex: "photo",
      key: "photo",
      width: "5%",
      render: (photo) => (
        <img src={photo} alt="" style={{ width: 50, height: 50 }} />
      ),
    },
    {
      title: "Detail",
      dataIndex: "name",
      key: "name",
      width: "12%",
      render: (text, record) => (
        <Tooltip
          color="blue"
          placement="right"
          title={
            <div style={{ lineHeight: "1.3" }}>
              <span>Name: {`${record.firstName} ${record.lastName}`}</span>
              <p style={{ margin: 0 }}>{record.phoneNumber}</p>
              <p style={{ margin: 0 }}>Email: {record.email}</p>
              <p style={{ margin: 0 }}>SkypeID: </p>
            </div>
          }
        >
          <div style={{ lineHeight: "1.3" }}>
            <span>{`${record.firstName} ${record.lastName}`}</span>

            <p style={{ margin: 0 }}>{record.phoneNumber}</p>
            <span style={{ margin: 0, color: "blue" }}>{record.email}</span>
          </div>
        </Tooltip>
      ),
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      width: "15%",
      render: (text) => (
        <Tooltip
          title={text.toLocaleUpperCase()}
          color="blue"
          placement="right"
        >
          <span
          >
            {text}
          </span>
        </Tooltip>
      ),
    },

    {
      title: "Designation",
      dataIndex: "designation",
      key: "designation",
      width: "12%",

    },
    {
      title: "Salary",
      dataIndex: "salary",
      key: "salary",
      width: "11%",
      render: (salary) =>
        salary ? (
          <Tooltip
            title={toWords(salary).toUpperCase()}
            color="blue"
            placement="right"
          >
            <p>{salary}</p>
          </Tooltip>
        ) : (
          "N/A"
        ),
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      width: "13%",
      render: (text, record) => (
        <span>
          <p
            style={{
              color: record.endDate ? "red" : "green",
              fontSize: "12px",
              margin: "0",
            }}
          >
            {record.endDate || "PRESENT"}
          </p>
          <p
            style={{
              color: "green",
              fontSize: "12px",
              margin: "0",
            }}
          >
            {moment(record.createdAt).format('YYYY-MM-DD')}
          </p>
        </span>
      ),
    },

    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      width: "9%",
      render: (text) => (
        <Switch
          checked={text}
          style={{
            backgroundColor: text ? "green" : "red",
          }}
        />
      ),
    },
    {
      title: "Actions",
      key: "actions",
      width: "12%",
      render: (text, record) => (
        <span style={{ display: "flex", gap: "10px" }}>
          <Tooltip title="Created Employee" color="blue" placement="right">
            <span>{record.author}</span>
          </Tooltip>

          <EditOutlined className="icon-edit" onClick={() => showModelEdit(record.id, record)} />
          <DeleteOutlined
            className="icon-delete"
            onClick={() => showModel(record.id)}
          />
        </span>
      ),
    },
  ];

  // Handle the search input change
  const handleSearch = (value) => {

    const filtered = employees.filter(
      (item) =>
        item.firstName?.toLowerCase().includes(value) ||
        item.email?.toLowerCase().includes(value) ||
        item.phoneNumber?.toLowerCase().includes(value)
    );

    setFilteredData(filtered);
  };





  return (

    <div style={{ textAlign: "left", marginTop: "-16px" }}>
      <Search
        style={{ width: "20%" }}
        placeholder="input search text"
        enterButton="Search"
        size="small"
        onSearch={handleSearch}
        onChange={(e) => handleSearch(e.target.value)}
        allowClear
      />
      <Table
        columns={columns}
        dataSource={filteredData}
        pagination={false}
        rowKey="id"
      />

      <Modal
        style={{ position: "relative" }}
        title="Edit Employee"
        open={handleValue.edit}
        onOk={handleOkEditModel}
        onCancel={() => setHandleValue({ ...handleValue, edit: false, id: null })}
        footer={null}
        width={"80%"}
      >

        <EditEmployeeForm setHandleValue={setHandleValue} values={handleValue.record} />

      </Modal>
      <Modal
        title="CONFIRMATION"
        open={handleValue.model}
        onOk={handleOk}
        onCancel={() => setHandleValue({ ...handleValue, model: false, id: null, record: null })}
      >
        <p>{`Are you sure you want to delete employee with ID: ${handleValue.id}?`}</p>
      </Modal>
    </div>
  )
};


export default EmployeeTable;