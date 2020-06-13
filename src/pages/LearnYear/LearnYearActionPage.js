import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actUpdateLearnyearRequest, actGetLearnyearRequest, actAddLearnyearRequest } from '../../actions/Learnyear';

class LearnYearActionPage extends Component {

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
            this.props.onEditLearnyear(Id);
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.itemEditing){
            const { itemEditing } = nextProps;
            console.log(itemEditing)
            this.setState({
                Id : itemEditing.Id,
                Title :  itemEditing.Title,
                Note : itemEditing.Note
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
        var learnyear = {
            Id : Id,
            Title : Title,
            Note : Note,
            IdPartment : IdPartment
        };
        if (Id) {
            this.props.onUpdateLearnyear(learnyear);

        } else {
            this.props.onAddLearnyear(learnyear);
        }
        history.goBack();
    }

    render() {
        const {  Title, Note } = this.state;
        return (
            <div className="container p-5">
                <form onSubmit={this.onSave}>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Tên Năm: </label>
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
        itemEditing : state.itemEditing
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddLearnyear : (learnyear) => {
            dispatch(actAddLearnyearRequest(learnyear));
        },
        onEditLearnyear : (id) => {
            dispatch(actGetLearnyearRequest(id));
        },
        onUpdateLearnyear : (learnyear) => {
            dispatch(actUpdateLearnyearRequest(learnyear));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LearnYearActionPage);
