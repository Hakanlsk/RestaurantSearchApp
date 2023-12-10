import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 8cq3MQ2Kk-UCrrZ3iIANoOHs3_ue2JPhsDl4rk8mNgZJ9FrBaEAWvZWOgz6GV5wlMVixLf3zo5HqvaMdc2zbVVsws2daXMjxpZ4IclZKNA2lD0SFxZ6_fbTP7Q1zZXYx'
    }
})