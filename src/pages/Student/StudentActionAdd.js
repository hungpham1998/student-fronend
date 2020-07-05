import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actFetchLearnclassRequest } from '../../actions/LearnClass';
import { actAddStudentRequest } from '../../actions/Student';
import { MDBRow, MDBCol } from 'mdbreact';
import ImageUploader from 'react-images-upload';
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

        const data = new FormData()
        data.append('Last_Name', Last_Name)
        data.append('Frist_Name', Frist_Name)
        data.append('Brithday', Brithday)
        data.append('Code', Code)
        data.append('learnclassId', learnclassId)
        data.append('Image', Image[0])
        data.append('Address', Address)
        data.append('Note', Note)
         console.log(data)
       
        this.props.onAddStudent(data);
        history.goBack();
    }

    selectClass = (data) => {
        this.setState({
            learnclassId: data.target.value
        })
    }


    onDrop=(picture)=> {
        this.setState({
            Image: picture
        });
    }

    render() {
        const { Address, Note, Code, Image, Brithday, Last_Name, Frist_Name, } = this.state;
        const { learnclass } = this.props;
        return (
            <div className="container p-5">
                <form onSubmit={this.onSave}>
                <MDBRow>
                        <MDBCol md="4" className="mb-3">
                            <label
                                htmlFor="defaultForm"
                                className="grey-text"
                            >
                                Ho:
                            </label>
                            <input
                                name="Frist_Name"
                                value={Frist_Name}
                                onChange={this.onChange}
                                type="text"
                                id="defaultForm"
                                className="form-control"
                                placeholder=" Frist_Name"
                                required
                            />
                        </MDBCol>
                        <MDBCol md="4" className="mb-3">
                            <label
                                htmlFor="defaultForm1"
                                className="grey-text"
                            >
                                Tên:
                            </label>
                            <input
                                name="Last_Name"
                                value={Last_Name}
                                onChange={this.onChange}
                                type="text"
                                id="defaultForm1"
                                className="form-control"
                                placeholder=" Last_Name"
                                required
                            />
                        </MDBCol>
                        <MDBCol md="4" className="mb-3">
                            <label
                                htmlFor="defaultForm2"
                                className="grey-text"
                            >
                                Mã:
                            </label>
                            <input
                                name="Code"
                                value={Code}
                                onChange={this.onChange}
                                type="text"
                                id="defaultForm2"
                                className="form-control"
                                placeholder=" Code"
                                required
                            />
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol md="4" className="mb-3">
                            <label
                                htmlFor="defaultForm4"
                                className="grey-text"
                            >
                                Ngày sinh :
                            </label>
                            <input
                                name="Brithday"
                                value={Brithday}
                                onChange={this.onChange}
                                type="date"
                                id="defaultForm4"
                                className="form-control input-append date form_datetime"
                                placeholder=" Brithday"
                                required
                            />
                        </MDBCol>
                        <MDBCol md="4" className="mb-3">
                                <ImageUploader
                                    singleImage={true}
                                    withIcon={false}
                                    label={Image && Image[0].name.length > 0 ? Image[0].name : "Mời chọn hình ảnh"}
                                    withPreview={true}
                                    onChange={this.onDrop}
                                    imgExtension={['.jpg', '.gif', '.png', '.gif']}
                                    buttonText='Chọn ảnh'
                                    name={"Image"}

                                />
                        </MDBCol>
                        <MDBCol md="4" className="mb-3">
                            <label
                                htmlFor="defaultForm6"
                                className="grey-text"
                            >
                               Lớp:
                            </label>
                            <select id="defaultForm6"
                                    className="form-control"
                                    onChange={this.selectClass}
                                    required>
                                    <option value="">Chon</option>
                                    {  (
                                        learnclass.map((item, index) => {
                                                return  <option value={item.Id}  key={index} >{item.Title}</option>
                                            })
                                    ) 
                                    }
                            </select> 
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <label  htmlFor="defaultForm3"
                                className="grey-text">Ghi Chú: </label>
                            <input
                                id="defaultForm3"
                                className="form-control"
                                name="Note"
                                value={Note}
                                required
                                onChange={this.onChange}
                            />
                        </MDBRow>
                        <MDBRow>
                            <label htmlFor="defaultForm5"
                                className="grey-text">Địa chỉ: </label>
                            <input
                                type="text"
                                id="defaultForm5"
                                className="form-control"
                                name="Address"
                                value={Address}
                                onChange={this.onChange}
                            /> 
                        </MDBRow>
                    <button type="submit" className="btn btn-primary">Lưu Lại</button>
                    <Link to="/studentlist" className="btn btn-danger mr-10">
                        Trở Lại
                    </Link>
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
