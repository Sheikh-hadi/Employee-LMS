import { Tooltip } from "antd";
const columns = [
    { title: 'Sr.', dataIndex: 'id', key: 'id' },
    {
        title: 'Photo',
        dataIndex: 'photo',
        key: 'photo',
        render: (photo) => <img src={photo} alt="Employee" style={{ width: 50, height: 50 }} />
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text, record) => (
          <Tooltip title={`${record.firstName} ${record.lastName}`}>
            <span>{text}</span>
          </Tooltip>
        ),
      },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Department', dataIndex: 'department', key: 'department' },
    { 
        title: 'Salary', 
        dataIndex: 'salary', 
        key: 'salary', 
        render: (salary) => `$${salary.toLocaleString()}`
    },
    { title: 'Date', dataIndex: 'date', key: 'date' },
    {
        title: 'Actions',
        key: 'actions',
        render: (text, record) => (
            <>
                <Button onClick={() => handleEdit(record.id)} type="link" style={{ marginRight: '8px' }}>Edit</Button>
                <Button onClick={() => handleDelete(record.id)} type="link">Delete</Button>
            </>
        )
    },
];
