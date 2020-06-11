import React, { Component } from 'react'

export default class SpecailizedList extends Component {
    render() {
        return (
            <div className="panel panel-primary">
            <div className="panel-heading">
                <h3 className="panel-title">Danh Sách Lớp học</h3>
            </div>
            <div className="panel-body">
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Mã</th>
                            <th>Code</th>
                            <th>Tên Khoa</th>
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
