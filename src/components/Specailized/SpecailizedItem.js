import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class SpecailizedItem extends Component {
    onDelete = (id) => {
   
        this.props.onDelete(id);
    }

    render() {
        var { specailized, index } = this.props;
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{specailized.Id}</td>
                <td>{specailized.Code}</td>
                <td>{specailized.Title}</td>
                <td>{specailized.Note}</td>
                <td>
                    <Link
                        to={`/specailized/${specailized.Id}/edit`}
                        className="btn btn-success mr-10"
                    >
                        Sửa
                </Link>
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => this.onDelete(specailized.id)}
                    >
                        Xóa
                </button>
                </td>
            </tr>
        );
    }
};
