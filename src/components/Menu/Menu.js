import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { MDBIcon, MDBContainer, MDBRow, MDBBtn } from 'mdbreact';
const menus = [
    // {
    //     name: 'trang chu',
    //     to: '/',
    //     exact: false
    // },
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
    },
    {
        name: 'Điểm danh',
        to: '/attendancesheetlist',     
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
        name: 'Tài khoản',
        to: '/accountlist',
        exact: false
    },
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
        console.log(user.user)
        const authLinks = (
                <div className="navbar navbar-light bg-light">
                <ul className="nav flex-column">
                    <div className="logo">
                        <img src={user.user && user.user.Image != null ? user.user.Image : ''}  />
                           <h6> {user.user && user.user.UserName}</h6>
                    </div>
                    <li>
                        {this.showMenus(menus, user.user && user.user.roles)}
                    </li>
                </ul>
                </div>
            
        )
        return (
            <div>
                {isAuthenticated ? authLinks : <Redirect to="/login" />}
            </div>
            
        );
    }

    showMenus = (menus, roles) => {
        var result = null;
        if (menus.length > 0 && roles) {
            if (roles[0] === "ADMIN") {
                result = menus.map((menu, index) => {
                    return (
                        <MenuLink
                            key={index}
                            label={menu.name}
                            to={menu.to}
                            activeOnlyWhenExact={menu.exact}
                        />
                    );
                })
            }
            
            if (roles[0] === "PM") {
                result = menus.map((menu, index) => {
                    if (menu.to === '/positionlist' || menu.to === "/accountlist" || menu.to === "/departmentlist") {
                        return (
                          null
                        )
                    }
                    else {
                        return (
                            <MenuLink
                                key={index}
                                label={menu.name}
                                to={menu.to}
                                activeOnlyWhenExact={menu.exact}
                            />
                        )
                    }
                })
            }
            if (roles[0] === "TEACHER") {
                result = menus.map((menu, index) => {
                    if (menu.to === '/positionlist' || menu.to === "/accountlist" || menu.to === "/departmentlist"
                        || menu.to === '/learnyearlist' || menu.to === '/specailizedlist' || menu.to === '/learnclasslist'
                        || menu.to === '/subjectlist'
                    ) {
                        return (null);
                    }
                    else {
                        return (
                            <MenuLink
                                key={index}
                                label={menu.name}
                                to={menu.to}
                                activeOnlyWhenExact={menu.exact}
                            />
                        );
                    }
                })
            }
        
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
