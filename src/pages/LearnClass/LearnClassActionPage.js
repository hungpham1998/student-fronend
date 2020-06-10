import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { actAddLearnclassRequest, actGetLearnclassRequest, actUpdateLearnclassRequest } from '../../actions/LearnClass' ;
import { connect } from 'react-redux';

class learnclassActionPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Id: '',
            Title: '',
            Note: '',
            //IdPartment: ''
        };
    }

    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var Id = match.params.id;
            this.props.onEditLearnclass(Id);
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
               // IdPartment : itemEditing[0].IdPartment
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
        const { Id, Title, Note, IdPartment } = this.state;
        var { history } = this.props;
        var learnclass = {
            Id : Id,
            Title : Title,
            Note : Note,
            //IdPartment : IdPartment
        };
        if (Id) {
            this.props.onUpdateLearnclass(learnclass);

        } else {
            this.props.onAddLearnclass(learnclass);
        }
        history.goBack();
    }

    render() {
        const { Title, Note, IdPartment } = this.state;
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <form onSubmit={this.onSave}>
                    <div className="form-group">
                        <label>Tên Phòng Ban: </label>
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
                    {/* <div className="form-group">
                        <label> Id Phòng Ban Cha: </label>
                        <input
                            type="number"
                            className="form-control"
                            name="IdPartment"
                            value={IdPartment}
                            onChange={this.onChange}
                        />
                    </div> */}
                    <Link to="/learnclasslist" className="btn btn-danger mr-10">
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
        onAddLearnclass : (learnclass) => {
            dispatch(actAddLearnclassRequest(learnclass));
        },
        onEditLearnclass : (id) => {
            dispatch(actGetLearnclassRequest(id));
        },
        onUpdateLearnclass : (learnclass) => {
            dispatch(actUpdateLearnclassRequest(learnclass));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(learnclassActionPage);
