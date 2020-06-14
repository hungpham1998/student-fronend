import React, { Component } from 'react';
import ListSubject from '../../components/Subject/SubjectList'
import { actDeleteSubjectRequest, actFetchSubjectRequest, onFilterSubject } from '../../actions/Subject';
import { connect } from 'react-redux';
import SubjectItem from '../../components/Subject/SubjectItem';

class ListSubjectPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Title: ''
        }
    }

    componentDidMount() {
        this.props.fetchAllSubject();
    }

    onDelete = (Id) => {
        this.props.onDeleteSubject(Id);
    }


    
    onChange = (e) => {
        var target = e.target;
        this.setState({
            Title:  target.value
        });
    }
    onFind = (e) => {
        e.preventDefault();
        if (this.state.Title.length !== 0) {
            this.props.onFilterSubject(this.state.Title);
            this.setState({
                Title:' '
            })
        }

    }

    render() {
        const { subject } = this.props;
        return (
            
            <div className="container p-4">
                <form onSubmit={this.onFind} className="mb-4">
                <div className="d-flex align-items-center">
                <label className="d-block">Tìm kiếm: </label>
                            <input
                                type="text"
                                className="d-block flex-grow-1 mx-3 rounded"
                                name="Title"
                                value={this.state.Title}
                                onChange={this.onChange}
                            />
                            <button onSubmit={this.onFind} className="btn btn-primary d-block"> Tìm kiếm </button>
                        </div>
                    </form>
                    <ListSubject>
                        {this.showSubject(subject)}
                    </ListSubject>
                </div>
        );
    }

    showSubject(subject) {
        var result = null;
        if (subject) {
            result = subject.map((subject, index) => {
                return (
                    <SubjectItem
                        key={index}
                        subject={subject}
                        index={index}
                        onDelete={()=>this.onDelete(subject.Id)}
                    />
                );
            });
        }
        return result;
    }

}

const mapStateToProps = state => {
    return {
        subject: state.subject
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllSubject : () => {
            dispatch(actFetchSubjectRequest());
        },
        onDeleteSubject : (id) => {
            dispatch(actDeleteSubjectRequest(id));
        },
        onFilterSubject: (Title) => {
            dispatch(onFilterSubject(Title));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListSubjectPage);
