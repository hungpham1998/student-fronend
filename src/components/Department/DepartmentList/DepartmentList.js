import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DepartmentList extends Component {
    render() {
        return (
            <div className="panel panel-primary">
                <div className="panel-heading d-flex justify-content-between">
                    <h3 className="panel-title">Danh Sách Phòng Ban</h3>
                    <Link to="/department/add" className="btn btn-info mb-10">
                        Thêm 
                    </Link>
                </div>
                <div className="panel-body">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Mã</th>
                                <th>Tên Phòng Ban</th>
                                <th>Note</th>
                                <th>Phòng Ban Cha</th>
                                <th>Chức Năng</th>
                            </tr>
                        </thead>
                        <tbody >
                            {this.props.children}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default DepartmentList;
