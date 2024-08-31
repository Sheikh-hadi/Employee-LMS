import { CheckOutlined, CloseOutlined } from '@ant-design/icons';

const booleanDropdownOptions = [
  {
    value: "true",
    label: "Yes",
    icon: <CheckOutlined style={{ color: 'green', marginRight: 8 }} />,
  },
  {
    value: "false",
    label: "No",
    icon: <CloseOutlined style={{ color: 'red', marginRight: 8 }} />,
  },
];

export default booleanDropdownOptions;
