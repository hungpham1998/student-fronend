import React, { Component } from 'react'
import { connect } from 'react-redux';
import { actDeletePositionRequest, onFilterPosition, actFetchPositionRequest } from '../../actions/Position';
import PositionList from '../../components/Position/PositionList';
import PositionItem from '../../components/Position/PositionItem';

 class PositionListPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Title: ''
        }
    }


    componentDidMount() {
        this.props.fetchAllPosition();
    }

    onDelete = (Id) => {
        this.props.onDeletePosition(Id);
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
            this.props.onFilterPosition(this.state.Title);
            this.setState({
                Title:' '
            })
        }

    }

    render() {
        const { position } = this.props;
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
                            <button onSubmit={this.onFind} className="btn btn-primary d-block">Tìm kiếm   <i class="fa fa-times"></i> </button>
                        </div>
                    </form>
                    <PositionList>
                        {this.showPosition(position)}
                    </PositionList>
                </div>
        );
    }

    showPosition(position) {
        var result = null;
        if (position) {
            result = position.map((position, index) => {
                return (
                    <PositionItem
                        key={index}
                        position={position}
                        index={index}
                        onDelete={()=>this.onDelete(position.Id)}
                    />
                );
            });
        }
        return result;
    }

};

const mapStateToProps = state => {
    return {
        position: state.position
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllPosition : () => {
            dispatch(actFetchPositionRequest());
        },
        onDeletePosition : (id) => {
            dispatch(actDeletePositionRequest(id));
        },
        onFilterPosition: (Title) => {
            dispatch(onFilterPosition(Title));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PositionListPage);
