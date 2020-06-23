import React from 'react';

import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import DepartmentListPage from './pages/Department/DepartmentListPage/DepartmentListPage';
import DepartmentActionPage from './pages/Department/DepartmentActionPage/DepartmentActionPage';
import LearnClassListPage from './pages/LearnClass/LearnClassListPage';
import StudentListPage from './pages/Student/StudentListPage';
import StudentActionAdd from './pages/Student/StudentActionAdd';
import StudentActionEdit from './pages/Student/StudentActionEdit';
import SpecailizedListPage from './pages/Specailized/SpecailizedListPage';
import SpecailizedActionPage from './pages/Specailized/SpecailizedActionPage';
import LearnClassActionAdd from './pages/LearnClass/LearnClassActionAdd';
import LearnClassActionEdit from './pages/LearnClass/LearnClassActionEdit';
import LearnYearListPage from './pages/LearnYear/LearnYearListPage';
import LearnYearActionPage from './pages/LearnYear/LearnYearActionPage';
import ListSubjectPage from './pages/Subject/ListSubjectPage';
import ActionSubjectPage from './pages/Subject/ActionSubjectPage';
import PositionListPage from './pages/Position/PositionListPage';
import PositionActionPage from './pages/Position/PositionActionPage';
import PointstudentListPage from './pages/pointstudent/PointstudentListPage';
import PointstudentActionAdd from './pages/pointstudent/PointstudentActionAdd';
import PointstudentActionEdit from './pages/pointstudent/PointstudentActionEdit';
import StudentLearnClass from './pages/LearnClass/StudentLearnClass';
import ExportStudentPonit from './pages/Student/ExportStudentPonit';
import Login from './pages/Login/Login';
import AccountListPage from './pages/Account/AccountListPage';
import AccountActionAdd from './pages/Account/AccountActionAdd';
import AttendancesheetListPage from './pages/Attendancesheet/AttendancesheetListPage';
import AttendancesheetActionPage from './pages/Attendancesheet/AttendancesheetActionPage';



const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/departmentlist',
        exact: false,
        main: () => <DepartmentListPage />
    },
    {
        path: '/department/add',
        exact: false,
        main: ({history}) => <DepartmentActionPage history={history}/>
    },
    {
        path: '/department/:id/edit',
        exact: false,
        main: ({match, history}) => <DepartmentActionPage match={match} history={history}/>
    },
    {
        path: '/learnclasslist',
        exact: false,
        main: () => <LearnClassListPage />
    },
    {
        path: '/learnclass/add',
        exact: false,
        main: ({history}) => <LearnClassActionAdd history={history}/>
    },
    {
        path: '/learnclass/:id/edit',
        exact: false,
        main: ({match, history}) => <LearnClassActionEdit match={match} history={history}/>
    },
    {
        path: '/learnclass/:id/export',
        exact: false,
        main: ({match, history}) => <StudentLearnClass match={match} history={history}/>
    },
    {
        path: '/studentlist',
        exact: false,
        main: () => <StudentListPage />
    },
    {
        path: '/student/add',
        exact: false,
        main: ({history}) => <StudentActionAdd history={history}/>
    },
    {
        path: '/student/:id/edit',
        exact: false,
        main: ({match, history}) => <StudentActionEdit match={match} history={history}/>
    },
    {
        path: '/student/:id/export',
        exact: false,
        main: ({match, history}) => <ExportStudentPonit match={match} history={history}/>
    },
    {
        path: '/specailizedlist',
        exact: false,
        main: () => <SpecailizedListPage />
    },
    {
        path: '/specailized/add',
        exact: false,
        main: ({history}) => <SpecailizedActionPage history={history}/>
    },
    {
        path: '/specailized/:id/edit',
        exact: false,
        main: ({match, history}) => <SpecailizedActionPage match={match} history={history}/>
    },
    {
        path: '/learnyearlist',
        exact: false,
        main: () => <LearnYearListPage />
    },
    {
        path: '/learnyear/add',
        exact: false,
        main: ({history}) => <LearnYearActionPage history={history}/>
    },
    {
        path: '/learnyear/:id/edit',
        exact: false,
        main: ({match, history}) => <LearnYearActionPage match={match} history={history}/>
    },
    {
        path: '/subjectlist',
        exact: false,
        main: () => <ListSubjectPage />
    },
    {
        path: '/subject/add',
        exact: false,
        main: ({history}) => <ActionSubjectPage history={history}/>
    },
    {
        path: '/subject/:id/edit',
        exact: false,
        main: ({match, history}) => <ActionSubjectPage match={match} history={history}/>
    },
    {
        path: '/positionlist',
        exact: false,
        main: () => <PositionListPage />
    },
    {
        path: '/position/add',
        exact: false,
        main: ({history}) => <PositionActionPage history={history}/>
    },
    {
        path: '/position/:id/edit',
        exact: false,
        main: ({match, history}) => <PositionActionPage match={match} history={history}/>
    },
    {
        path: '/pointstudentlist',
        exact: false,
        main: () => <PointstudentListPage />
    },
    {
        path: '/pointstudent/add',
        exact: false,
        main: ({history}) => <PointstudentActionAdd history={history}/>
    },
    {
        path: '/pointstudent/:id/edit',
        exact: false,
        main: ({match, history}) => <PointstudentActionEdit match={match} history={history}/>
    },
    {
        path: '/accountlist',
        exact: false,
        main: () => <AccountListPage />
    },
    {
        path: '/account/add',
        exact: false,
        main: ({history}) => <AccountActionAdd history={history} />
    },
    {
        path: '/attendancesheetlist',
        exact: false,
        main: () => <AttendancesheetListPage />
    },
    {
        path: '/attendancesheet/add',
        exact: false,
        main: ({history}) => <AttendancesheetActionPage history={history} />
    },
    {
        path: '/attendancesheet/:id/edit',
        exact: false,
        main: ({history, match}) => <AttendancesheetActionPage history={history} match={match} />
    },
    {
        path: '/login',
        exact: false,
        main: () => <Login />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage />
    }

];

export default routes;
