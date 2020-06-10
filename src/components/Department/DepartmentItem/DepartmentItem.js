import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DepartmentItem extends Component {

    onDelete = (id) => {
   
            this.props.onDelete(id);
    }

    render() {
        var { department, index } = this.props;
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{department.Id}</td>
                <td>{department.Title}</td>
                <td>{department.Note}</td>
                <td> {department.IdPartment}</td>
                <td>
                    <Link
                        to={`/department/${department.Id}/edit`}
                        className="btn btn-success mr-10"
                    >
                        Sửa
                    </Link>
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => this.onDelete(department.id)}
                    >
                        Xóa
                    </button>
                </td>
            </tr>
        );
    }
}

export default DepartmentItem;
