import React, { Component } from 'react'
import { connect } from 'react-redux';
import { actFetchLearnyearRequest } from '../../actions/Learnyear';
import { MDBRow, MDBCol } from 'mdbreact';
import { Link } from 'react-router-dom';
import { actAddSemesterRequest, actGetSemesterRequest, actUpdateSemesterRequest } from '../../actions/Semester';

class SemesterActionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Id: '',
            Title: '',
            Note: '',
            Code:'',
            learnyearId:''
        };
    }

    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var Id = match.params.id;
            this.props.onEditSemester(Id);
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.itemEditing){
            const { itemEditing } = nextProps;
            console.log(itemEditing)
            this.setState({
                Id : itemEditing.Id,
                Title :  itemEditing.Title,
                Note: itemEditing.Note,
                Code: itemEditing.Code,
                learnyearId: itemEditing.learnyearId
            });

            console.log(this.state)
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
        const { Id, Title, Note, learnyearId,Code } = this.state;
        var { history } = this.props;
        var semester = {
            Id : Id,
            Title : Title,
            Note: Note,
            Code:Code,
            learnyearId : learnyearId
        };
        if (Id) {
            this.props.onUpdateSemester(semester);

        } else {
            this.props.onAddSemester(semester);
        }
        history.goBack();
    }

    
    selectYear =  (data) => {
        let learnYear = this.props.learnyear.filter(item => item.Id === data.target.value);
        let year;
        let newCode = learnYear.map((item) => {
                if (this.state.Title === 'HK1' || this.state.Title === 'Hk1') {
                    return this.state.Title + `(${item.Title - 1} - ${item.Title})`;
                }
         
                if (this.state.Title === 'HK2' || this.state.Title === 'Hk2') {
                return this.state.Title + `(${item.Title} - ${ parseInt(item.Title) + 1})`;
                } 
            
                return this.state.Title;   
        });
         this.setState({
            learnyearId: data.target.value,
            Code: newCode[0]
        })
    }
    

    render() {
        const { Title, Note, learnyearId, Code} = this.state;
        const { learnyear } = this.props;
        return (
            <div className="container p-5">
                <form onSubmit={this.onSave}>
                    <MDBRow>
                        <MDBCol md="5" className="mb-5">
                            <label
                                htmlFor="defaultFormRegisterNameEx"
                                className="grey-text"
                            >
                                Tên năm:
                            </label>
                            <input
                                name="Title"
                                value={Title}
                                onChange={this.onChange}
                                type="text"
                                id="defaultFormRegisterNameEx"
                                className="form-control"
                                placeholder="First Title"
                                required
                            />
                        </MDBCol>
                        <MDBCol md="5" className="mb-5">
                            <label
                                htmlFor="RegisterNameEx1"
                                className="grey-text"
                            >
                                Tên năm:
                            </label>
                            <select
                                id="defaultForm6"
                                className="form-control"
                                onChange={this.selectYear}
                                required
                                value={learnyearId}
                            >
                                    <option value="">Chon</option>
                                    {(
                                        learnyear.map((item, index) => {
                                                return  <option value={item.Id}  key={index}> {item.Title} </option>
                                            })
                                    )}
                            </select> 
                        </MDBCol>
                    </MDBRow>    
                    <MDBRow>
                        <MDBCol md="5" className="mb-5">
                            <label
                                htmlFor="RegisterNameEx2"
                                className="grey-text"
                            >
                                Code:
                            </label>
                            <input
                                name="Code"
                                value={Code}
                                type="text"
                                id="RegisterNameEx2"
                                className="form-control"
                                placeholder=" Code"
                                required
                            />
                        </MDBCol>
                        <MDBCol md="5" className="mb-5">
                            <label
                                htmlFor="RegisterNameEx3"
                                className="grey-text"
                            >
                                Ghi Chú:
                            </label>
                            <input
                                name="Note"
                                value={Note}
                                onChange={this.onChange}
                                type="text"
                                id="RegisterNameEx3"
                                className="form-control"
                                placeholder="Note"
                                required
                            />
                        </MDBCol>
                    </MDBRow>
                    <Link to="/learnyearlist" className="btn btn-danger mr-10">
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
        learnyear: state.learnyear
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddSemester : (semester) => {
            dispatch(actAddSemesterRequest(semester));
        },
        onEditSemester : (id) => {
            dispatch(actGetSemesterRequest(id));
        },
        onUpdateSemester : (semester) => {
            dispatch(actUpdateSemesterRequest(semester));
        },
        fetchAllLearnyear : () => {
        dispatch(actFetchLearnyearRequest());
    },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SemesterActionPage);
