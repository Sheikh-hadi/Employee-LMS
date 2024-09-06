import { UsergroupAddOutlined, RobotOutlined , BarChartOutlined,TagsOutlined,  } from '@ant-design/icons';

const employeeDepartmentDropdownOptions = [
  {
    id: 1,
    value: "hr",
    label: "HR",
    icon: <UsergroupAddOutlined style={{ fontSize: '16px', paddingRight: '10px' }}/>,
  },
  {
    id: 2,
    value: "engineering",
    label: "Engineering",
    icon: <RobotOutlined style={{ fontSize: '18px', paddingRight: '10px' }} />,

  },
  {
    id: 3,
    value: "marketing",
    label: "Marketing",
    icon: <BarChartOutlined style={{ fontSize: '16px', paddingRight: '10px' }}/>,
  },
  {
    id:4,
    value: "sales",
    label: "Sales",
    icon: <TagsOutlined style={{ fontSize: '16px', paddingRight: '10px' }} />
  },
  {
    id: 5,
    value: "productManager",
    label: "Product Manager",
    icon: <TagsOutlined style={{ fontSize: '16px', paddingRight: '10px' }} />
  },
  {
    id: 6,
    value: "teamLeader",
    label: "Team Leader",
    icon: <TagsOutlined style={{ fontSize: '16px', paddingRight: '10px' }} />
  },
  {
    id: 7,
    value: "webDesigner",
    label: "Web Designer",
    icon: <TagsOutlined style={{ fontSize: '16px', paddingRight: '10px' }} />
  },
];

export default employeeDepartmentDropdownOptions;
