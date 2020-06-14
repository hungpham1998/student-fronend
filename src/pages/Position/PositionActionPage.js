import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actGetPositionRequest, actUpdatePositionRequest, actAddPositionRequest } from '../../actions/Position';

 class PositionActionPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Id: '',
            Title: '',
            Note: ''
        };
    }

    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var Id = match.params.id;
            this.props.onEditPosition(Id);
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.itemEditing){
            const { itemEditing } = nextProps;
            this.setState({
                Id : itemEditing.Id,
                Title :  itemEditing.Title,
                Note : itemEditing.Note
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
        const { Id, Title, Note } = this.state;
        var { history } = this.props;
        var position = {
            Id : Id,
            Title : Title,
            Note : Note
        };
        if (Id) {
            this.props.onUpdatePosition(position);

        } else {
            this.props.onAddPosition(position);
        }
        history.goBack();
    }

    render() {
        const {  Title, Note } = this.state;
        return (
            <div className="container p-5">
                <form onSubmit={this.onSave}>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Tên Chức vụ: </label>
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
                    <Link to="/positionlist" className="btn btn-danger mr-10">
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
        itemEditing : state.itemEditing
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddPosition : (position) => {
            dispatch(actAddPositionRequest(position));
        },
        onEditPosition : (id) => {
            dispatch(actGetPositionRequest(id));
        },
        onUpdatePosition : (position) => {
            dispatch(actUpdatePositionRequest(position));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PositionActionPage);
