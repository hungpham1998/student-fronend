import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actFetchDepartmentRequest, actDeleteDepartmentRequest,onFilterDepartment } from '../../../actions/Department';
import DepartmentList from '../../../components/Department/DepartmentList/DepartmentList';
import DepartmentItem from '../../../components/Department/DepartmentItem/DepartmentItem';

class DepartmentListPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            Title: ''
        }
    }

    componentDidMount() {
        this.props.fetchAllDepartment();
    }

    onDelete = (Id) => {
        this.props.onDeleteDepartment(Id);
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
            this.props.onFilterDepartment(this.state.Title);
        }

    }

    render() {
        var { department } = this.props;
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
                        <div class="col-sm-4 col-md-1">
                            <Link to="/department/add" className="btn btn-info mb-10">
                                Thêm 
                            </Link>
                       </div>
                    </div>
               
                    <DepartmentList>
                        {this.showDepartment(department)}
                    </DepartmentList>
                </div>
        );
    }

    showDepartment(department) {
         console.log(department)
        var result = null;
        if (department) {
            result = department.map((department, index) => {
                return (
                    <DepartmentItem
                        key={index}
                        department={department}
                        index={index}
                        onDelete={()=>this.onDelete(department.Id)}
                    />
                );
            });
        }
        return result;
    }

}

const mapStateToProps = state => {
    return {
        department: state.department
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllDepartment : () => {
            dispatch(actFetchDepartmentRequest());
        },
        onDeleteDepartment : (id) => {
            dispatch(actDeleteDepartmentRequest(id));
        },
        onFilterDepartment: (Title) => {
            dispatch(onFilterDepartment(Title));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DepartmentListPage);
