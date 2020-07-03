import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { MDBContainer, MDBBtn, MDBModal, MDBModalHeader, MDBModalBody, MDBModalFooter } from 'mdbreact';

export default class SpecailizedItem extends Component {
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
        var { specailized, index } = this.props;
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{specailized.Code}</td>
                <td>{specailized.Title}</td>
                <td>{specailized.Note}</td>
                <td>
                    <Link
                        to={`/specailized/${specailized.Id}/edit`}
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
                                <span style={{ color: 'black' }}> Bạn chắc chắn muốn xóa khoa <b> {specailized.Title}</b>  </span>
                                </MDBModalBody>
                                <MDBModalFooter>
                                <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
                                <MDBBtn color="primary" onClick={() => this.onDelete(specailized.id)}>Xóa</MDBBtn>
                                </MDBModalFooter>
                            </MDBModal>
                </button>
                </td>
            </tr>
        );
    }
};
