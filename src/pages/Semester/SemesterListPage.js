import React, { Component } from 'react';

import { connect } from 'react-redux';
import SemesterItem from '../../components/Semester/SemesterItem';
import SemesterList from '../../components/Semester/SemesterList';
import { onFilterSemester, actFetchSemesterRequest, actDeleteSemesterRequest } from '../../actions/Semester';


class SemesterListPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            Title: ''
        }
    }

    componentDidMount() {
        this.props.fetchAllSemester();
    }

    onDelete = (Id) => {
        this.props.onDeleteSemester(Id);
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
            this.props.onFilterSemester(this.state.Title);
            this.setState({
                Title:' '
            })
        }

    }

    render() {
        const { semester } = this.props;
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
                            <button onSubmit={this.onFind} className="btn btn-primary d-block">Tìm kiếm </button>
                        </div>
                    </form>
                    <SemesterList>
                        {this.showSemester(semester)}
                    </SemesterList>
                </div>
        );
    }

    showSemester(semester) {
        var result = null;
        if (semester) {
            result = semester.map((semester, index) => {
                return (
                    <SemesterItem
                        key={index}
                        semester={semester}
                        index={index}
                        onDelete={()=>this.onDelete(semester.Id)}
                    />
                );
            });
        }
        return result;
    }

}

const mapStateToProps = state => {
    return {
        semester: state.semester,
        learnyear: state.learnyear
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllSemester : () => {
            dispatch(actFetchSemesterRequest());
        },
        onDeleteSemester : (id) => {
            dispatch(actDeleteSemesterRequest(id));
        },
        onFilterSemester: (Title) => {
            dispatch(onFilterSemester(Title));
        },
        // fetchAllLearnyear : () => {
        //     dispatch(actFetchLearnyearRequest());
        // },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SemesterListPage);
