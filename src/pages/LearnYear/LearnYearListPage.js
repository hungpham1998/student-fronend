import React, { Component } from 'react';

import { connect } from 'react-redux';
import { actFetchLearnyearRequest, actDeleteLearnyearRequest, onFilterLearnyear } from '../../actions/Learnyear';
import LearnYearItem from '../../components/LearnYear/LearnYearItem';
import LearnYearList from '../../components/LearnYear/LearnYearList';




class LearnYearListPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            Title: ''
        }
    }

    componentDidMount() {
        this.props.fetchAllLearnyear();
    }

    onDelete = (Id) => {
        this.props.onDeleteLearnyear(Id);
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
            this.props.onFilterLearnyear(this.state.Title);
            this.setState({
                Title:' '
            })
        }

    }

    render() {
        const { learnyear } = this.props;
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
                            <button onSubmit={this.onFind} className="btn btn-primary d-block">Tìm kiếm  </button>
                        </div>
                    </form>
                    <LearnYearList>
                        {this.showLearnyear(learnyear)}
                    </LearnYearList>
                </div>
        );
    }

    showLearnyear(learnyear) {
        var result = null;
        if (learnyear) {
            result = learnyear.map((learnyear, index) => {
                return (
                    <LearnYearItem
                        key={index}
                        learnyear={learnyear}
                        index={index}
                        onDelete={()=>this.onDelete(learnyear.Id)}
                    />
                );
            });
        }
        return result;
    }

}

const mapStateToProps = state => {
    return {
        learnyear: state.learnyear
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllLearnyear : () => {
            dispatch(actFetchLearnyearRequest());
        },
        onDeleteLearnyear : (id) => {
            dispatch(actDeleteLearnyearRequest(id));
        },
        onFilterLearnyear: (Title) => {
            dispatch(onFilterLearnyear(Title));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LearnYearListPage);
