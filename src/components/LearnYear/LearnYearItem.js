import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 
class LearnYearItem extends Component {
    
    onDelete = (id) => {
   
        this.props.onDelete(id);
}

    render() {
        var { learnyear, index } = this.props;
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{learnyear.Id}</td>
                <td>{learnyear.Title}</td>
                <td>{learnyear.Note}</td>
                <td>
                    <Link
                        to={`/learnyear/${learnyear.Id}/edit`}
                        className="btn btn-success mr-10"
                    >
                        Sửa
                </Link>
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => this.onDelete(learnyear.id)}
                    >
                        Xóa
                </button>
                </td>
            </tr>
        )
    }
}
 
export default LearnYearItem;
