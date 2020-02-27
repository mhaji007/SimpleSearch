import axios from 'axios';

// Create custom client
export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID 3Xmtoa5J-Amw2moRXwcUU9Kxp7qHAeJj6RxTsTuhF1E'
    }
});