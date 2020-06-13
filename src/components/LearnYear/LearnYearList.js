import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 
class LearnYearList extends Component {
    render() { 
        return (
            <div className="panel panel-primary">
            <div className="panel-heading d-flex justify-content-between">
                <h3 className="panel-title">Danh Sách Năm Học</h3>
                <Link to="/learnyear/add" className="btn btn-info mb-10">
                    Thêm 
                </Link>
            </div>
            <div className="panel-body">
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Mã</th>
                            <th>Tên Năm học</th>
                            <th>Note</th>
                            <th>Chức Năng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.children}
                    </tbody>
                </table>
            </div>
        </div>
        );
    }
}
 
export default LearnYearList;
