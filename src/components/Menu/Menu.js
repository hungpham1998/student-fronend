import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
const menus = [
    {
        name: 'trang chu',
        to: '/',
        exact: false
    },
    {
        name: 'Phòng Ban',
        to: '/departmentlist',
        exact: false
    },
    {
        name: 'Chức vụ',
        to: '/positionlist',
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
    },
    {
        name: 'Bảng điểm',
        to: '/pointstudentlist',     
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
        const { isAuthenticated, user } = this.props.authReducer;
        console.log(user)
        const authLinks = (
            <div className="navbar navbar-light bg-light">
                {/* <ol className="nav navbar-nav">  */}
                <ol className="nav flex-column">
                <a className="nav-link">
                    {/* <img src={user.avatar} alt={user.name} title={user.name}
                        className="rounded-circle"
                        style={{ width: '25px', marginRight: '5px'}} /> */}
                            Logout
                </a>
                    <li>
                        {this.showMenus(menus)}
                    </li>
                 </ol>
            </div>
        )
        return (
            <div>
                     {isAuthenticated ? authLinks : <Redirect to="/login" />}
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



const mapStateToProps = (state) => ({
    authReducer: state.authReducer,
});

Menu.propTypes = {
    authReducer: PropTypes.object.isRequired
}
export default connect(mapStateToProps)(withRouter(Menu));
