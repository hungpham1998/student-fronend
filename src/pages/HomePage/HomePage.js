import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image } from 'react-bootstrap';
import { Row, Col, Card,CardTitle } from 'reactstrap';
import { CardBody } from 'react-bootstrap/Card';

class HomePage extends Component {
    render() {
        const { user,isAuthenticated } = this.props.authReducer;
        return (
            <div className="container">
            {
                    isAuthenticated === true ? ( 
                        <div className="panel panel-primary">
                            <div className="panel-heading d-flex justify-content-between">
                                <h1> chào mừng {user.user.UserName}</h1>
                            </div>
                            <div className="panel-body">
                                <Row>
                                    <Col sm={4}>
                                        <div>
                                            <Image style={{
                                                width: 250,
                                                height:250
                                            }}
                                            className="rounded-circle" src={user.user.Image ? user.user.Image : "../../../public/image/face24.png"} />
                                            
                                            <p style={{textAlign:'center'}}> ảnh người dùng {user.user.UserName}</p>
                                        </div>
                                    </Col>
                                    <Col sm={8}>
                                        <div style={{ alignContent: 'center'}}>
                                            <h5 style={{textAlign: 'center'}}> Thông tin tài khoản đăng nhập </h5>
                                            <Col md={{ size: 6, offset: 3 }}>
                                                <span> Tên người dùng : {user.user.UserName} </span> <br />
                                                <span> Tên tài khoản : {user.user.Account} </span>  <br />
                                                <span> Địa chỉ : {user.user.Address} </span>    <br />
                                                <span> Mail : {user.user.Mail} </span>  <br />
                                                <span> Phòng Ban: {user.user.departmentId  != null ? user.user.department.Title :' '} </span>   <br />
                                                <span> Chức vụ : {user.user.positionId != null ? user.user.position.Title : ''} </span> <br />
                                                <span> Quyền hạn đăng nhập : {user.user.roles.length > 0 ? user.user.roles[0]: ''} </span>
                                            </Col>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
           ): ''
            }
           </div>
        );
    }
}

const mapStateToProps = (state) => ({
    authReducer: state.authReducer,
});

export default connect(mapStateToProps)(HomePage) ;
