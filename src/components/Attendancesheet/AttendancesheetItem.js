import React, { Component } from 'react'
import { MDBModal, MDBModalHeader, MDBModalFooter, MDBBtn, MDBModalBody } from 'mdbreact';
import { Link } from 'react-router-dom';
import moment from 'moment';
export default class AttendancesheetItem extends Component {
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
        var { attendancesheet, index } = this.props;

        return (
            <tr>
                <td>{index + 1}</td>
                <td>{attendancesheet.Times}</td>
                <td>{moment(attendancesheet.TimesDate).format("DD/MM/YYYY")}</td>
                <td>{attendancesheet.Note}</td>
                <td>{attendancesheet.subjectId ? attendancesheet.subject.Title :''}</td>
                <td>{attendancesheet.studentId  ? attendancesheet.student.Frist_Name + ' ' +attendancesheet.student.Last_Name :' '}</td>
                <td>{attendancesheet.accountId  ? attendancesheet.account.UserName : ''}</td>
                <td>
                    <Link
                        to={`/attendancesheet/${attendancesheet.Id}/edit`}
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
                                <span style={{ color: 'black' }}> Bạn chắc chắn muốn xóa phiếu <b> {attendancesheet.Id}</b>  </span>
                                </MDBModalBody>
                                <MDBModalFooter>
                                <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
                                <MDBBtn color="primary" onClick={() => this.onDelete(attendancesheet.id)}>Xóa</MDBBtn>
                                </MDBModalFooter>
                            </MDBModal>
                </button>
                </td>
            </tr>
        );
    }
}
