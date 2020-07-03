import React, { Component } from 'react';
import './App.css';
import Siderbar from './components/Menu/Siderbar';
import routes from './routes';
import { Switch, Route, BrowserRouter as Router,  } from 'react-router-dom';
import { createBrowserHistory } from 'history'
import Footer from './components/Footer/Footer';
import Navigationbar from './components/Navbars/Navigationbar';
import { connect } from 'react-redux';
import { PropTypes } from "prop-types";
import PerfectScrollbar from 'perfect-scrollbar';

var ps;
const history = createBrowserHistory()
class App extends Component {
    
    render() {
        const { isAuthenticated, user } = this.props.authReducer;
        console.log(user)
        return (
            <div className="container-scroller"  >
                {isAuthenticated ? (
                    <nav className="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
                    <Navigationbar isAuthenticated={isAuthenticated} user={user} />
                </nav>) : ''}
                <Router history={history}>
                    <div className="container-fluid page-body-wrapper"  >
                            <nav className="sidebar sidebar-offcanvas" id="sidebar">
                                <Siderbar isAuthenticated={isAuthenticated} user={user} />
                            </nav>
                        <div className="main-panel">
                            <div className="content-wrapper">
                                {this.showContentMenus(routes)}
                            </div>
                            <Footer />
                        </div>
                    </div>
                </Router> 
            </div>
        );
    }

    showContentMenus = (routes) => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                );
            });
        }
        return <Switch>
            {result}
        </Switch>;
    }

}

const mapStateToProps = (state) => ({
    authReducer: state.authReducer,
});

App.propTypes = {
    authReducer: PropTypes.object.isRequired
}
export default connect(mapStateToProps)(App);
// export default App;
