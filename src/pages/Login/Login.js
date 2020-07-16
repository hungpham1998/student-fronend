import { connect } from "react-redux";
import { loginUser } from "../../actions/authenticaition";
import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';

class Login extends Component {

    constructor() {
        super();
        this.state = {
            Account: '',
            PassWord: '',
            errors: {}
        }
    }

    handleInputChange=(e)=> {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const { Account, PassWord } = this.state;
        const user = {
            Account: Account,
            PassWord: PassWord,
        }
        this.props.loginUser(user);
    }

    componentDidMount() {
        if(this.props.authReducer.isAuthenticated) {
            this.props.history.push('/home');
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.authReducer.isAuthenticated) {
            this.props.history.push('/home')
        }
        if(nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    render() {
        const {errors, Account, PassWord} = this.state;
        return (
            <MDBContainer style={{
                padding: '25px',borderRadius: '10px', 
                background: '-webkit-linear-gradient(top, #7579ff, #b224ef)' }} >
                <form onSubmit={(e)=>this.handleSubmit(e)}>
                    <p className="h4 text-center mb-4">Login</p>
                    <div className="form-group">
                        <label>Account</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Account"
                            name="Account"
                            onChange={ (e)=> this.handleInputChange(e) }
                            value={Account}
                            />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password"
                            name="PassWord"
                            onChange={(e)=> this.handleInputChange(e) }
                            value={PassWord}    />
                    </div>
                    <MDBBtn className="btn btn-secondary waves-effect waves-light" type="submit" style={{marginLeft: '15%'}}>
                        login
                        <MDBIcon far icon="paper-plane" className="ml-2" />
                    </MDBBtn>
                </form>
    
             </MDBContainer>
        )
    }
}


const mapStateToProps = (state) => ({
    authReducer: state.authReducer,
    errorReducer: state.errorReducer
});
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loginUser: (user) => {
            dispatch(loginUser(user))
        }
    }
};
export  default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))
