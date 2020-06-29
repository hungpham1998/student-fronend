import React, { Component } from 'react'
import { MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actFetchRoleRequest } from '../../actions/Roleaction';
import { actFetchDepartmentRequest } from '../../actions/Department';
import { actFetchPositionRequest } from '../../actions/Position';
import { actAddAccountRequest } from '../../actions/Accountaction';
import ImageUploader from 'react-images-upload';
class AccountActionAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Account: '',
            UserName: '',
            Mail: '',
            PassWord: '',
            departmentId: '',
            positionId: '',
            Image: '',
            Address: '',
            Role: ''
        };
    }

    componentDidMount() {
        this.props.fetchAllRole();
        this.props.fetchAllDepartment();
        this.props.fetchAllPosition();
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
        const { Account, UserName, Mail,PassWord, departmentId, positionId, Image, Address, Role} = this.state;
        const { history } = this.props;
        console.log(Image)
        var account = {
            Account: Account,
            UserName: UserName,
            Mail: Mail,
            PassWord: PassWord,
            departmentId: departmentId,
            positionId: positionId,
            Image: Image[0].name,
            Address: Address,
            Role: Role
        };
            this.props.onAddAccount(account);
        history.goBack();
    }

    
    selectRole = (data) => {
        this.setState({
            Role: data.target.value
        })
    }

    selectDepartment = (data) => {
        this.setState({
            departmentId: data.target.value
        })
    }

    selectPosition = (data) => {
        this.setState({
            positionId: data.target.value
        })
    }

    onDrop=(picture)=> {
        this.setState({
            Image: picture
        });
    }
    render() {
        const { Account, UserName, Mail, PassWord, Image, Address } = this.state;
        const { position, department, role } = this.props;
            return (
                <div className="container">
                    <form onSubmit={this.onSave} >
                    <MDBRow>
                        <MDBCol md="4" className="mb-3">
                            <label
                                htmlFor="defaultForm"
                                className="grey-text"
                            >
                                Tên đăng nhập:
                            </label>
                            <input
                                name="Account"
                                value={Account}
                                onChange={this.onChange}
                                type="text"
                                id="defaultForm"
                                className="form-control"
                                placeholder=" Account"
                                required
                            />
                        </MDBCol>
                        <MDBCol md="4" className="mb-3">
                            <label
                                htmlFor="defaultForm2"
                                className="grey-text"
                            >
                                Tên người dùng
                            </label>
                            <input
                                name="UserName"
                                value={UserName}
                                onChange={this.onChange}
                                type="text"
                                id="defaultForm2"
                                className="form-control"
                                placeholder="UserName"
                                required
                            />
                        </MDBCol>
                        <MDBCol md="4" className="mb-3">
                            <label
                                htmlFor="defaultForm3"
                                className="grey-text"
                            >
                                Mail:
                            </label>
                            <input
                                name="Mail"
                                value={Mail}
                                onChange={this.onChange}
                                type="text"
                                id="defaultForm3"
                                className="form-control"
                                placeholder="Mail"
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
                                Mật khẩu :
                            </label>
                            <input
                                name="PassWord"
                                value={PassWord}
                                onChange={this.onChange}
                                type="text"
                                id="defaultForm4"
                                className="form-control"
                                placeholder=" PassWord"
                                required
                            />
                        </MDBCol>
                        <MDBCol md="4" className="mb-3">
                            {/* <label
                                htmlFor="defaultForm5"
                                className="grey-text"
                            >
                                    Ảnh
                            </label> */}
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
                            {/* <input
                                name="Image"
                                value={Image}
                                onChange={this.onChange}
                                type="file"
                                id="defaultForm5"
                                placeholder="Image"
                                required
                            /> */}
                        </MDBCol>
                        <MDBCol md="4" className="mb-3">
                            <label
                                htmlFor="defaultForm6"
                                className="grey-text"
                            >
                                Địa chỉ:
                            </label>
                            <input
                                name="Address"
                                value={Address}
                                onChange={this.onChange}
                                type="text"
                                id="defaultForm3"
                                className="form-control"
                                placeholder="Address"
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
                                Phòng ban :
                            </label>
                            <select id="defaultForm7"
                                    className="form-control"
                                    onChange={this.selectDepartment}
                                    required>
                                    {  (
                                        department.map((item, index) => {
                                                return  <option value={item.Id}  key={index} >{item.Title}</option>
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
                                Chức vụ:
                            </label>
                            <select id="defaultForm8"
                                    className="form-control"
                                    onChange={this.selectPosition}
                                    required>
                                    {  (
                                        position.map((item, index) => {
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
                                Quyền :
                            </label>
                            <select id="defaultForm9"
                                    className="form-control"
                                    onChange={this.selectRole}
                                    required>
                                    {  (
                                        role.map((item, index) => {
                                                return  <option value={item.Title}  key={index} >{item.Title}</option>
                                            })
                                    ) 
                                    }
                            </select> 
                            </MDBCol>
                    </MDBRow>
                    <MDBBtn color="primary" type="submit">
                        Lưu Lại
                    </MDBBtn>
                    <Link to="/accountlist" className="btn btn-danger mr-10">
                        Trở Lại
                    </Link>
                    </form>
    
                </div>
        )
    }
}



const mapStateToProps = state => {
    return {
        department: state.department,
        position: state.position,
        role: state.role
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddAccount : (account) => {
            dispatch(actAddAccountRequest(account));
        },
        fetchAllRole : () => {
            dispatch(actFetchRoleRequest());
        },
        fetchAllDepartment : () => {
            dispatch(actFetchDepartmentRequest());
        },
        fetchAllPosition : () => {
            dispatch(actFetchPositionRequest());
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountActionAdd);
