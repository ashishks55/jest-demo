const axios = require('axios');
const functions = {
    add: (a, b) => {return a + b;},
    isNull: () => { return null;},
    checkValue: (value) => { return value; },
    createUser: () => {
        const user = { firstName: 'Ashish' };
        user['lastName'] = 'Singh';
        return user;
    },
    fetchUser: () => axios.get('https://jsonplaceholder.typicode.com/users/1')
                          .then( res => res.data)
                          .catch(err => 'error')
}

module.exports = functions;