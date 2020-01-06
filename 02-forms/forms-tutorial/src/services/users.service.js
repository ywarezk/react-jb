

class UsersService {
    login = (values) => {
        return fetch('https://academeez-login-ex.herokuapp.com/api/users/login/', {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            if (response.status !== 202) {
                throw new Error('Invalid Login')
            } else {
                return response.json();
            }
        }).then((obj) => {
            return obj.token;
        });
    }
}

export default new UsersService();