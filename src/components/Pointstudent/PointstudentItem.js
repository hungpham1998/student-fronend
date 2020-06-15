import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class PointstudentItem extends Component {
    onDelete = (id) => {
   
        this.props.onDelete(id);
    }

    render() {
        var { pointstudent, index } = this.props;
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{pointstudent.Id}</td>
                <td>{pointstudent.subjectId != null ?pointstudent.subject.Title: ''}</td>
                <td> {pointstudent.studentId != null ?pointstudent.student.Frist_Name + " " + pointstudent.student.Last_Name: ''}</td>
                <td>{pointstudent.learnyearId != null ? pointstudent.learnyear.Title : ''}</td>
                <td>{pointstudent.PointKT1}</td>
                <td>{pointstudent.PointKT2}</td>
                <td>{pointstudent.PointGK}</td>
                <td>{pointstudent.PointCC}</td>
                <td>{pointstudent.PointT}</td>
                <td>
                    <Link
                        to={`/pointstudent/${pointstudent.Id}/edit`}
                        className="btn btn-success mr-10"
                    >
                        Sửa
                </Link>
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => this.onDelete(pointstudent.id)}
                    >
                        Xóa
                </button>
                </td>
            </tr>
        );
    }
}
