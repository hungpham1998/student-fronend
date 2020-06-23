import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MDBModal, MDBModalHeader, MDBModalBody, MDBBtn, MDBModalFooter } from 'mdbreact';

class DepartmentItem extends Component {
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
        var { department, index } = this.props;
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{department.Title}</td>
                <td>{department.Note}</td>
                <td> {department.IdPartment}</td>
                <td>
                    <Link
                        to={`/department/${department.Id}/edit`}
                        className="btn btn-yellow darken-2"
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
                                <span style={{ color: 'black' }}> Bạn chắc chắn muốn xóa  <b> {department.Title}</b>  </span>
                            </MDBModalBody>
                            <MDBModalFooter>
                                <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
                                <MDBBtn color="primary" onClick={() => this.onDelete(department.Id)}>Xóa</MDBBtn>
                            </MDBModalFooter>
                        </MDBModal>
                </button>
                </td>
            </tr>
        );
    }
}

export default DepartmentItem;
