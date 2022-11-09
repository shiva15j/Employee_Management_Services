import axios from "axios";


const EMPLOYEE_API_BASE_URL="http://localhost:8000/api/v1/employees";


class Employeeservice{

    getemployees(){

        return axios.get(EMPLOYEE_API_BASE_URL);
    }

}

export default new Employeeservice();