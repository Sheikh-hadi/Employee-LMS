import React, { useEffect, useState } from 'react';
import { Row, Col, Typography, Divider, Button } from 'antd';

const { Title, Text } = Typography;

const ExperienceLetter = () => {
  const [employeeData, setEmployeeData] = useState(null);

  useEffect(() => {
    const fakeApiData = {
      name: 'Ghulam Mohayudin',
      fatherName: 'Asghar Ali',
      cnic: '35301-5080730-1',
      joiningDate: 'September 18th, 2023',
      leavingDate: 'April 18th, 2024',
      designation: 'Quality Assurance',
    };

    // Setting the fetched data to the state
    setEmployeeData(fakeApiData);
  }, []);

  // Function to handle print
  const handlePrint = () => {
    window.print();
  };

  if (!employeeData) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f2f5' }}>
    
      <Button
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          zIndex: 1000, // Ensure it stays on top
        }}
        type="primary"
        onClick={handlePrint}
      >
        Print
      </Button>

     
      <div
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '20px',
          backgroundColor: '#fff',
          borderRadius: '10px',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Divider />

      
        <Row>
          <Col span={12}>
            <Text style={{ marginBottom: '20px' }}>
              <strong>Dated:</strong> {employeeData.leavingDate}
            </Text>
          </Col>
        </Row>

      
        <Row>
          <Col span={24}>
            <Title level={3} style={{ textAlign: 'center', marginBottom: '30px' }}>
              TO WHOM IT MAY CONCERN
            </Title>
          </Col>
        </Row>

    
        <div>
          <Text style={{ lineHeight: '1.8', fontSize: '16px', textAlign: 'justify' }}>
            This is to certify that <strong>{employeeData.name}</strong> S/O{' '}
            <strong>{employeeData.fatherName}</strong> having CNIC: <strong>{employeeData.cnic}</strong> 
            served at Game Pixel Studio from <strong>{employeeData.joiningDate}</strong> to{' '}
            <strong>{employeeData.leavingDate}</strong> as a <strong>{employeeData.designation}</strong> 
            and worked as an unpaid intern.
            <br />
            <br />
            Until the day he joined, he had been quite responsible. To date, he has accumulated
            a diverse set of talents and job experiences. His abilities include teamwork,
            managerial skills, and analytical skills. Aside from his dedication, he had always
            been a decent and kind person who kept good relationships with everyone. He is
            hardworking, has an artistic mind, and has good moral conduct. He always maintained
            a professional and courteous attitude and appearance while with our company. He
            remained dedicated and loyal to his work and responsibilities with our company.
          </Text>
        </div>

      
        <div style={{ marginTop: '50px' }}>
          <Text>Yours Sincerely,</Text>
          <br />
          <br />
          <Text>
            <strong>Qurat Ul Ain</strong>
          </Text>
          <br />
          <Text>HR Executive,</Text>
          <br />
          <Text>Game Pixel Studio</Text>
        </div>
      </div>
    </div>
  );
};

export default ExperienceLetter;