import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { actAddLearnclassRequest, actGetLearnclassRequest, actUpdateLearnclassRequest } from '../../actions/LearnClass';
import { connect } from 'react-redux';
import { actFetchSpecailizedRequest } from '../../actions/Specailized';

class learnclassActionPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Id: '',
            Title: '',
            Note: '',
            specailizedId: ''
        };
    }

    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var Id = match.params.id;
            this.props.onEditLearnclass(Id);
        }
        this.props.fetchAllSpecailized();
    }

    componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.itemEditing){
            const { itemEditing } = nextProps;
            this.setState({
                Id : itemEditing[0].Id,
                Title :  itemEditing[0].Title,
                Note : itemEditing[0].Note,
                specailizedId : itemEditing[0].specailizedId
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
        const { Id, Title, Note, specailizedId } = this.state;
        var { history } = this.props;
        var learnclass = {
            Id : Id,
            Title : Title,
            Note : Note,
            specailizedId : specailizedId
        };
        this.props.onUpdateLearnclass(learnclass);
        this.setState({
            Id: '',
            Title: '',
            Note: '',
            specailizedId: ''
        })
        history.goBack();
    }


    selectClass = (data) => {
        this.setState({
            specailizedId: data.target.value
        })
    }

    defaultValue = () => {
        let data = this.props.specailized.find(item => item.Id === this.state.specailizedId);
        console.log(data)
        data.map(item => {
            if (item.Id === this.state.specailizedId) {
                return item.Title;
            }
        })
    }


    render() {
        const { Id, Title, Note, specailizedId } = this.state;
        const { specailized } = this.props;
        return (
            <div className="container p-5 ">
                <form onSubmit={this.onSave}>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Tên Lớp: </label>
                        <input
                            type="text"
                            className="form-control col-sm-4"
                            name="Title"
                            value={Title}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Ghi Chú: </label>
                        <input
                            className="form-control col-sm-4 "
                            name="Note"
                            value={Note}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 col-form-label"> Khoa: </label>
                        <select className="form-control custom-select custom-select-sm" onChange={this.selectClass} defaultValue={this.defaultValue}
                           >
                                {  (
                                    specailized.map((item, index) => {
                                            return  <option value={item.Id}  key={index} >{item.Title}</option>
                                        })
                                ) 
                                }
                        </select> 
                    </div>
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
        itemEditing: state.itemEditing,
        specailized: state.specailized,
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
        },
        fetchAllSpecailized : () => {
            dispatch(actFetchSpecailizedRequest());
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(learnclassActionPage);
