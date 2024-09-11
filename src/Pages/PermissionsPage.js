// // PermissionsPage.js
// import React from 'react';
// import { Row, Col } from 'antd';

// import GlobalTaskAccess from '../components/Permissions/GlobalTaskAccess';
// import ClientAccess from '../components/Permissions/ClientAccess';
// import LeadAccess from '../components/Permissions/LeadAccess';
// import UserAccess from '../components/Permissions/UserAccess';


// const PermissionsPage = () => {
//   return (
//     <div style={{ padding: '24px' }}>
//       <Row gutter={[24, 24]}>
//         <Col xs={24} sm={12} md={8} lg={6}>
//           <ClientAccess/>
//         </Col>
//         <Col xs={24} sm={12} md={8} lg={6}>
//         <LeadAccess/>
//         </Col>
//         <Col xs={24} sm={12} md={8} lg={6}>
//           <GlobalTaskAccess/>
//         </Col>
//       <Col xs={24} sm={12} md={8} lg={6}>
//       <UserAccess/>
//       </Col>
//       </Row>
//     </div>
//   );
// };

// export default PermissionsPage;
import React from 'react';
import { Row, Col, Checkbox, Button } from 'antd';

import LeadAccess from './../components/Permissions/LeadAccess';
import TaskAccess from '../components/Permissions/TaskAccess';
import UserAccess from '../components/Permissions/UserAccess';
import CalendarAccess from '../components/Permissions/CalendarAccess';
import ServiceAccess from '../components/Permissions/ServiceAccess';
import SupportCenterAccess from '../components/Permissions/SupportCenterAccess';
import SupportTypeAccess from '../components/Permissions/SupportTypeAccess';
import ClientAccess from './../components/Permissions/ClientAccess';

const PermissionsPage = () => {
  return (
    <div style={{ padding: '250px', backgroundColor: '#fff', marginTop:'-350px' }}>  
      <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>Permission</h2>
      <Checkbox style={{ marginBottom: '20px' }}>Full Permission</Checkbox>

      {/* Grid Layout for Access Permissions */}
      <Row gutter={[24, 24]}>
        <Col xs={24} sm={12} md={6}>
          <ClientAccess/>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <LeadAccess />
        </Col>
        <Col xs={24} sm={12} md={6}>
          <TaskAccess/>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <UserAccess/>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <CalendarAccess/>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <ServiceAccess/>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <SupportCenterAccess/>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <SupportTypeAccess/>
        </Col>
      </Row>

      {/* Edit/Update Button */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Button type="primary" size="large">Edit/Update</Button>
      </div>
    </div>
  );
};

export default PermissionsPage;
