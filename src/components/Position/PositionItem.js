import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MDBModal, MDBModalBody, MDBModalFooter, MDBBtn, MDBModalHeader } from 'mdbreact';
 
class PositionItem extends Component {
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
        var { position, index } = this.props;
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{position.Title}</td>
                <td>{position.Note}</td>
                <td>
                    <Link
                        to={`/position/${position.Id}/edit`}
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
                                <span style={{ color: 'black' }}> Bạn chắc chắn muốn xóa  <b> {position.Title}</b>  </span>
                                </MDBModalBody>
                                <MDBModalFooter>
                                <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
                                <MDBBtn color="primary" onClick={() => this.onDelete(position.id)}>Xóa</MDBBtn>
                                </MDBModalFooter>
                            </MDBModal>
                </button>
                </td>
            </tr>
        );
    }
}
 
export default PositionItem;
