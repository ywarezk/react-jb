
// {id: 1, title: ''}
class UserService {

    /**
     * send a post request to the login api
     * @returns: {Promise<string>}
     */
    login = (email, password) => {
        return fetch('https://academeez-login-ex.herokuapp.com/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            // body: JSON.stringify({email: email, password: password})
            body: JSON.stringify({email, password})
        }).then((response) => {
            if (response.status === 202) {
                // {token: 'asdfasdfadfs'}
                return response.json()    
            } else {
                throw new Error('Invalid credentials')
            }
        }).then((objToken) => {
            return objToken.token;
        })
    }

    register = (firstName, lastName, email, password) => {
        // TBD
    }
}

export default new UserService();

