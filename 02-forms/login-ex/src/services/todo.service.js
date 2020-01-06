

class TodoService {
    getTodos = (token) => {
        return fetch('https://academeez-login-ex.herokuapp.com/api/tasks', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((response) => {
            return response.json();
        });
    }
}

export default new TodoService();