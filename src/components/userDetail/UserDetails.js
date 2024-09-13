import React from 'react';
import { Row, Col, Button, Switch } from 'antd';
import { UserOutlined, PhoneOutlined, MailOutlined, HomeOutlined, ArrowLeftOutlined } from '@ant-design/icons';

const UserDetails = () => {
  return (
    <div style={{ margin: '20px', padding: '20px', backgroundColor: '#fff', minHeight: '50vh' }}>
      <Row justify="space-between" align="middle" style={{ marginBottom: '20px' }}>
        <Col>
          <h2><UserOutlined /> User Details</h2>
        </Col>
        <Col>
          <Button style={{ marginRight: '10px' }}>
            <ArrowLeftOutlined /> Back
          </Button>
          <Button type="primary">Edit/Update</Button>
        </Col>
      </Row>

      <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px' }}>
        <Row gutter={[16, 16]} align="middle">
          {/* Picture on the left */}
          <Col xs={24} sm={6} md={4}>
            <div style={{ textAlign: 'center' }}>
              <img
                src="https://via.placeholder.com/150"
                alt="User Avatar"
                style={{ borderRadius: '10px', width: '100%', maxWidth: '150px' }}
              />
            </div>
          </Col>

          <Col xs={24} sm={18} md={20}>
            <div style={{ padding: '20px' }}>
              <Row gutter={[16, 16]}>
                {/* Full Name, Contact Number, Email Address, and Status in one row */}
                <Col xs={24} sm={12} md={6}>
                  <div>
                    <span style={{ fontWeight: 'bold' }}>
                      <UserOutlined style={{ marginRight: '10px' }} />
                      Full Name
                    </span>
                    <p style={{ fontSize: '17px', color: '#666', marginTop: '10px' }}>Ankit Gupta</p>
                  </div>
                  <div>
                    <HomeOutlined style={{ marginRight: '10px' }} />
                    <span style={{ fontWeight: 'bold' }}>Address</span>
                    <p>A-123, 10B scheme, Triveni, Jaipur, Rajasthan, India 302020</p>
                  </div>
                </Col>

                <Col xs={24} sm={12} md={6}>
                  <div>
                    <span style={{ fontWeight: 'bold' }}>
                      <PhoneOutlined style={{ marginRight: '10px' }} />
                      Contact Number
                    </span>
                    <p>9887296522</p>
                  </div>
                </Col>

                <Col xs={24} sm={12} md={6}>
                  <div>
                    <span style={{ fontWeight: 'bold' }}>
                      <MailOutlined style={{ marginRight: '10px' }} />
                      Email Address
                    </span>
                    <p>ankit@craxinno.com</p>
                  </div>
                </Col>

                <Col xs={24} sm={12} md={6}>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontWeight: 'bold' }}>Status</span>
                    <Switch defaultChecked style={{ marginLeft: '10px' }} />
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default UserDetails;
