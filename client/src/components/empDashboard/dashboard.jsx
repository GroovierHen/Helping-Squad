import React,{Component} from 'react';
import  './dashboard.css'

class Dashboard extends Component{
    render(){
        return(
            <div className="Dashboard">
                <h1 className = 'headingProfile'>Welcome to your Profile</h1>
                <table className = 'table' cellPadding = '20px'>
                    <tr>
                        <th>Name:</th>
                        <td>this.props.name</td>
                        <div>

                        </div>
                    </tr>

                    <tr>
                        <th>Email:</th>
                        <td>this.props.email</td>
                    </tr>
                    <tr>
                        <th>Sales:</th>
                        <td>this.props.sales</td>
                    </tr>
                    <tr>
                        <th>Earnings:</th>
                        <td>this.props.earning</td>
                    </tr>
                </table>
                <div style = {{marginTop:'50px',color:'black',fontWeight:'bold'}}>Memeber since this.props.joiningDate</div>
            </div>
        )
    }
}

export default Dashboard;