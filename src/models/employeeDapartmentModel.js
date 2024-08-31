import { UsergroupAddOutlined, CodeOutlined, BarChartOutlined, ShoppingOutlined } from '@ant-design/icons';

const employeeDepartmentDropdownOptions = [
  {
    value: "hr",
    label: "HR",
    icon: <UsergroupAddOutlined />,
  },
  {
    value: "engineering",
    label: "Engineering",
    icon: <CodeOutlined />,
  },
  {
    value: "marketing",
    label: "Marketing",
    icon: <BarChartOutlined />,
  },
  {
    value: "sales",
    label: "Sales",
    icon: <ShoppingOutlined />,
  },
];

export default employeeDepartmentDropdownOptions;
