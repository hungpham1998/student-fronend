import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actUpdateSpecailizedRequest, actGetSpecailizedRequest, actAddSpecailizedRequest } from '../../actions/Specailized'
import { Link } from 'react-router-dom';
import { MDBRow, MDBCol, MDBBtn } from 'mdbreact';

class SpecailizedActionPage extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
            Id: '',
            Title: '',
            Note: '',
            Code:''
        };
    }

    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var Id = match.params.id;
            this.props.onEditSpecailized(Id);
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.itemEditing){
            const { itemEditing } = nextProps;
            console.log(itemEditing)
            this.setState({
                Id : itemEditing[0].Id,
                Title :  itemEditing[0].Title,
                Note : itemEditing[0].Note,
               Code : itemEditing[0].Code
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
        const { Id, Title, Note, Code } = this.state;
        var { history } = this.props;
        var specailized = {
            Id : Id,
            Title : Title,
            Note : Note,
            Code : Code
        };
        if (Id) {
            this.props.onUpdateSpecailized(specailized);

        } else {
            this.props.onAddSpecailized(specailized);
        }
        history.goBack();
    }

    

    render() {
        const {  Title, Note, Code } = this.state;
        return (
            <div  className="container p-5 ">
                <form onSubmit={this.onSave}>
                    <MDBRow>
                        <MDBCol md="4" className="mb-3">
                        <label
                            htmlFor="defaultFormRegisterNameEx"
                            className="grey-text"
                        >
                            Tên Khoa
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
                            Code:
                        </label>
                        <input
                        name="Code"
                        value={Code}
                        onChange={this.onChange}
                            id="defaultFormRegisterConfirmEx3"
                            className="form-control"
                            placeholder="Code"
                        />
                        
                        </MDBCol>
                    </MDBRow>
                    <MDBBtn color="primary" type="submit">
                        Lưu Lại
                    </MDBBtn>
                    <Link to="/specailizedlist" className="btn btn-danger mr-10">
                        Trở Lại
                    </Link>
                </form>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        itemEditing : state.itemEditing
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddSpecailized : (specailized) => {
            dispatch(actAddSpecailizedRequest(specailized));
        },
        onEditSpecailized : (id) => {
            dispatch(actGetSpecailizedRequest(id));
        },
        onUpdateSpecailized : (specailized) => {
            dispatch(actUpdateSpecailizedRequest(specailized));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SpecailizedActionPage);
