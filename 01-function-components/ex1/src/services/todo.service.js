/**
 * service that queries the task api
 */

 class TodoService {

    /**
     * @params: {(any[]) => void}
     * @returns: {Promise<any[]>}
     */
    getTodos = () => {
        // Promise<Response> => Promise<number>
        // Promise<json[]>
        return fetch('https://nztodo.herokuapp.com/api/task/?format=json')
            .then((response) => {
            // return 10;
                return response.json()
            })
    }

 }
 
 export default new TodoService();