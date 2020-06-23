import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class SubjectItem extends Component {
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
                        className="btn btn-success mr-10"
                    >
                        Sửa
                </Link>
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => this.onDelete(subject.id)}
                    >
                        Xóa
                </button>
                </td>
            </tr>
        )
    }
}
 
export default SubjectItem;
