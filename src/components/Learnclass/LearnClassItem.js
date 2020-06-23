import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { MDBModal, MDBModalHeader, MDBModalBody, MDBBtn, MDBModalFooter } from 'mdbreact';

class LearnClassItem extends Component {
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
        var { learnclass, index } = this.props;
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{learnclass.Title}</td>
                <td> {learnclass.specailizedId != null ?learnclass.specailized.Title: ''}</td>
                <td>{learnclass.Note}</td>
                <td>
                    <Link
                        to={`/learnclass/${learnclass.Id}/edit`}
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
                                <span style={{ color: 'black' }}> Bạn chắc chắn muốn xóa  <b> {learnclass.Title}</b>  </span>
                                </MDBModalBody>
                                <MDBModalFooter>
                                <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
                                <MDBBtn color="primary" onClick={() => this.onDelete(learnclass.Id)}>Xóa</MDBBtn>
                                </MDBModalFooter>
                        </MDBModal>
                </button>
                <Link className="btn btn-green accent-3" to={`/learnclass/${learnclass.Id}/export`}>Export</Link>
                </td>
            </tr>
        );
    }
}

export default LearnClassItem
