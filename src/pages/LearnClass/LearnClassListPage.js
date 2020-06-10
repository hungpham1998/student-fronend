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
        }

    }

    render() {
        var { learnclass } = this.props;
        return (
            
                <div class="container">
                    <div class="row">
                        <div class="col-sm-8">
                            <form onSubmit={this.onFind}>
                                <div className="form-group">
                                    <label>Tìm kiếm : </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="Title"
                                        value={this.state.Title}
                                        onChange={this.onChange}
                                />
                                 <button onSubmit={this.onFind} className="btn btn-primary">Tìm kiếm </button>
                                </div>
                            </form>
                        </div>
                        <div class="col-sm-4">
                            <Link to="/learnclass/add" className="btn btn-info mb-10">
                                Thêm 
                            </Link>
                       </div>
                    </div>
               
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
