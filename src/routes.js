import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import DepartmentListPage from './pages/Department/DepartmentListPage/DepartmentListPage';
import DepartmentActionPage from './pages/Department/DepartmentActionPage/DepartmentActionPage';
import LearnClassActionPage from './pages/LearnClass/LearnClassActionPage';
import LearnClassListPage from './pages/LearnClass/LearnClassListPage';


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
        path: '',
        exact: false,
        main: () => <NotFoundPage />
    }
];

export default routes;
