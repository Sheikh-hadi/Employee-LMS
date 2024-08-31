import { UsergroupAddOutlined, RobotOutlined , BarChartOutlined,TagsOutlined,  } from '@ant-design/icons';

const employeeDepartmentDropdownOptions = [
  {
    value: "hr",
    label: "HR",
    icon: <UsergroupAddOutlined style={{ fontSize: '16px', paddingRight: '10px' }}/>,
  },
  {
    value: "engineering",
    label: "Engineering",
    icon: <RobotOutlined style={{ fontSize: '18px', paddingRight: '10px' }} />,

  },
  {
    value: "marketing",
    label: "Marketing",
    icon: <BarChartOutlined style={{ fontSize: '16px', paddingRight: '10px' }}/>,
  },
  {
    value: "sales",
    label: "Sales",
    icon: <TagsOutlined style={{ fontSize: '16px', paddingRight: '10px' }} />
  },
];

export default employeeDepartmentDropdownOptions;
