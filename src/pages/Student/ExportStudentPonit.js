import React, { Component } from 'react'
import { actGetExportStudentRequest } from '../../actions/Student';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Reactexport from 'react-html-table-to-excel';

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
               <td>{pointstudent.Id}</td>
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


    render() {
        const { Id, Title, Learnclass,pointstudents  } = this.state;
        return (
        <div className="container p-5 ">
            <div className="panel panel-primary">
                <div className="panel-heading d-flex justify-content-between">
                    <h3 className="panel-title">Bảng điểm sinh viên: {Title} -- Lớp {Learnclass}</h3>
                </div>
                <div className="panel-body">
                    <table className="table table-bordered table-hover" id="point">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Mã</th>
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
            </div>
            <div>
                <Link to="/studentlist" className="btn btn-danger mr-10">
                    Trở Lại
                </Link>
                <Reactexport  
                    className="btn btn-info"  
                    table="point"  
                    filename={"Bảng điểm sinh viên" + Title}  
                        sheet="Sheet"
                        buttonText="Export">
                </Reactexport>
            </div>
        </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        itemEditing: state.itemEditing,
    }
}


const mapDispatchToProps = (dispatch, props) => {
    return {
        getExportStudentId : (id) => {
            dispatch(actGetExportStudentRequest(id));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExportStudentPonit);
