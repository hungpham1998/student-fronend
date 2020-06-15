import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {  actGetLearnclassRequest } from '../../actions/LearnClass';
import { connect } from 'react-redux';
import { moment } from 'moment';
import Reactexport from 'react-html-table-to-excel';

class StudentLearnClass extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Id: '',
            Title: '',
            students: []
        };
    }

    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var Id = match.params.id;
            this.props.getLearnclassId(Id);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.itemEditing) {
            const { itemEditing } = nextProps;
            this.setState({
                Id: itemEditing[0].Id,
                Title: itemEditing[0].Title,
                students: itemEditing[0].students
            });
        }
    }


     showStudent = (student) => {
         let result = null;
        if (student) {
            result = student.map((student, index) => {
                return this.studentRender(student, index);
            })
         }  
        return result;
    };
     
    studentRender = (student, index) => {
        return (
            <tr key={student.Id}>
                <td >{index + 1}</td >
                <td>{student.Id}</td>
                <td>{student.Code}</td>
                <td>{student.Frist_Name + " " + student.Last_Name}</td>
                <td> {student.Brithday ? moment(student.Brithday).format("DD/MM/YYYY"): null}</td>
                <td> {student.Address}</td>
            </tr>
        );
    }

    render() {
        const {  Title, dataExport, students } = this.state;
        return (
            <div className="container p-5 ">
               <div className="panel panel-primary">
                <div className="panel-heading d-flex justify-content-between">
                        <h3 className="panel-title">Danh sách sinh viên lớp: {Title}</h3>
                </div>
                <div className="panel-body">
                    <table className="table table-bordered table-hover" id="emp">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Mã</th>
                                <th>Code</th>
                                <th>Tên Học sinh</th>
                                <th>Ngày sinh</th>
                                <th>Địa chỉ</th>
                            </tr>
                        </thead>
                        <tbody>
                               {this.showStudent(students)}
                        </tbody>
                    </table>
                </div>
                </div>
                <div>
                    <Link to="/learnclasslist" className="btn btn-danger mr-10">
                        Trở Lại
                    </Link>
                    <Reactexport  
                        className="btn btn-info"  
                        table="emp"  
                        filename={"Lớp học " + Title}  
                        sheet="Sheet" > Export excel
                    </Reactexport> 
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        itemEditing: state.itemEditing,
    }
}


const mapDispatchToProps = (dispatch, props) => {
    return {
        getLearnclassId : (id) => {
            dispatch(actGetLearnclassRequest(id));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentLearnClass);
