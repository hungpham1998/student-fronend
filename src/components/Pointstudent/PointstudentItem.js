import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { MDBModal, MDBModalBody, MDBModalFooter, MDBBtn, MDBModalHeader } from 'mdbreact';
import { Modal, ModalHeader, ModalFooter } from 'reactstrap';
 
export default class PointstudentItem extends Component {
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
    onDelete = (id) => {
   
        this.props.onDelete(id);
    }

    render() {
        var { pointstudent, index } = this.props;
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{pointstudent.subjectId != null ?pointstudent.subject.Title: ''}</td>
                <td> {pointstudent.studentId != null ?pointstudent.student.Frist_Name + " " + pointstudent.student.Last_Name: ''}</td>
                <td>{pointstudent.learnyearId != null ? pointstudent.learnyear.Title : ''}</td>
                <td>{pointstudent.PointKT1}</td>
                <td>{pointstudent.PointKT2}</td>
                <td>{pointstudent.PointGK}</td>
                <td>{pointstudent.PointCC}</td>
                <td>{pointstudent.PointT}</td>
                <td>
                <button className="btn-default btn Ripple-parent" onClick={this.showModal}> chức năng
                <Modal isOpen={this.state.showView} toggle={this.showModal} >
                    <ModalHeader toggle={this.showModal}>
                        <b style={{ color: 'black' }}> Bạn chọn chức năng với sinh viên {pointstudent.student.Frist_Name + " " + pointstudent.student.Last_Name}</b>
                    </ModalHeader>
                    <ModalFooter>
                        <Link
                            to={`/pointstudent/${pointstudent.Id}/edit`}
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
                                    <span style={{ color: 'black' }}> Bạn chắc chắn muốn xóa bảng điểm <b> {pointstudent.Id}</b>  </span>
                                    </MDBModalBody>
                                    <MDBModalFooter>
                                    <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
                                    <MDBBtn color="primary" onClick={() => this.onDelete(pointstudent.id)}>Xóa</MDBBtn>
                                    </MDBModalFooter>
                                </MDBModal>
                        </button>
                        <button onClick={this.showModal} className="btn btn-secondary" > đóng </button>
                    </ModalFooter>
                </Modal>
                </button>
                </td>
            </tr>
        );
    }
}
