import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actFetchLearnclassRequest } from '../../actions/LearnClass';
import { actUpdateStudentRequest, actGetStudentRequest, actAddStudentRequest } from '../../actions/Student';

class StudentActionEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Id: '',
            Last_Name: '',
            Frist_Name: '',
            Brithday: '',
            Image: '',
            Code:'',
            learnclassId:'',
            Note: '',
        };
    }

    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var Id = match.params.id;
            this.props.onEditStudent(Id);
        }

        this.props.fetchAllLearnclass()

    }

    componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.itemEditing){
            var { itemEditing } = nextProps;
            this.setState({
                Id: itemEditing[0].Id,
                Last_Name: itemEditing[0].Last_Name,
                Frist_Name: itemEditing[0].Frist_Name,
                Code: itemEditing[0].Code,
                Image: itemEditing[0].Image,
                Brithday: itemEditing[0].Brithday,
                Note: itemEditing[0].Note,
                learnclassId: itemEditing[0].learnclassId
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
        var { Id, Code, Note, Image,Brithday,Last_Name, Frist_Name,learnclassId } = this.state;
        var { history } = this.props;
        var student = {
            Id : Id,
            Last_Name: Last_Name,
            Frist_Name: Frist_Name,
            Brithday: Brithday,
            Image: Image,
            Code:Code,
            learnclassId: learnclassId,
            Note: Note,
        };
        if (Id) {
            this.props.onUpdateStudent(student);

        } 
        history.goBack();
    }

    // selectClass = (data) => {
    //     this.setState({
    //         learnclassId: data.target.value
    //     })
    // }


    render() {
        const { Address, Note, Code, Image, Brithday, Last_Name, Frist_Name, learnclassId } = this.state;
        const { learnclass } = this.props;
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <form onSubmit={this.onSave}>
                    <div className="form-group">
                        <label>Ho: </label>
                        <input
                            type="text"
                            className="form-control"
                            name="Frist_Name"
                            value={Frist_Name}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Tên: </label>
                        <input
                            type="text"
                            className="form-control"
                            name="Last_Name"
                            value={Last_Name}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Mã: </label>
                        <input
                            type="text"
                            className="form-control"
                            name="Code"
                            value={Code}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Ngày sinh: </label>
                        <input
                            type="date"
                            className="input-append date form_datetime"
                            name="Brithday"
                            value={Brithday}
                            onChange={this.onChange}
                            readonly
                        />
                    </div>
                    <div className="form-group">
                        <label>Anh: </label>
                        <input
                            type="text"
                            className="form-control"
                            name="Image"
                            value={Image}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Địa chỉ: </label>
                        <input
                            type="text"
                            className="form-control"
                            name="Address"
                            value={Address}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Ghi Chú: </label>
                        <input
                            className="form-control"
                            name="Note"
                            value={Note}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label> Lớp: </label>
                        <select className="custom-select custom-select-sm" onChange={(e)=>this.setState({learnclassId: e.target.value})}
                            defaultValue={{
                                label: learnclass.filter((item) => {
                                        if (item.Id === learnclassId) {
                                        
                                }
                                }),
                                value: learnclassId
                        }}>
                            {  (
                                learnclass.map((item, index) => {
                                        return  <option value={item.Id}  key={index} >{item.Title}</option>
                                    })
                            ) 
                            }
                            </select>  
                    </div>
                    <Link to="/studentlist" className="btn btn-danger mr-10">
                        Trở Lại
                    </Link>
                    <button type="submit" className="btn btn-primary">Lưu Lại</button>
                </form>

            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        itemEditing : state.itemEditing,
        learnclass: state.learnclass
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onAddStudent : (student) => {
            dispatch(actAddStudentRequest(student));
        },
        onEditStudent : (id) => {
            dispatch(actGetStudentRequest(id));
        },
        onUpdateStudent : (student) => {
            dispatch(actUpdateStudentRequest(student));
        },
        fetchAllLearnclass : () => {
            dispatch(actFetchLearnclassRequest());
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentActionEdit);
