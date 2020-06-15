import React, { Component } from 'react'
import { actDeletePointstudentRequest, actFetchPointstudentRequest } from '../../actions/Pointstudent';
import PointstudentItem from '../../components/Pointstudent/PointstudentItem';
import PointstudentList from '../../components/Pointstudent/PointstudentList';
import { connect } from 'react-redux';
class PointstudentListPage extends Component {
 
    componentDidMount() {
        this.props.fetchAllPointstudent();
    }

    onDelete = (Id) => {
        this.props.onDeletePointstudent(Id);
    }


    render() {
        const { pointstudent } = this.props;
        return (
            <div className="container p-4">
            {/* // <div className="row">
            //     <div className="col-sm-8">
            //     </div>
            // </div> */}

            <PointstudentList>
                {this.showPointstudent(pointstudent)}
            </PointstudentList>
            </div>
        )
    };

    showPointstudent(pointstudent) {
        var result = null;
        if (pointstudent) {
        result = pointstudent.map((pointstudent, index) => {
            return (
                <PointstudentItem
                    key={index}
                    pointstudent={pointstudent}
                    index={index}
                    onDelete={()=>this.onDelete(pointstudent.Id)}
                />
            );
            });
        }
        return result;
    }

}

const mapStateToProps = state => {
    return {
        pointstudent: state.pointstudent
    }
}



const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllPointstudent : () => {
            dispatch(actFetchPointstudentRequest());
        },
        onDeletePointstudent : (id) => {
            dispatch(actDeletePointstudentRequest(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PointstudentListPage);
