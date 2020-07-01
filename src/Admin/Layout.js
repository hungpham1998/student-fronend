
import AdminNavbar from "./node_modules/components/Navbars/AdminNavbar.js.js";
import Footer from "./node_modules/components/Footer/Footer.js.js";
import Sidebar from "./node_modules/components/Sidebar/Sidebar.js.js";
import FixedPlugin from "./node_modules/components/FixedPlugin/FixedPlugin.js.js";

import routes from "./node_modules/routes.js.js";

import logo from "./node_modules/assets/img/react-logo.png";
import Navigationbar from "../components/Navbars/Navigationbar";
import { connect } from "react-redux";

var ps;

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: "blue",
      sidebarOpened:
        document.documentElement.className.indexOf("nav-open") !== -1
    };
  }
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      ps = new PerfectScrollbar(this.refs.mainPanel, { suppressScrollX: true });
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
      document.documentElement.className += " perfect-scrollbar-off";
      document.documentElement.classList.remove("perfect-scrollbar-on");
    }
  }
  componentDidUpdate(e) {
    if (e.history.action === "PUSH") {
      if (navigator.platform.indexOf("Win") > -1) {
        let tables = document.querySelectorAll(".table-responsive");
        for (let i = 0; i < tables.length; i++) {
          ps = new PerfectScrollbar(tables[i]);
        }
      }
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      this.refs.mainPanel.scrollTop = 0;
    }
  }
  // this function opens and closes the sidebar on small devices
  toggleSidebar = () => {
    document.documentElement.classList.toggle("nav-open");
    this.setState({ sidebarOpened: !this.state.sidebarOpened });
  };

  handleBgClick = color => {
    this.setState({ backgroundColor: color });
  };
  // getBrandText = path => {
  //   for (let i = 0; i < routes.length; i++) {
  //     if (
  //       this.props.location.pathname.indexOf(
  //         routes[i].layout + routes[i].path
  //       ) !== -1
  //     ) {
  //       return routes[i].name;
  //     }
  //   }
  //   return "Brand";
  // };
  render() {
    const { user, isAuthenticated } = this.props.authReducer;
    const { routes } = this.props;
    return (
      <>
        <div className="wrapper">
          <Sidebar
            // {...this.props}
            routes={routes}
            bgColor={this.state.backgroundColor}
            logo={{
              outterLink: "https://www.creative-tim.com/",
              text: "Creative Tim",
              imgSrc: logo
            }}
            user={user.user}
            isAuthenticated = {isAuthenticated}
            toggleSidebar={this.toggleSidebar}
          />
          <div
            className="main-panel"
            ref="mainPanel"
            data={this.state.backgroundColor}
          >
            <Navigationbar
              {...this.props}
             // brandText={this.getBrandText(this.props.location.pathname)}
              toggleSidebar={this.toggleSidebar}
              sidebarOpened={this.state.sidebarOpened}
            />
          </div>
        </div>
        <FixedPlugin
          bgColor={this.state.backgroundColor}
          handleBgClick={this.handleBgClick}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  authReducer: state.authReducer,
});

MeLayoutnu.propTypes = {
  authReducer: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(withRouter(Layout));
