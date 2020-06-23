import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class AttendancesheetList extends Component {
    render() {
        return (
            <div className="panel panel-primary">
            <div className="panel-heading d-flex justify-content-between">
                    <h3 className="panel-title">Danh điểm danh </h3>
                    <Link to="/attendancesheet/add" className="btn btn-info mb-10">
                        Thêm 
                    </Link>
            </div>
            <div className="panel-body">
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Số tiết vắng </th>
                            <th>Ngày điểm danh</th>
                            <th>Ghi chú</th>
                            <th>Môn học</th>
                            <th>Tên học sinh </th>
                            <th>Giảng viên</th>
                            <th>Chức Năng</th>
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
