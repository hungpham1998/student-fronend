import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 
class PositionItem extends Component {
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
                        className="btn btn-success mr-10"
                    >
                        Sửa
                </Link>
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => this.onDelete(position.id)}
                    >
                        Xóa
                </button>
                </td>
            </tr>
        );
    }
}
 
export default PositionItem;
