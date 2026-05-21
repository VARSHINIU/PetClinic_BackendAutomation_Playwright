
export class User{
    constructor(request){
        this.request=request;  //initializes the request when object created in test case
    }

    //creating list of users
    async createUsers(payload){
        if(payload === null){  //checks it has request body to pass
            return await this.request.post(`${process.env.BASE_URL}/user/createWithList`,{
                headers:{"Content-Type":"text/plain"}, //if not, then pass a empty plain text
                data:""
            });
        }else{
            return await this.request.post(`${process.env.BASE_URL}/user/createWithList`,{
                headers:{"Content-Type":"application/json"},//if it has then pass the payload as it is
                data:payload
            })
        }
    }

    //get user details
    async GetUser(username){
        if(!username){ // checks whether it has username
            return await this.request.get(`${process.env.BASE_URL}/user/`); //if not leave it blank
        }else{
            return await this.request.get(`${process.env.BASE_URL}/user/${username}`); // if yes then pass the username dynamically
        }
    }

    //update user
    async updateUser(username,payload){
        return await this.request.put(`${process.env.BASE_URL}/user/${username}`,{  // passing the username dynamically
            headers:{"Content-Type":"application/json"}, //as it has reqquest add content type as json
            data:payload   // pass the payload
        })

    }

    //delete user
    async deleteUser(username){
        return await this.request.delete(`${process.env.BASE_URL}/user/${username}`)  // pass the username based on the parameter value
    }


}