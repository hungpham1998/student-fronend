import React, { Component } from 'react'
import SpecailizedItem from '../../components/Specailized/SpecailizedItem';
import SpecailizedList from '../../components/Specailized/SpecailizedList';
import { connect } from 'react-redux';
import { actFetchSpecailizedRequest, actDeleteSpecailizedRequest, onFilterSpecailized } from '../../actions/Specailized';
class SpecailizedListPage extends Component {


    constructor(props) {
        super(props)
        this.state = {
            Title: ''
        }
    }

    componentDidMount() {
        this.props.fetchAllSpecailized();
    }

    onDelete = (Id) => {
        this.props.onDeleteSpecailized(Id);
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
            this.props.onFilterSpecailized(this.state.Title);
            this.setState({
                Title:' '
            })
        }

    }

    render() {
        const { specailized } = this.props;
        console.log(specailized)
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
                <SpecailizedList>
                    {this.showSpecailized(specailized)}
                </SpecailizedList>
        </div>
        )
    }


    showSpecailized(specailized) {
        var result = null;
        if (specailized) {
            console.log(specailized)
            result = specailized.map((specailized, index) => {
                return (
                    <SpecailizedItem
                        key={index}
                        specailized={specailized}
                        index={index}
                        onDelete={()=>this.onDelete(specailized.Id)}
                    />
                );
            });
        }
        return result;
    }
}

const mapStateToProps = state => {
    return {
        specailized: state.specailized
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllSpecailized : () => {
            dispatch(actFetchSpecailizedRequest());
        },
        onDeleteSpecailized : (id) => {
            dispatch(actDeleteSpecailizedRequest(id));
        },
        onFilterSpecailized: (Title) => {
            dispatch(onFilterSpecailized(Title));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SpecailizedListPage);
