import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class SemesterList extends Component {
    render() {
        return (
            <div className="panel panel-primary">
            <div className="panel-heading d-flex justify-content-between">
                <h3 className="panel-title">Danh Sách học kỳ</h3>
                <Link to="/semester/add" className="btn btn-info mb-10">
                    Thêm 
                </Link>
            </div>
            <div className="panel-body">
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên học kỳ</th>
                            <th>Mã</th>
                            <th> Năm</th>
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
        )
    }
}
