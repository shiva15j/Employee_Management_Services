import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

export default class ListEmployeeComponent extends Component {

    constructor(props) {

        super(props)

        this.state = {

            employees: []
        }

        this.addEmployee= this.addEmployee.bind(this);

    }

    componentDidMount(){

        EmployeeService.getemployees().then((res)=>{
this.setState({employees: res.data});
        });
    }

    addEmployee(){
      this.props.history.push("/add-employee"); 
    }
    render() {
        return (
            <div>
                <h2 className="text-center">Employee List</h2>
                <div>
                   
<button className="btn btn-primary" onClick={this.addEmployee}> Add Employee </button>

                </div>
                <br/>

                <div className="row">
                  </div>

                <table className="table table-striped table-bordered">

                    <thead>
                        <tr>

                            <th>
                                Employee FirstName
                            </th>
                            <th>
                                Employee LastName

                            </th>
                            <th>
                                Employee EmailId

                            </th>
                            <th>

                                Actions
                            </th>
                        </tr>


                    </thead>

                    <tbody>
{
    this.state.employees.map(
       
        employee =>

        <tr key= {employee.id} >
     <td>{employee.firstName}</td>
     <td>{employee.lastName}</td>
     <td>{employee.emailId}</td>


        </tr>
        

    )
}

                    </tbody>


                </table>

            </div>
        )
    }
}
