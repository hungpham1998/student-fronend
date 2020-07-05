import React, { Component } from 'react'
import { MDBModal, MDBModalHeader, MDBModalBody, MDBModalFooter, MDBBtn } from 'mdbreact';
import { Link } from 'react-router-dom';
import { Modal, ModalHeader, ModalFooter } from 'reactstrap';
export default class AccountItem extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            modal: false,
            showView: false,
        });
        this.showModal = this.showModal.bind(this);
    }
    toggle = () => {
    this.setState({
        modal: !this.state.modal
    });
    }
    showModal = () => {
        this.setState({
            showView: !this.state.showView
        });
    }
     onDelete = async (id) => {
   
        await this.props.onDelete(id);
        this.setState({
            showView: !this.state.showView
        });
    }

    render() {
        var { account, index } = this.props;
        return (
            <tr>
                <td>{index + 1}</td>
                <td onClick={this.showModal} style={{color:'#00FFFF'}}>{account.UserName}</td>
                <td onClick={this.showModal} style={{color:'#00FFFF'}} >{account.Account}</td>
                <td>{account.Address}</td>
                <td>{account.Mail}</td>
                <td>{account.departmentId  != null ? account.department.Title :' '}</td>
                <td>{account.positionId != null ? account.position.Title : ''}</td>
                <td>{account.roles.length > 0 ? account.roles.map(item => {return item.Title}): ''}</td>

                <td>
                    <Modal isOpen={this.state.showView} toggle={this.showModal} >
                    <ModalHeader toggle={this.showModal}>
                        <b style={{ color: 'black' }}> Bạn chọn chức năng với tài khoản {account.UserName}</b>
                    </ModalHeader>
                    <ModalFooter>
                    {/* <Link
                        to={`/account/${account.Id}/edit`}
                        className="btn btn-success"
                    >
                       Sửa
                </Link> */}
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={this.toggle}
                        >
                            Xóa
                            <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                                <MDBModalHeader toggle={this.toggle}></MDBModalHeader>
                                 <MDBModalBody>
                                <span style={{ color: 'black' }}> Bạn chắc chắn muốn xóa tài khoản <b> {account.UserName}</b>  </span>
                                </MDBModalBody>
                                <MDBModalFooter>
                                <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
                                <MDBBtn color="primary" onClick={() => this.onDelete(account.id)}>Xóa</MDBBtn>
                                </MDBModalFooter>
                                </MDBModal>
                   
                            </button>
                            <button onClick={this.showModal} className="btn btn-secondary" > đóng </button>
                         </ModalFooter>
                     </Modal>
                </td> 
            </tr>
        );
    }
}
