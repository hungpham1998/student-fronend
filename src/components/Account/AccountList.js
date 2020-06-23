import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class AccountList extends Component {
    render() {
        return (
            <div className="panel panel-primary">
            <div className="panel-heading d-flex justify-content-between">
                    <h3 className="panel-title">Danh sách tài khoản </h3>
                    <Link to="/account/add" className="btn btn-info mb-10">
                        Thêm 
                    </Link>
            </div>
            <div className="panel-body">
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên người dùng </th>
                            <th>Tài khoản đăng nhập</th>
                            <th>Địa chỉ</th>
                            <th>Mail</th>
                            <th>Phòng ban</th>
                            <th>Chức vụ</th>
                            <th> quyền </th>
                            {/* <th>Chức Năng</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.children}
                    </tbody>
                </table>
            </div>
        </div>
        )
    }
}
