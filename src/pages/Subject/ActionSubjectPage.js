import React, { Component } from 'react';
import { actUpdateSubjectRequest, actGetSubjectRequest, actAddSubjectRequest } from '../../actions/Subject';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
 
class ActionSubjectPage extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            Id: '',
            Title: '',
            Note: '',
            Code: '',
            CreaditNumber:''
        };
    }

    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var Id = match.params.id;
            this.props.onEditSubject(Id);
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.itemEditing){
            const { itemEditing } = nextProps;
            console.log(itemEditing)
            this.setState({
                Id : itemEditing[0].Id,
                Title :  itemEditing[0].Title,
                Note: itemEditing[0].Note,
                Code: itemEditing[0].Code,
                CreaditNumber: itemEditing[0].CreaditNumber
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
        const { Id, Title, Note, Code, CreaditNumber } = this.state;
        var { history } = this.props;
        var subject = {
            Id : Id,
            Title : Title,
            Note : Note,
            Code: Code,
            CreaditNumber: CreaditNumber
        };
        if (Id) {
            this.props.onUpdateSubject(subject);

        } else {
            this.props.onAddSubject(subject);
        }
        history.goBack();
    }

    render() {
        const {  Title, Note, Code, CreaditNumber } = this.state;
        return (
            <div className="container p-5">
                <form onSubmit={this.onSave}>
                    <div className="form-group row">
                        <div className="col">
                            <label>Tên Môn học: </label>
                            <input
                                type="text"
                                className="form-control"
                                name="Title"
                                value={Title}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="col">
                            <label className="">Mã Môn: </label>
                            <input
                                type="text"
                                className="form-control"
                                name="Code"
                                value={Code}
                                onChange={this.onChange}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col">
                            <label >Số tín: </label>
                            <input
                                className="form-control"
                                type="number"
                                name="CreaditNumber"
                                value={CreaditNumber}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="col">
                            <label >Ghi Chú: </label>
                            <input
                                className="form-control"
                                name="Note"
                                value={Note}
                                onChange={this.onChange}
                            />
                        </div>
                    </div>
                    <Link to="/subjectlist" className="btn btn-danger mr-10">
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
        onAddSubject : (subject) => {
            dispatch(actAddSubjectRequest(subject));
        },
        onEditSubject : (id) => {
            dispatch(actGetSubjectRequest(id));
        },
        onUpdateSubject : (subject) => {
            dispatch(actUpdateSubjectRequest(subject));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActionSubjectPage);
