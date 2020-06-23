import React, { Component } from 'react'
import { MDBModal, MDBModalHeader, MDBModalBody, MDBModalFooter, MDBBtn } from 'mdbreact';
import { Link } from 'react-router-dom';
export default class AccountItem extends Component {
    state = {
        modal: false
      }
      
      toggle = () => {
        this.setState({
          modal: !this.state.modal
        });
      }
    onDelete = (id) => {
   
        this.props.onDelete(id);
    }

    render() {
        var { account, index } = this.props;
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{account.UserName}</td>
                <td>{account.Account}</td>
                <td>{account.Address}</td>
                <td>{account.Mail}</td>
                <td>{account.departmentId  != null ? account.department.Title :' '}</td>
                <td>{account.positionId != null ? account.position.Title : ''}</td>
                <td>{account.roles.length > 0 ? account.roles.map(item => {return item.Title}): ''}</td>

                {/* <td>
                    <Link
                        to={`/account/${account.Id}/edit`}
                        className="btn btn-success"
                    >
                       Sửa
                </Link>
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={this.toggle}
                    >
                            Xóa
                            <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                                <MDBModalHeader toggle={this.toggle}></MDBModalHeader>
                                 <MDBModalBody>
                                <span style={{ color: 'black' }}> Bạn chắc chắn muốn xóa khoa <b> {account.UserName}</b>  </span>
                                </MDBModalBody>
                                <MDBModalFooter>
                                <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
                                <MDBBtn color="primary" onClick={() => this.onDelete(account.id)}>Xóa</MDBBtn>
                                </MDBModalFooter>
                            </MDBModal>
                </button>
                </td> */}
            </tr>
        );
    }
}
