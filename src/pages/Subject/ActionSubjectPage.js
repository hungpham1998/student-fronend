import React, { Component } from 'react';
import { actUpdateSubjectRequest, actGetSubjectRequest, actAddSubjectRequest } from '../../actions/Subject';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actFetchSemesterRequest } from '../../actions/Semester';
 
class ActionSubjectPage extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            Id: '',
            Title: '',
            Note: '',
            Code: '',
            CreaditNumber: '',
            semesterId:' '
        };
    }

    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var Id = match.params.id;
            this.props.onEditSubject(Id);
        }
        this.props.fetchAllSemester()
    }

    componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.itemEditing){
            const { itemEditing } = nextProps;
            console.log(itemEditing)
            if (itemEditing) {
                this.setState({
                    Id :itemEditing[0] && itemEditing[0].Id,
                    Title : itemEditing[0] && itemEditing[0].Title,
                    Note: itemEditing[0] && itemEditing[0].Note,
                    Code: itemEditing[0] && itemEditing[0].Code,
                    CreaditNumber:itemEditing[0] &&  itemEditing[0].CreaditNumber,
                    semesterId:itemEditing[0] && itemEditing[0].semesterId
                });
            }
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
        const { Id, Title, Note, Code, CreaditNumber, semesterId } = this.state;
        var { history } = this.props;
        var subject = {
            Id : Id,
            Title : Title,
            Note : Note,
            Code: Code,
            CreaditNumber: CreaditNumber,
            semesterId: semesterId
        };
        if (Id) {
            this.props.onUpdateSubject(subject);

        } else {
            this.props.onAddSubject(subject);
        }
        history.goBack();
    }

    selectSemester = (data) => {
        this.setState({
            semesterId: data.target.value
        })
    }

    render() {
        const { Title, Note, Code, CreaditNumber ,semesterId } = this.state;
        const { semester } = this.props;
        return (
            <div className="container p-5">
                <form onSubmit={this.onSave}>
                    <div className="form-group row">
                        <div className="col">
                            <label>Tên Môn học: </label>
                            <input
                                type="text"
                                className="form-control"
                                name="Title"
                                value={Title}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="col">
                            <label className="">Mã Môn: </label>
                            <input
                                type="text"
                                className="form-control"
                                name="Code"
                                value={Code}
                                onChange={this.onChange}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col">
                            <label >Học kỳ: </label>
                            <select className="form-control custom-select custom-select-sm" onChange={this.selectSemester}
                                 value={semesterId} 
                            >
                                {  (
                                    semester.map((item, index) => {
                                            return  <option value={item.Id}  key={index} >{item.Code}</option>
                                        })
                                    ) 
                                }
                            </select> 
                        </div>
                        <div className="col">
                            <label >Số tín: </label>
                            <input
                                className="form-control"
                                type="number"
                                name="CreaditNumber"
                                value={CreaditNumber}
                                onChange={this.onChange}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col">
                            <label >Ghi Chú: </label>
                            <input
                                className="form-control"
                                name="Note"
                                value={Note}
                                onChange={this.onChange}
                            />
                        </div>
                    </div>
                    <Link to="/subjectlist" className="btn btn-danger mr-10">
                        Trở Lại
                    </Link>
                    <button type="submit" className="btn btn-primary">Lưu Lại</button>
                </form>

            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        itemEditing: state.itemEditing,
        semester: state.semester
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddSubject : (subject) => {
            dispatch(actAddSubjectRequest(subject));
        },
        onEditSubject : (id) => {
            dispatch(actGetSubjectRequest(id));
        },
        onUpdateSubject : (subject) => {
            dispatch(actUpdateSubjectRequest(subject));
        },
        fetchAllSemester : () => {
            dispatch(actFetchSemesterRequest());
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActionSubjectPage);
