
import React from "react";
import { NavLink, Link, Redirect } from "react-router-dom";

import { PropTypes } from "prop-types";

import PerfectScrollbar from "perfect-scrollbar";

import { Nav, NavLink as ReactstrapNavLink } from "reactstrap";
import { connect } from "react-redux";

var ps;

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.activeRoute.bind(this);
  }
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.refs.sidebar, {
        suppressScrollX: true,
        suppressScrollY: false
      });
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
    }
  }
  linkOnClick = () => {
    document.documentElement.classList.remove("nav-open");
  };
  render() {
    const { bgColor, routes } = this.props;
    const { isAuthenticated, user } = this.props.authReducer;
    // let logoImg = null;
    // let logoText = null;
    // if (logo !== undefined) {
    //   if (logo.outterLink !== undefined) {
    //     logoImg = (
    //       <a
    //         href={logo.outterLink}
    //         className="simple-text logo-mini"
    //         target="_blank"
    //         onClick={this.props.toggleSidebar}
    //       >
    //         <div className="logo-img">
    //           <img src={logo.imgSrc} alt="react-logo" />
    //         </div>
    //       </a>
    //     );
    //     logoText = (
    //       <a
    //         href={logo.outterLink}
    //         className="simple-text logo-normal"
    //         target="_blank"
    //         onClick={this.props.toggleSidebar}
    //       >
    //         {logo.text}
    //       </a>
    //     );
    //   } else {
    //     logoImg = (
    //       <Link
    //         to={logo.innerLink}
    //         className="simple-text logo-mini"
    //         onClick={this.props.toggleSidebar}
    //       >
    //         <div className="logo-img">
    //           <img src={logo.imgSrc} alt="react-logo" />
    //         </div>
    //       </Link>
    //     );
    //     logoText = (
    //       <Link
    //         to={logo.innerLink}
    //         className="simple-text logo-normal"
    //         onClick={this.props.toggleSidebar}
    //       >
    //         {logo.text}
    //       </Link>
    //     );
    //   }
    // }

    const showMenus = (routes, roles) => {
      var result = null;
      if (routes.length > 0 && roles) {
          if (roles[0] === "ADMIN") {
              result = routes.map((menu, index) => {
                  return (
                      <NavLink
                          key={index}
                          label={menu.name}
                          to={menu.to}
                          activeOnlyWhenExact={menu.exact}
                          className="nav-link"
                          activeClassName="active"
                          onClick={this.props.toggleSidebar}
                       >
                          <i className={menu.icon} />
                          <p>{menu.name}</p>
                      </NavLink>
                  );
              })
          }
          
          if (roles[0] === "PM") {
              result = routes.map((menu, index) => {
                  if (menu.to === '/positionlist' || menu.to === "/accountlist" || menu.to === "/departmentlist") {
                      return (
                        null
                      )
                  }
                  else {
                      return (
                          <NavLink
                              key={index}
                              to={menu.to}
                              activeOnlyWhenExact={menu.exact}
                              className="nav-link"
                              activeClassName="active"
                              onClick={this.props.toggleSidebar}
                          >
                            <i className={menu.icon} />
                            <p>{menu.name}</p>
                          </NavLink>
                      )
                  }
              })
          }
          if (roles[0] === "TEACHER") {
              result = routes.map((menu, index) => {
                  if (menu.to === '/positionlist' || menu.to === "/accountlist" || menu.to === "/departmentlist"
                      || menu.to === '/learnyearlist' || menu.to === '/specailizedlist' || menu.to === '/learnclasslist'
                      || menu.to === '/subjectlist'
                  ) {
                      return (null);
                  }
                  else {
                      return (
                          <NavLink
                              key={index}
                              to={menu.to}
                              activeOnlyWhenExact={menu.exact}
                              className="nav-link"
                              activeClassName="active"
                              onClick={this.props.toggleSidebar}
                        >
                          <i className={menu.icon} />
                         <p>{menu.name}</p>
                          </NavLink>
                      );
                  }
              })
          }
      
      }
      return result;
  }
    return (
      <div className="sidebar" data={bgColor}>
        <div className="sidebar-wrapper" ref="sidebar">
          {/* {logoImg !== null || logoText !== null ? (
            <div className="logo">
              {logoImg}
              {logoText}
            </div>
          ) : null} */}
          {isAuthenticated ? ( <Nav> {showMenus(routes,user)} </Nav>) : (<Redirect to="/login" />)}
        </div>
      </div>
    );
  }
}

Sidebar.defaultProps = {
  rtlActive: false,
  bgColor: "primary",
  routes: [{}]
};

Sidebar.propTypes = {
  rtlActive: PropTypes.bool,
  bgColor: PropTypes.oneOf(["primary", "blue", "green"]),
  routes: PropTypes.arrayOf(PropTypes.object),
  logo: PropTypes.shape({
    innerLink: PropTypes.string,
    outterLink: PropTypes.string,
    text: PropTypes.node,
    imgSrc: PropTypes.string
  })
};

const mapStateToProps = (state) => ({
  authReducer: state.authReducer,
});

Sidebar.propTypes = {
  authReducer: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(Sidebar);
