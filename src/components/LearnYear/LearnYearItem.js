import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MDBModal, MDBModalHeader, MDBModalBody, MDBModalFooter, MDBBtn } from 'mdbreact';
 
class LearnYearItem extends Component {
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
        var { learnyear, index } = this.props;
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{learnyear.Id}</td>
                <td>{learnyear.Title}</td>
                <td>{learnyear.Note}</td>
                <td>
                    <Link
                        to={`/learnyear/${learnyear.Id}/edit`}
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
                               <span style={{ color: 'black' }}> Bạn chắc chắn muốn xóa  <b> {learnyear.Title}</b>  </span>
                            </MDBModalBody>
                            <MDBModalFooter>
                            <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
                            <MDBBtn color="primary" onClick={() => this.onDelete(learnyear.Id)}>Xóa</MDBBtn>
                            </MDBModalFooter>
                        </MDBModal>
                </button>
                </td>
            </tr>
        )
    }
}
 
export default LearnYearItem;
