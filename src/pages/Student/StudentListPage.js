import React, { Component } from 'react'
import { actDeleteStudentRequest, actFetchStudentRequest } from '../../actions/Student';
import StudentList from '../../components/Student/StudentList';
import { Link } from 'react-router-dom';
import StudentItem from '../../components/Student/StudentItem';
import { connect } from 'react-redux';

class StudentListPage extends Component {
     
    constructor(props) {
        super(props)
        this.state = {
           
        }
    }

    componentDidMount() {
        this.props.fetchAllStudent();
    }

    onDelete = (Id) => {
        this.props.onDeleteStudent(Id);
    }


    render() {
        const { student } = this.props;
        return (
            <div className="container">
            <div className="row">
                <div className="col-sm-8">
                </div>
                <div className="col-sm-4">
                    <Link to="/student/add" className="btn btn-info mb-10">
                        Thêm 
                    </Link>
            </div>
            </div>

            <StudentList>
                {this.showStudent(student)}
            </StudentList>
            </div>
        )
    };

    showStudent(student) {
        var result = null;
        if (student) {
        result = student.map((student, index) => {
            return (
                <StudentItem
                    key={index}
                    student={student}
                    index={index}
                    onDelete={()=>this.onDelete(student.Id)}
                />
            );
    });
}
return result;
}

}

const mapStateToProps = state => {
    return {
        student: state.student
    }
}



const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllStudent : () => {
            dispatch(actFetchStudentRequest());
        },
        onDeleteStudent : (id) => {
            dispatch(actDeleteStudentRequest(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentListPage);
