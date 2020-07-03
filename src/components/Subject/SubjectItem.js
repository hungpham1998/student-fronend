import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { MDBModal, MDBModalHeader, MDBModalBody, MDBModalFooter, MDBBtn } from 'mdbreact';

class SubjectItem extends Component {

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
        var { subject, index } = this.props;
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{subject.Code}</td>
                <td>{subject.Title}</td>
                <td>{subject.CreaditNumber}</td>
                <td>{subject.Note}</td>
                <td>
                    <Link
                        to={`/subject/${subject.Id}/edit`}
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
                                <span style={{ color: 'black' }}> Bạn chắc chắn muốn xóa môn học  <b> {subject.Title }</b>  </span>
                                </MDBModalBody>
                                <MDBModalFooter>
                                <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
                                <MDBBtn color="primary"  onClick={() => this.onDelete(subject.id)}>Xóa</MDBBtn>
                                </MDBModalFooter>
                        </MDBModal>
                </button>
                </td>
            </tr>
        )
    }
}
 
export default SubjectItem;
