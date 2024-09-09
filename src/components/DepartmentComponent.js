
import { Table, Button, Row, Col, Input } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
// Adjust the import path
import AddNewDepartment from "./AddNewDepartment";
const { Search } = Input;
const DepartmentComponent = ({ data }) => {
  const option = data.map((item) => ({
    id: item.id,
    name: item.name,
    value: item.value,
  }))
  console.log("employeeDepartmentDropdownOptions: ", option);


  // Columns definition
  const columns = [
    {
      title: "Sr",
      dataIndex: "id",
      key: "id",
      width: "6%"
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
      width: "15%",
      render: () => (
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
              >
                Delete
              </Button>
            </Col>
          </Row>
        </>
      ),
    },
    {
      title: "",
      dataIndex: "",
      key: "",

    },
  ];






  return (
    <>
      <Row align={"middle"} >
        {/* Search Input */}
        <Col span={6}>
          <Search
            placeholder="input search text"
            enterButton="Search"
            size="small"
            onSearch={value => console.log(value)}
          />
        </Col>
        <Col span={6} offset={11}>
          <AddNewDepartment />
        </Col>{" "}
      </Row>

      <Table
        style={{ marginTop: "10px" }}
        dataSource={data}
        columns={columns}
        rowKey="id"
      />
    </>
  );
};

export default DepartmentComponent;