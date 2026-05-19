
export class User{
    constructor(request){
        this.request=request;
    }

    //creating list of users
    async createUsers(payload){
        if(payload === null){
            return await this.request.post(`${process.env.BASE_URL}/user/createWithList`,{
                headers:{"Content-Type":"text/plain"},
                data:""
            });
        }else{
            return await this.request.post(`${process.env.BASE_URL}/user/createWithList`,{
                headers:{"Content-Type":"application/json"},
                data:payload
            })
        }
    }

    //get user details
    async GetUser(username){
        if(!username){
            return await this.request.get(`${process.env.BASE_URL}/user/`);
        }else{
            return await this.request.get(`${process.env.BASE_URL}/user/${username}`);
        }
    }

    //update user
    async updateUser(username,payload){
        return await this.request.put(`${process.env.BASE_URL}/user/${username}`,{
            headers:{"Content-Type":"application/json"},
            data:payload
        })

    }

    //delete user
    async deleteUser(username){
        return await this.request.delete(`${process.env.BASE_URL}/user/${username}`)
    }


}