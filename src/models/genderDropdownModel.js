import { ManOutlined, WomanOutlined, CheckOutlined } from '@ant-design/icons';
const genderDropdownOptions = [
  {
    value: "male",
    label: "Male",
    icon: <ManOutlined style={{  marginRight: 8 }} />,
  },
  {
    value: "female",
    label: "Female",
    icon: <WomanOutlined style={{ marginRight: 8 }} />,
  },
  {
    value: "other",
    label: "Other",
    icon: <CheckOutlined style={{  marginRight: 8 }} />,
  },
];

export default genderDropdownOptions;
