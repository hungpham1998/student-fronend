import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { actAddDepartmentRequest, actGetDepartmentRequest, actUpdateDepartmentRequest } from '../../../actions/Department';
import { connect } from 'react-redux';

class DepartmentActionPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Id: '',
            Title: '',
            Note: '',
            IdPartment: ''
        };
    }

    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var Id = match.params.id;
            this.props.onEditDepartment(Id);
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
                IdPartment : itemEditing[0].IdPartment
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
        const { Id, Title, Note, IdPartment } = this.state;
        var { history } = this.props;
        var department = {
            Id : Id,
            Title : Title,
            Note : Note,
            IdPartment : IdPartment
        };
        if (Id) {
            this.props.onUpdateDepartment(department);

        } else {
            this.props.onAddDepartment(department);
        }
        history.goBack();
    }

    render() {
        const {  Title, Note, IdPartment } = this.state;
        return (
            <div className="container p-5">
                <form onSubmit={this.onSave}>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Tên Phòng Ban: </label>
                        <input
                            type="text"
                            className="form-control col-sm-4"
                            name="Title"
                            value={Title}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" >Ghi Chú: </label>
                        <input
                            className="form-control col-sm-4"
                            name="Note"
                            value={Note}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"> Id Cha: </label>
                        <input
                            type="number"
                            className="form-control col-sm-4"
                            name="IdPartment"
                            value={IdPartment}
                            onChange={this.onChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Lưu Lại</button>
                    <Link to="/departmentlist" className="btn btn-danger mr-10">
                        Trở Lại
                    </Link>
                </form>

            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        itemEditing : state.itemEditing
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddDepartment : (department) => {
            dispatch(actAddDepartmentRequest(department));
        },
        onEditDepartment : (id) => {
            dispatch(actGetDepartmentRequest(id));
        },
        onUpdateDepartment : (department) => {
            dispatch(actUpdateDepartmentRequest(department));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DepartmentActionPage);
