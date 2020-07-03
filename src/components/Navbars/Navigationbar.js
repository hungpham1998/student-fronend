
import React from "react";

import classNames from "classnames";
import {Link} from "react-router-dom"
import { Nav } from "reactstrap";
import {DropdownButton, Dropdown,Image } from 'react-bootstrap';

class Navigationbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    
    };
  }
  render() {
    const { user, isAuthenticated } = this.props;
    return (
      <div className="navbar-menu-wrapper d-flex align-items-center">
        { isAuthenticated ? (
        
          <Nav className="navbar-nav ml-auto">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic" >
                <span><i className="fa fa-user fa-fw"></i> {`chào mừng ` + ' : ' + user.user.UserName}</span>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Header className="dropdown-header text-center">
                    <Image  className="img-md rounded-circle" src={user.user.Image ? user.user.Image : "../../../public/image/face24.png"}/>
                    <p className="mb-1 mt-3 font-weight-semibold">{user.user.UserName}</p>
                </Dropdown.Header>
                <Dropdown.Item href="#/" >Thông tin tài khoản </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
      ) : '' }
    </div>
    );
  }
};
          

export default Navigationbar;
