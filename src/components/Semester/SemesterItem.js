import React, { Component } from 'react'
import { MDBModal, MDBModalHeader, MDBModalBody, MDBModalFooter, MDBBtn } from 'mdbreact';
import { Link } from 'react-router-dom';

export default class SemesterItem extends Component {
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
        var { semester, index } = this.props;
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{semester.Title}</td>
                <td>{semester.Code}</td>
                <td> {semester.learnyearId != null ? semester.learnyear.Title: ''}</td>
                <td>{semester.Note}</td>
                <td>
                    <Link
                        to={`/semester/${semester.Id}/edit`}
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
                                <span style={{ color: 'black' }}> Bạn chắc chắn muốn xóa  <b> {semester.Title}</b>  </span>
                                </MDBModalBody>
                                <MDBModalFooter>
                                <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
                                <MDBBtn color="primary" onClick={() => this.onDelete(semester.Id)}>Xóa</MDBBtn>
                                </MDBModalFooter>
                        </MDBModal>
                </button>
                {/* <Link className="btn btn-green accent-3" to={`/learnclass/${semester.Id}/export`}>Thông tin </Link> */}
                </td>
            </tr>
        );
    }
}
