import React, { Component } from 'react'
import { actGetExportStudentRequest } from '../../actions/Student';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Reactexport from 'react-html-table-to-excel';
import moment from 'moment';
import { actGetAttendancesheetStudentRequset } from '../../actions/Attendancesheet';

class ExportStudentPonit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Id: '',
            Title: '',
            Learnclass:'',
            pointstudents: []
        };
    }

    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var Id = match.params.id;
            this.props.getExportStudentId(Id);
            this.props.getAttendancesheet(Id);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.itemEditing) {
            const { itemEditing } = nextProps;
            this.setState({
                Id: itemEditing[0] && itemEditing[0].Id,
                Title: itemEditing[0] && `${itemEditing[0].Frist_Name + " " + itemEditing[0].Last_Name}` ,
                Learnclass: itemEditing[0] && itemEditing[0].learnclass.Title,
                pointstudents: itemEditing[0] && itemEditing[0].pointstudents
            });
        }
    }

    showPointstudent = (pointstudent) => {
        let result = null;
       if (pointstudent) {
           result = pointstudent.map((pointstudent, index) => {
               return this.PointstudentRender(pointstudent, index);
           })
        }  
       return result;
   };
    
   PointstudentRender = (pointstudent, index) => {
       return (
           <tr key={pointstudent.Id}>
               <td>{index + 1}</td >
               <td>{pointstudent.PointKT1}</td>
               <td>{pointstudent.PointKT2}</td>
               <td>{pointstudent.PointGK}</td>
               <td>{pointstudent.PointCC}</td>
               <td>{pointstudent.PointT}</td>
               <td>{ pointstudent.subject.Title}</td>
               <td>{ pointstudent.subject.CreaditNumber}</td>
               <td>{ pointstudent.learnyear.Title}</td>
           </tr>
       );
   }

   showAttendancesheet = (attendancesheet) => {
    let result = null;
   if (attendancesheet) {
       result = attendancesheet.map((attendancesheet, index) => {
           return this.AttendancesheetRender(attendancesheet, index);
       })
    }  
   return result;
}; 
    AttendancesheetRender = (attendancesheet, index) => {
        return (
            <tr key={attendancesheet.Id}>
                <td>{index + 1}</td >
                <td>{attendancesheet.Times}</td>
                <td>{moment(attendancesheet.TimesDate).format('DD-MM-YYYY')}</td>
                <td>{attendancesheet.Note}</td>
                <td>{attendancesheet.subjectId !=null ? attendancesheet.subject.Title: ''}</td>
                <td>{attendancesheet.accountId !=null ?attendancesheet.account.UserName: '' }</td>
            </tr>
        );
    }

    render() {
        const { Id, Title, Learnclass, pointstudents } = this.state;
        const { attendancesheet } = this.props;
        return (
        <div className="container p-5 ">
            <div className="panel panel-primary">
                <div className="panel-heading d-flex justify-content-between">
                        <h3 className="panel-title">Thông tin của sinh viên: {Title} -- Lớp {Learnclass}</h3>
                        <div>
                        <Reactexport  
                            className="btn btn-info"  
                            table="point"  
                            filename={"Bảng điểm sinh viên" + Title}  
                                sheet="Sheet"
                                buttonText="Export">
                                <i class="fas fa-cloud-download-alt"></i>
                        </Reactexport>
                        <Link to="/studentlist" className="btn btn-danger mr-10">
                            Trở Lại
                        </Link>
            </div>
                </div>
                    <div className="panel-body">
                        <div className="row">
                            <h3> Danh sách điểm thi</h3>
                        <table className="table table-bordered table-hover" id="point">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Điểm kiểm tra lần 1</th>
                                    <th>Điểm kiểm tra lần 2</th>
                                    <th>Điểm Giữa kỳ</th>
                                    <th>Điểm cuối kỳ</th>
                                    <th>Điểm thi</th>
                                    <th>Tên môn</th>
                                    <th>Số tín</th>
                                    <th>Năm</th>
                                </tr>
                            </thead>
                            <tbody>
                                    {this.showPointstudent(pointstudents)}
                            </tbody>
                            </table>
                    </div>
                        <div className="row">
                            <h3> Thông tin điểm danh vắng</h3>
                        <table className="table table-bordered table-hover" id="point">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Số tiết</th>
                                    <th>Ngày vắng</th>
                                    <th>Ghi chú</th>
                                    <th>Môn vắng</th>
                                    <th>Giảng viên</th>
                                </tr>
                            </thead>
                            <tbody>
                                    {this.showAttendancesheet(attendancesheet)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
               
        </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        itemEditing: state.itemEditing,
        attendancesheet: state.attendancesheet,
    }
}


const mapDispatchToProps = (dispatch, props) => {
    return {
        getExportStudentId : (id) => {
            dispatch(actGetExportStudentRequest(id));
        },
        getAttendancesheet: (id) => {
            dispatch(actGetAttendancesheetStudentRequset(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExportStudentPonit);
