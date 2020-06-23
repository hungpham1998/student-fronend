import React, { Component } from 'react'
import { connect } from 'react-redux';
import AttendancesheetItem from '../../components/Attendancesheet/AttendancesheetItem';
import AttendancesheetList from '../../components/Attendancesheet/AttendancesheetList';
import { actFetchAttendancesheetRequest, actDeleteAttendancesheetRequest } from '../../actions/Attendancesheet';

class AttendancesheetListPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
           
        }
    }

    componentDidMount() {
        this.props.fetchAllAttendancesheet();
    }

    onDelete = (Id) => {
        this.props.onDeleteAttendancesheet(Id);
    }


    render() {
        const { attendancesheet } = this.props;
        return (
            <div className="container p-4">
            {/* // <div className="row">
            //     <div className="col-sm-8">
            //     </div>
            // </div> */}

            <AttendancesheetList>
                {this.showAttendancesheet(attendancesheet)}
            </AttendancesheetList>
            </div>
        )
    };

    showAttendancesheet(attendancesheet) {
        var result = null;
        if (attendancesheet) {
        result = attendancesheet.map((attendancesheet, index) => {
            return (
                <AttendancesheetItem
                    key={index}
                    attendancesheet={attendancesheet}
                    index={index}
                    onDelete={()=>this.onDelete(attendancesheet.Id)}
                />
            );
            });
        }
        return result;
    }

}

const mapStateToProps = state => {
    return {
        attendancesheet: state.attendancesheet
    }
}



const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllAttendancesheet : () => {
            dispatch(actFetchAttendancesheetRequest());
        },
        onDeleteAttendancesheet : (id) => {
            dispatch(actDeleteAttendancesheetRequest(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AttendancesheetListPage);
