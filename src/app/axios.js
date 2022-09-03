import axios from "axios";
export default axios.create({
  baseURL: 'https://adminstaging.airgate.ng/index.php/api/auth/login',
});