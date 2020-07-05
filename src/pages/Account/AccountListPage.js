import React, { Component } from 'react'
import { connect } from 'react-redux'
import AccountItem from '../../components/Account/AccountItem';
import AccountList from '../../components/Account/AccountList';
import { actFetchAccountRequest, actDeleteAccountRequest } from '../../actions/Accountaction';

class AccountListPage extends Component {
     
    componentDidMount() {
        this.props.fetchAllAccount();
    }

    onDelete = (Id) => {
        this.props.onDeleteAccount(Id);
    }


    render() {
        const { account } = this.props;
        return (
            <div className="container p-4">
                 <AccountList>
                        {this.showAccount(account)}
                    </AccountList>
            </div>
        )
     }
     
     showAccount(account) {
         var result = null;
         
        if (account) {
            result = account.map((account, index) => {
                return (
                    <AccountItem
                        key={index}
                        account={account}
                        index={index}
                        onDelete={()=> this.onDelete(account.Id)}
                    />
                );
            });
        }
        return result;
    }
}

const mapStateToProps = state => {
    return {
        account: state.account
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllAccount : () => {
            dispatch(actFetchAccountRequest());
        },
        onDeleteAccount : (id) => {
            dispatch(actDeleteAccountRequest(id));
        }
    }
}


export default  connect(mapStateToProps, mapDispatchToProps)(AccountListPage);
