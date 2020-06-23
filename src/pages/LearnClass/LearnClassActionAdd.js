import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { actAddLearnclassRequest, actGetLearnclassRequest, actUpdateLearnclassRequest } from '../../actions/LearnClass';
import { connect } from 'react-redux';
import { actFetchSpecailizedRequest } from '../../actions/Specailized';
import { MDBRow, MDBCol, MDBBtn } from 'mdbreact';

class learnclassActionPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Id: '',
            Title: '',
            Note: '',
            specailizedId: ''
        };
    }

    componentDidMount() {
        this.props.fetchAllSpecailized();
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
        const { Title, Note, specailizedId } = this.state;
        const { history } = this.props;
        var learnclass = {
            Title : Title,
            Note : Note,
            specailizedId : specailizedId
        };
            this.props.onAddLearnclass(learnclass);
        history.goBack();
    }


    selectClass = (data) => {
        this.setState({
            specailizedId: data.target.value
        })
    }

    render() {
        const {  Title, Note } = this.state;
        const { specailized } = this.props;
        return (
            <div className="container p-5 ">
                <form onSubmit={this.onSave}>
                <MDBRow>
                    <MDBCol md="4" className="mb-3">
                        <label
                            htmlFor="defaultFormRegisterNameEx"
                            className="grey-text"
                        >
                            Tên Lớp:
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
                    <MDBCol md="4" className="mb-3">
                        <label
                            htmlFor="defaultFormRegisterEmailEx2"
                            className="grey-text"
                        >
                            Ghi Chú:
                        </label>
                        <input
                            name="Note"
                            value={Note}
                            onChange={this.onChange}
                            type="text"
                            id="defaultFormRegisterEmailEx2"
                            className="form-control"
                            placeholder="Note"
                            required
                        />
                    </MDBCol>
                    <MDBCol md="4" className="mb-3">
                        <label
                            htmlFor="defaultFormRegisterConfirmEx3"
                            className="grey-text"
                        >
                                Khoa:
                        </label>
                        <select id="defaultFormRegisterConfirmEx3"
                                className="form-control"
                                onChange={this.selectClass}
                                required>
                                {  (
                                    specailized.map((item, index) => {
                                            return  <option value={item.Id}  key={index} >{item.Title}</option>
                                        })
                                ) 
                                }
                        </select> 
                        </MDBCol>
                    </MDBRow>
                    <MDBBtn color="primary" type="submit">
                        Lưu Lại
                    </MDBBtn>
                    <Link to="/learnclasslist" className="btn btn-danger mr-10">
                        Trở Lại
                    </Link>
                </form>

            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
   //     itemEditing: state.itemEditing,
        specailized: state.specailized
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddLearnclass : (learnclass) => {
            dispatch(actAddLearnclassRequest(learnclass));
        },
        // onEditLearnclass : (id) => {
        //     dispatch(actGetLearnclassRequest(id));
        // },
        onUpdateLearnclass : (learnclass) => {
            dispatch(actUpdateLearnclassRequest(learnclass));
        },
        fetchAllSpecailized : () => {
            dispatch(actFetchSpecailizedRequest());
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(learnclassActionPage);
