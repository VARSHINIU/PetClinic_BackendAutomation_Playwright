import {test,expect,request} from "@playwright/test";
import {User} from "../API/user.api";
import { DeleteUser } from "../DATA/DeleteUser.data";
import { ResponseCheck } from "../UTILS/ResponseCheck";

test.describe("Delete the USer",()=>{
    let userAPI;
    let ResponseCheckOBJ;

    test.beforeAll(async()=>{
        //api object
        const context=await request.newContext();
        userAPI=new User(context);
        
        //utils object
        ResponseCheckOBJ=new ResponseCheck(expect);
    })

    DeleteUser.forEach((data)=>{
        test(`${data.testId}: ${data.description}`,async()=>{
            const response=await userAPI.deleteUser(data.username);

            const actualstatus=await response.status();
            await expect(actualstatus).toBe(data.expectedStatus);

            if(data.expectedBody || data.expectedSchema){

                const actualBody= await response.json();
                console.log(`TC: ${data.testId}, response: `,actualBody);

                if(data.expectedBody){
                    ResponseCheckOBJ.checkExactBody(actualBody,data.expectedBody);
                }
                if(data.expectedSchema){
                    ResponseCheckOBJ.checkSchema(actualBody,data.expectedSchema);
                }

            }


        })
    })


})