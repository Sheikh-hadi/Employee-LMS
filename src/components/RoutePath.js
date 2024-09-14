import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes
import SalaryForm from '../Pages/SalaryForm';
import EditEmployeeForm from '../components/EditEmployeeForm';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Error from '../components/ErrorUnauthorizedAccess';
import ErrorForbidden from '../components/ErrorForbidden';
import ForgotPasswordOtp from '../components/ForgotPasswordOtp';
import CompanyDetail from '../Pages/CompanyDetail';
import EmployeeAttendenceTracking from './EmployeeAttendenceTracking';
import Dashboard from '../Pages/Dashboard';
import Employee from '../Pages/Employee';
import Attendence from '../Pages/Attendence';
import Payment from '../Pages/Payment';
import Department from '../Pages/Department';
import UserdetailPage from '../Pages/UserdetailPage';
import PageNotFoundError from './PageNotFoundError';
import UserTable from './UserTable';
// import ProtectLayes from './ProtectLayes';

const RoutePath = () => {
    return (
        // <ProtectLayes>
        <Routes>
            <Route path="*" element={<ErrorForbidden />} />
            <Route path="/salary" element={<SalaryForm />} />
            <Route path="/editForm" element={<EditEmployeeForm />} />
            <Route path="/header" element={<Header />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="/error" element={<Error />} />
            <Route path="/attendenceTracking" element={<EmployeeAttendenceTracking/>} />
            <Route path="/error403" element={<ErrorForbidden />} />
            <Route path="/error404" element={<PageNotFoundError/>} />
            <Route path="/sentOtp" element={<ForgotPasswordOtp />} />
            <Route path="/forgetPassword" element={<ForgotPasswordOtp />} />
            <Route path="/userTable" element={<UserTable/>} />
            <Route path="/userDetails" element={<UserdetailPage />} />
            <Route path="/company" element={<CompanyDetail />} />
            <Route path="/employeeAttendenceRecord" element={<EmployeeAttendenceTracking />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/employee" element={<Employee />} />
            <Route path="/attendence" element={<Attendence />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/department" element={<Department />} />
        </Routes>
        // </ProtectLayes>
    );
};

export default RoutePath;
