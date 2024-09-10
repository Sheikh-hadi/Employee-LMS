import React, { useState } from "react";
import { Table, Button, Row, Col, Input, Modal, Form } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import AddNewDepartment from "./AddNewDepartment";
import useDeleteDepartment from "../Hooks/Department/useDeleteDepartmentHook";
import useUpdateDepartment from "../Hooks/Department/useUpdateDepartmentHook";
const { Search } = Input;

const DepartmentComponent = ({ data }) => {
  const [form] = Form.useForm();
  const { mutate: deleteDepartment } = useDeleteDepartment();
  const { mutate: editDepartment } = useUpdateDepartment();
  const [filteredData, setFilteredData] = useState(data);
  const [handleValue, SetHandeValue] = useState({
    statusDelete: false,
    id: null,
    statusEdit: false,
  });

  // console.log("hanndleValue: ", handleValue);
  const columns = [
    {
      title: "Sr",
      dataIndex: "id",
      key: "id",
      width: "6%",
    },
    {
      title: (
        <span style={{ display: "block", textAlign: "center", width: "100%" }}>
          Department Name
        </span>
      ),
      dataIndex: "name",
      key: "department",
      width: "40%",
      render: (text) => (
        <span style={{ display: "block", textAlign: "center" }}>
          {text}
        </span>
      ),
    },
    {
      title: "Action",
      key: "action",
      width: "20%",
      render: (text, record) => (
        <>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={12} lg={12} xxl={12}>
              <Button
                block
                icon={<EditOutlined />}
                style={{
                  marginRight: 8,
                  backgroundColor: "green",
                  borderColor: "green",
                  color: "white",
                }}
                onClick={() => {
                  SetHandeValue({ ...handleValue, statusEdit: true, id: record.id });
                  form.setFieldsValue({ name: record.name });
                }}
              >
                Edit
              </Button>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xxl={12}>
              <Button
                block
                type="danger"
                icon={<DeleteOutlined />}
                style={{
                  backgroundColor: "red",
                  borderColor: "red",
                  color: "white",
                }}
                onClick={() => SetHandeValue({ statusDelete: true, id: record.id })}
              >
                Delete
              </Button>
            </Col>
          </Row>
        </>
      ),
    },
  ];

  const handleSearch = (value) => {
    const filtered = data.filter((item) =>
      item.name?.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleOk = () => {
    deleteDepartment(handleValue.id);
    SetHandeValue({ ...handleValue, statusDelete: false, id: null });
  };


  return (
    <>
      <Modal
        title="Confirm Deletion"
        open={handleValue.statusDelete}
        onOk={handleOk}
        onCancel={() => SetHandeValue({ ...handleValue, statusDelete: false, id: null })}
      >
        <h6>{`Are you sure you want to delete the department with ID: ${handleValue.id}?`}</h6>
      </Modal>

      <Row align={"middle"}>
        <Col span={6}>
          <Search
            placeholder="input search text"
            enterButton="Search"
            size="small"
            onSearch={handleSearch}
            onChange={(e) => handleSearch(e.target.value)}
            allowClear
          />
        </Col>
        <Col span={6} offset={11}>
          <AddNewDepartment />
        </Col>
      </Row>

      <Table
        style={{ marginTop: "10px" }}
        dataSource={filteredData}
        columns={columns}
        rowKey="id"
      />

      <Modal
        title="Edit Department"
        open={handleValue.statusEdit}
        footer={null}
        onCancel={() => SetHandeValue({ ...handleValue, statusEdit: false, id: null })}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={(values) => {
            const updateValue = {
              values, id: handleValue.id,
            }

            editDepartment(updateValue);
            SetHandeValue({ ...handleValue, statusEdit: false, id: null });
            form.resetFields();
          }}
          onFinishFailed={(errorInfo) => {
            // console.log("Failed:", errorInfo);
          }}
          autoComplete="off"
        >
          <Form.Item
            label="Department Name"
            name="name"
            rules={[{ required: true, message: "Please input the department name!" }]}
          >
            <Input placeholder="Enter department name" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default DepartmentComponent;
