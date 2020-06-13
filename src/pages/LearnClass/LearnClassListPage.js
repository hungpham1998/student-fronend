import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actFetchLearnclassRequest, actDeleteLearnclassRequest, onFilterLearnclass } from '../../actions/LearnClass';
import LearnClassList from '../../components/Learnclass/LearnClassList';
import LearnClassItem from '../../components/Learnclass/LearnClassItem';



class LearnClassListPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            Title: ''
        }
    }

    componentDidMount() {
        this.props.fetchAllLearnclass();
    }

    onDelete = (Id) => {
        this.props.onDeleteLearnclass(Id);
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
            this.props.onFilterLearnclass(this.state.Title);
            this.setState({
                Title:' '
            })
        }

    }

    render() {
        const { learnclass } = this.props;
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
                    <LearnClassList>
                        {this.showLearnclass(learnclass)}
                    </LearnClassList>
                </div>
        );
    }

    showLearnclass(learnclass) {
        var result = null;
        if (learnclass) {
            result = learnclass.map((learnclass, index) => {
                return (
                    <LearnClassItem
                        key={index}
                        learnclass={learnclass}
                        index={index}
                        onDelete={()=>this.onDelete(learnclass.Id)}
                    />
                );
            });
        }
        return result;
    }

}

const mapStateToProps = state => {
    return {
        learnclass: state.learnclass
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllLearnclass : () => {
            dispatch(actFetchLearnclassRequest());
        },
        onDeleteLearnclass : (id) => {
            dispatch(actDeleteLearnclassRequest(id));
        },
        onFilterLearnclass: (Title) => {
            dispatch(onFilterLearnclass(Title));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LearnClassListPage);
