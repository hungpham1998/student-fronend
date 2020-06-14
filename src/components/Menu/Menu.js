import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
const menus = [
    {
        name: 'Trang Chủ',

        to: '/',
        exact: true
    },
    {
        name: 'Phòng Ban',
        to: '/departmentlist',
        exact: false
    },
    {
        name: 'Khoa',
        to: '/specailizedlist',     
        exact: false
    },
    {
        name: 'Lớp',
        to: '/learnclasslist',
        exact: false
    },
    {
        name: 'Học sinh',
        to: '/studentlist',     
        exact: false
    },
    {
        name: 'Năm học',
        to: '/learnyearlist',     
        exact: false
    },
    {
        name: 'Môn học',
        to: '/subjectlist',     
        exact: false
    }
];

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({ match }) => {
                var active = match ? 'active' : '';
                return (
                    <li className={active}>
                        <Link to={to}>
                            {label}
                        </Link>
                    </li>
                );
            }}
        />
    );
};

class Menu extends Component {
    render() {
        return (
            <div  className="navbar navbar-light bg-light">
                {/* <ol className="nav navbar-nav"> */}
                <ol className="nav flex-column">
                    {this.showMenus(menus)}
                </ol>
            </div>
        );
    }

    showMenus = (menus) => {
        var result = null;
        if(menus.length > 0){
            result = menus.map((menu, index) => {
                return (
                    <MenuLink 
                        key={index}
                        label={menu.name}
                        to={menu.to}
                        activeOnlyWhenExact={menu.exact}
                    />
                );
            });
        }
        return result;
    }

}

export default Menu;
