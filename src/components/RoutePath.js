import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SalaryForm from '../Pages/SalaryForm';
import EditEmployeeForm from './EmployeeComponent/EditEmployeeForm';
import Error from '../components/ErrorUnauthorizedAccess';
import ErrorForbidden from '../components/ErrorForbidden';
import ForgotPasswordOtp from '../components/ForgotPasswordOtp';
import CompanyDetail from '../Pages/CompanyDetail';
import EmployeeAttendenceTracking from './AttendenceComponent/EmployeeAttendenceTracking';
import Dashboard from '../Pages/Dashboard';
import Employee from '../Pages/Employee';
import Attendence from '../Pages/Attendence';
import Payment from '../Pages/Payment';
import Department from '../Pages/Department';
import UserdetailPage from '../Pages/UserdetailPage';
import PageNotFoundError from './PageNotFoundError';
import ProtectLayes from './ProtectLayes';
import RegeneratePasswordField from './RegeneratePasswordField';
import UserPage from '../Pages/User';
import AddNewEmployee from '../components/EmployeeComponent/AddNewEmployee';

const RoutePath = () => {
    return (
        <ProtectLayes>
            <Routes>
                <Route path="*" element={<ErrorForbidden />} />
                <Route path="/add-new-employee" element={<AddNewEmployee />} />
                <Route path="/salary" element={<SalaryForm />} />
                <Route path="/edit-form" element={<EditEmployeeForm />} />
                <Route path="/error" element={<Error />} />
                <Route path="/attendence-tracking" element={<EmployeeAttendenceTracking />} />
                <Route path="/error-403" element={<ErrorForbidden />} />
                <Route path="/error-404" element={<PageNotFoundError />} />
                <Route path="/sent-0tp" element={<ForgotPasswordOtp />} />
                <Route path="/forget-password" element={<ForgotPasswordOtp />} />
                <Route path="/user-table" element={<UserPage />} />
                <Route path="/new-password" element={<RegeneratePasswordField />} />
                <Route path="/user-details" element={<UserdetailPage />} />
                <Route path="/user-details/:id" element={<UserdetailPage />} />
                <Route path="/company" element={<CompanyDetail />} />
                <Route path="/employee-attendence-record" element={<EmployeeAttendenceTracking />} />
                <Route path="/" element={<Dashboard />} />
                <Route path="/employee" element={<Employee />} />
                <Route path="/attendence" element={<Attendence />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/department" element={<Department />} />
            </Routes>
        </ProtectLayes>
    );
};

export default RoutePath;
