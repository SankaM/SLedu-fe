import axios from 'axios';

const instance = axios.create({
    baseURL:'http://ec2-18-140-3-78.ap-southeast-1.compute.amazonaws.com:3005'
});

export default instance;