import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class PointstudentList extends Component {
    render() {
        return (
            <div className="panel panel-primary">
            <div className="panel-heading d-flex justify-content-between">
                <h3 className="panel-title">Bảng Điểm</h3>
                <Link to="/pointstudent/add" className="btn btn-info mb-10">
                    Thêm 
                </Link>
            </div>
            <div className="panel-body">
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Mã</th>
                            <th>Tên Môn học</th>
                            <th>Tên Học sinh</th>
                            <th>Năm học</th>
                            <th>Điểm Kiểm tra lần 1</th>
                            <th>Điểm Kiểm tra lần 2</th>
                            <th>Điểm Giữa kì</th>
                            <th>Điểm Cuối kì</th>
                            <th>Điểm Thi</th>
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
