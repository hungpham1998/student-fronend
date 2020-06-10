import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class LearnClassItem extends Component {
    onDelete = (id) => {
   
        this.props.onDelete(id);
    }

    render() {
        var { learnclass, index } = this.props;
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{learnclass.Id}</td>
                <td>{learnclass.Title}</td>
                <td>{learnclass.Note}</td>
                {/* <td> {learnclass}</td> */}
                <td>
                    <Link
                        to={`/learnclass/${learnclass.Id}/edit`}
                        className="btn btn-success mr-10"
                    >
                        Sửa
                </Link>
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => this.onDelete(learnclass.id)}
                    >
                        Xóa
                </button>
                </td>
            </tr>
        );
    }
}

export default LearnClassItem
