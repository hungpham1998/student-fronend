import React, { Component } from 'react'
import SpecailizedItem from '../../components/Specailized/SpecailizedItem';
import { Link } from 'react-router-dom';
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
        }

    }

    render() {
        const { specailized } = this.props;
        console.log(specailized)
        return (  
            <div className="container">
            <div className="row">
                <div className="col-sm-8">
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
                <div className="col-sm-4">
                    <Link to="/specailized/add" className="btn btn-info mb-10">
                        Thêm 
                    </Link>
               </div>
            </div>
       
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
