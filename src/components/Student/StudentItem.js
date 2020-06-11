import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment';

export default class StudentItem extends Component {
    onDelete = (id) => {
   
        this.props.onDelete(id);
    }

    render() {
        var { student, index } = this.props;
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{student.Id}</td>
                <td>{student.Code}</td>
                <td>{student.Last_Name}</td>
                <td>{student.Frist_Name}</td>
                <td> {moment(student.Brithday).format("DD/MM/YYYY")}</td>
                <td> {student.Address }</td>
                <td> {student.Image}</td>
                <td> { student.learnclass != null ? student.learnclass.Title:''}</td>
                <td>
                    <Link
                        to={`/student/${student.Id}/edit`}
                        className="btn btn-success mr-10"
                    >
                        Sửa
                </Link>
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => this.onDelete(student.id)}
                    >
                        Xóa
                </button>
                </td>
            </tr>
        );
    }
}
