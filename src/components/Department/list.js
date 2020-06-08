import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDepartment, deleteDepartment } from './actions';
import { Link } from 'react-router-dom';
import { Button, Table, notification, Modal } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { get } from 'immutable';


class ListDepartment extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        }; 
    }
    
    componentWillMount() {
        const {getDepartment} = this.props;
        getDepartment();
    }

    onDelete(id) {
        this.props.deleteDepartment(id);
    }

    deleteDepartment = (id) => {
        Modal.confirm({
          okText: 'Xóa phòng ban',
          okButtonProps: { type: 'danger' },
          onOk: () => this.onDelete(id),
          cancelText: 'Huỷ',
          cancelButtonProps: { type: 'primary' },
          title: `Bạn chắc chắn Xóa phòng ban này?`,
          content: 'Mọi thông tin liên quan sẽ bị xoá khỏi hệ thống !',
        })
      };

    render() { 
        const columns = [
            {
                title: 'Ma phong ban',
                dataIndex: 'Id',
                render: value => <Link >{value}</Link>
            },
            {
                title: 'Tên phòng ban',
                dataIndex: 'Title',
                render: value => <Link >{value}</Link>
            },
            {
                title: 'Ghi chú',
                dataIndex: 'Note',
                align: 'center'
            },
            {
                title: 'Xóa',
                width: 110,
                align: 'center',
                render: (text, row) => (
                    <Button style={{ color: 'red' }} onClick={() => this.deleteDepartment(row.Id)} >
                        Delete
                    </Button>
                )
            }
        ];
        const { deparment } = this.props;
        return (
            <div>
              <Table dataSource={deparment.departmentReducers} columns={columns} />;
            </div>
        );
    }
};


const mapStateToProps = state => {
    return {
      deparment: state
     
    };
  };
  
const mapDispatchToProps = dispatch => {
    return {
        getDepartment: () => dispatch(getDepartment()),
        deleteDepartment: (id) => dispatch(deleteDepartment(id)),
    };
};
      
export default connect(mapStateToProps,mapDispatchToProps)(ListDepartment);
