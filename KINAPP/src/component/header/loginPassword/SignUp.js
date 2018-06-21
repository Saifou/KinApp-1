import React, {Component} from 'react';

class SignUp extends Component {
    constructor(props){
    super(props);
    this.state={
        identifiant:'',
        password:'',
    }
}

signUp (){
    console.log('this.state, this.state')
}


    render () {
        return (
            <div className="form-inline">
                <h2>Accès</h2>
                    <div className="form-group">
                        <input
                             className="form-control"
                             type="text"
                            placeholder="identifiant"
                            onChange={event => this.setState({identifiant:event.target.value})}
                            />
                        <input
                            className="form-control"
                            type="text"
                            placeholder="password"
                            onChange={event => this.setState({password:event.target.value})}
                            />
                    </div>
            </div>
           
        )

    }
}


export default SignUp;