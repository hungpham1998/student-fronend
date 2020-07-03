import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import PerfectScrollbar from "perfect-scrollbar";
import listMenus from './listMenu'
import { Nav, NavLink as ReactstrapNavLink, NavItem } from "reactstrap";
var ps;



class Siderbar extends Component {
  render() {
        const { isAuthenticated, user } = this.props;
        return (
          <Nav>
              {isAuthenticated ? this.showMenus(listMenus, user.user && user.user.roles)   : <Redirect to="/login" />   }
          </Nav>   
        );
    }

  
      showMenus = (menus, roles) => {
        var result = null;
        if (menus.length > 0 && roles) {
            if (roles[0] === "ADMIN") {
              result = menus.map((menu, index) => {
                return (
                  <li className="nav-item">
                      <Link
                        key={index}
                        to={menu.to}
                        exact={menu.exact? menu.exact: undefined}
                        className="nav-link"
                        >
                        <i className={menu.icon}> {menu.name}</i>     
                        </Link>
                    </li>
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
                        <li className="nav-item">
                            <Link
                              key={index}
                              to={menu.to}
                              exact={menu.exact? menu.exact: undefined}
                              className="nav-link"
                          >
                             <i className={menu.icon}> {menu.name}</i>
                          </Link>
                        </li>
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
                        <li className="nav-item">
                            <Link
                              key={index}
                              to={menu.to}
                              exact={menu.exact? menu.exact: undefined}
                              className="nav-link"
                             >
                            <i className={menu.icon}> {menu.name}</i>
                            </Link>
                          </li>
                        );
                    }
                })
            }
        
        }
        return result;
    }

}


Siderbar.defaultProps = {
 
    bgColor: "primary",
    listMenus: [{}]
  };
  

Siderbar.propTypes = {
    bgColor: PropTypes.oneOf(["primary", "blue", "green"]),
    listMenus: PropTypes.arrayOf(PropTypes.object),
   
  };

export default Siderbar;
