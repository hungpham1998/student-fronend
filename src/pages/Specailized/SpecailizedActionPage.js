import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actUpdateSpecailizedRequest, actGetSpecailizedRequest, actAddSpecailizedRequest } from '../../actions/Specailized'
import { Link } from 'react-router-dom';

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
                    <div className="form-group">
                        <label>Tên Lớp: </label>
                        <input
                            type="text"
                            className="form-control"
                            name="Title"
                            value={Title}
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
                        <label> Code: </label>
                        <input
                            type="text"
                            className="form-control"
                            name="Code"
                            value={Code}
                            onChange={this.onChange}
                        />
                    </div>
                    <Link to="/specailizedlist" className="btn btn-danger mr-10">
                        Trở Lại
                    </Link>
                    <button type="submit" className="btn btn-primary">Lưu Lại</button>
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
