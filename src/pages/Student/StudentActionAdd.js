import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actFetchLearnclassRequest } from '../../actions/LearnClass';
import { actAddStudentRequest } from '../../actions/Student';

class StudentActionAdd extends Component {
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
            Address:''
        };
    }

    componentDidMount() {
        this.props.fetchAllLearnclass()
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
        var {  Code, Note, Image,Brithday,Last_Name, Frist_Name,learnclassId, Address} = this.state;
        var { history } = this.props;
        var student = {
            
            Last_Name: Last_Name,
            Frist_Name: Frist_Name,
            Brithday: Brithday,
            Image: Image,
            Code:Code,
            learnclassId: learnclassId,
            Note: Note,
            Address:Address
        };
       
            this.props.onAddStudent(student);
        
        history.goBack();
    }

    selectClass = (data) => {
        this.setState({
            learnclassId: data.target.value
        })
    }


    render() {
        const { Address, Note, Code, Image, Brithday, Last_Name, Frist_Name, } = this.state;
        const { learnclass } = this.props;
        return (
            <div className="container p-5">
                <form onSubmit={this.onSave}>
                    <div className="form-group row">
                        <div className="col">
                            <label >Ho: </label>
                            <input
                                type="text"
                                className="form-control"
                                name="Frist_Name"
                                value={Frist_Name}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="col">
                            <label>Tên: </label>
                            <input
                                type="text"
                                className="form-control row"
                                name="Last_Name"
                                value={Last_Name}
                                onChange={this.onChange}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col">
                            <label>Mã: </label>
                            <input
                                type="text"
                                className="form-control"
                                name="Code"
                                value={Code}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="col">
                            {/* <div className="form-control"> */}
                            <label>Ngày sinh: </label>
                            <input
                                type="date"
                                className="form-control input-append date form_datetime"
                                name="Brithday"
                                value={Brithday}
                                onChange={this.onChange}
                                />
                            {/* </div> */}
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col">
                            <label>Anh: </label>
                            <input
                                type="text"
                                className="form-control"
                                name="Image"
                                value={Image}
                                onChange={this.onChange}
                            />
                         </div>
                        <div className="col">
                            <label> Lớp: </label>
                            <select className="form-control custom-select custom-select-sm" onChange={this.selectClass}
                             >
                                {  (
                                    learnclass.map((item, index) => {
                                            return  <option value={item.Id}  key={index} >{item.Title}</option>
                                        })
                                ) 
                                }
                                </select> 
                        </div>
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
                        <label>Địa chỉ: </label>
                        <input
                            type="text"
                            className="form-control"
                            name="Address"
                            value={Address}
                            onChange={this.onChange}
                        /> 
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
      //  itemEditing : state.itemEditing,
        learnclass: state.learnclass
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onAddStudent : (student) => {
            dispatch(actAddStudentRequest(student));
        },
        // onEditStudent : (id) => {
        //     dispatch(actGetStudentRequest(id));
        // },
        // onUpdateStudent : (student) => {
        //     dispatch(actUpdateStudentRequest(student));
        // },
        fetchAllLearnclass : () => {
            dispatch(actFetchLearnclassRequest());
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentActionAdd);
