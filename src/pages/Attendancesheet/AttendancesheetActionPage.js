import React, { Component } from 'react'
import { MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actAddAttendancesheetRequest, actGetAttendancesheetRequest, actUpdateAttendancesheetRequest } from '../../actions/Attendancesheet';
import { actFetchAccountRequest } from '../../actions/Accountaction';
import { actFetchSubjectRequest } from '../../actions/Subject';
import { actFetchStudentRequest } from '../../actions/Student';


class AttendancesheetAcctionPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Id:'',
            Times: '',
            TimesDate: '',
            Note: '',
            accountId: '',
            subjectId: '',
            studentId: '',
        };
    }

    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var Id = match.params.id;
            this.props.onEditAttendancesheet(Id);
        }
        this.props.fetchAllAccount();
        this.props.fetchAllSubject();
        this.props.fetchAllStudent();
    }

    componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.itemEditing){
            var { itemEditing } = nextProps;
            console.log(itemEditing)
            this.setState({
                Id: itemEditing.length> 0 ? itemEditing[0].Id : '',
                Times: itemEditing.length> 0 ? itemEditing[0].Times : '',
                TimesDate:itemEditing.length> 0 ? itemEditing[0].TimesDate: ' ',
                accountId: itemEditing.length> 0 ? itemEditing[0].accountId: ' ',
                Note: itemEditing.length> 0 ? itemEditing[0].Note:' ',
                subjectId: itemEditing.length> 0 ?  itemEditing[0].subjectId:'',
                studentId: itemEditing.length> 0 ? itemEditing[0].studentId: '',
            });
        }
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
    }

    onSave = (e) => {
        e.preventDefault();
        const { Id, Times, TimesDate, Note,accountId, subjectId, studentId} = this.state;
        const { history } = this.props;
        var attendencesheet = {
            Id: Id,
            Times: Times,
            TimesDate: TimesDate,
            Note: Note,
            accountId: accountId,
            subjectId: subjectId,
            studentId: studentId,
        };
        console.log(Id)
        if (Id.length > 0) {
            this.props.onUpdateAttendancesheet(attendencesheet)
        }
        else {
            this.props.onAddAttendancesheet(attendencesheet);
        }
        history.goBack();
    }

    
    selectAccount = (data) => {
        this.setState({
            accountId: data.target.value
        })
    }

    selectSubject = (data) => {
        this.setState({
            subjectId: data.target.value
        })
    }

    selectStudent = (data) => {
        this.setState({
            studentId: data.target.value
        })
    }


    render() {
        const { Id, Times, TimesDate, Note, accountId, subjectId, studentId } = this.state;
        const { student, subject, account } = this.props;
            return (
                <div className="container p-5">
                    <form onSubmit={this.onSave}>
                    <MDBRow>
                        <MDBCol md="4" className="mb-3">
                            <label
                                htmlFor="defaultForm"
                                className="grey-text"
                            >
                                Số tiết
                            </label>
                            <input
                                name="Times"
                                value={Times}
                                onChange={this.onChange}
                                type="number"
                                id="defaultForm"
                                className="form-control"
                                placeholder=" Times"
                                required
                            />
                        </MDBCol>
                        <MDBCol md="4" className="mb-3">
                            <label
                                htmlFor="defaultForm2"
                                className="grey-text"
                            >
                                Ngày :
                            </label>
                            <input
                                name="TimesDate"
                                value={TimesDate}
                                onChange={this.onChange}
                                type="Date"
                                id="defaultForm2"
                                className="form-control"
                                placeholder="TimesDate"
                                required
                            />
                        </MDBCol>
                        <MDBCol md="4" className="mb-3">
                            <label
                                htmlFor="defaultForm3"
                                className="grey-text"
                            >
                                Ghi chú:
                            </label>
                            <input
                                name="Note"
                                value={Note}
                                onChange={this.onChange}
                                type="text"
                                id="defaultForm3"
                                className="form-control"
                                placeholder="Note"
                                required
                            />
                        </MDBCol>
                    </MDBRow>
         
                    <MDBRow>
                        <MDBCol md="4" className="mb-3">
                            <label
                                htmlFor="defaultForm7"
                                className="grey-text"
                            >
                                Giảng viên :
                            </label>
                            <select id="defaultForm7"
                                    className="form-control"
                                    onChange={this.selectAccount}
                                    value={accountId}
                                    required>
                                    {  (
                                        account.map((item, index) => {
                                                return  <option value={item.Id}  key={index} >{item.UserName}</option>
                                            })
                                    ) 
                                    }
                            </select> 
                        </MDBCol>
                        <MDBCol md="4" className="mb-3">
                            <label
                                htmlFor="defaultForm8"
                                className="grey-text"
                            >
                                Môn học :
                            </label>
                            <select id="defaultForm8"
                                    className="form-control"
                                    onChange={this.selectSubject}
                                    value={subjectId}
                                    required>
                                    {  (
                                        subject.map((item, index) => {
                                                return  <option value={item.Id}  key={index} >{item.Title}</option>
                                            })
                                    ) 
                                    }
                            </select> 
                        </MDBCol>
                        <MDBCol md="4" className="mb-3">
                            <label
                                htmlFor="defaultForm9"
                                className="grey-text"
                            >
                                Học sinh :
                            </label>
                            <select id="defaultForm9"
                                    className="form-control"
                                    onChange={this.selectStudent}
                                    value={studentId}
                                    required>
                                    {  (
                                        student.map((item, index) => {
                                                return  <option value={item.Id}  key={index} >{item.Frist_Name + ' ' + item.Last_Name}</option>
                                            })
                                    ) 
                                    }
                            </select> 
                            </MDBCol>
                    </MDBRow>

                    <MDBBtn color="primary" type="submit">
                        Lưu Lại
                    </MDBBtn>
                    <Link to="/attendancesheetlist" className="btn btn-danger mr-10">
                        Trở Lại
                    </Link>
                    </form>
    
                </div>
        )
    }
}



const mapStateToProps = state => {
    return {
        itemEditing : state.itemEditing,
        student: state.student,
        subject: state.subject,
        account: state.account
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddAttendancesheet : (attendancesheet) => {
            dispatch(actAddAttendancesheetRequest(attendancesheet));
        },
        onEditAttendancesheet : (id) => {
            dispatch(actGetAttendancesheetRequest(id));
        },
        onUpdateAttendancesheet : (attendancesheet) => {
            dispatch(actUpdateAttendancesheetRequest(attendancesheet));
        },
        fetchAllAccount : () => {
            dispatch(actFetchAccountRequest());
        },
        fetchAllSubject : () => {
            dispatch(actFetchSubjectRequest());
        },
        fetchAllStudent : () => {
            dispatch(actFetchStudentRequest());
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AttendancesheetAcctionPage);
