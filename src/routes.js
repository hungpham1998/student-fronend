import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import DepartmentListPage from './pages/Department/DepartmentListPage/DepartmentListPage';
import DepartmentActionPage from './pages/Department/DepartmentActionPage/DepartmentActionPage';
import LearnClassActionPage from './pages/LearnClass/LearnClassActionPage';
import LearnClassListPage from './pages/LearnClass/LearnClassListPage';
import StudentListPage from './pages/Student/StudentListPage';
import StudentActionAdd from './pages/Student/StudentActionAdd';
import StudentActionEdit from './pages/Student/StudentActionEdit';
import SpecailizedListPage from './pages/Specailized/SpecailizedListPage';
import SpecailizedActionPage from './pages/Specailized/SpecailizedActionPage';

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
        main: ({history}) => <LearnClassActionPage history={history}/>
    },
    {
        path: '/learnclass/:id/edit',
        exact: false,
        main: ({match, history}) => <LearnClassActionPage match={match} history={history}/>
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
        path: '',
        exact: false,
        main: () => <NotFoundPage />
    }
];

export default routes;
