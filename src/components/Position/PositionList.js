import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 
class PositionList extends Component {
    render() { 
        return (
            <div className="panel panel-primary">
            <div className="panel-heading d-flex justify-content-between">
                <h3 className="panel-title">Danh Sách Chức vụ</h3>
                <Link to="/position/add" className="btn btn-info mb-10">
                    Thêm 
                </Link>
            </div>
            <div className="panel-body">
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Mã</th>
                            <th>Tên Chức Vụ</th>
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
 
export default PositionList;
