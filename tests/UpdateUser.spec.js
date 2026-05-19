import {test, expect,request} from "@playwright/test";
import {User} from "../API/user.api";
import { UpdateUser } from "../DATA/UpdateUser.data";
import { ResponseCheck } from "../UTILS/ResponseCheck";


test.describe("Updating the user",()=>{
    let userAPI;
    let responsecheckOBJ;

    test.beforeAll(async()=>{
        //object for api
        const context=await request.newContext();
        userAPI=new User(context);

        //object for utils
        responsecheckOBJ=new ResponseCheck(expect);

    })

    UpdateUser.forEach((data)=>{
        test(`${data.testId}: ${data.description}`,async()=>{
            const response=await userAPI.updateUser(data.username,data.payload);

            const actualstatus=await response.status();
            await expect(actualstatus).toBe(data.expectedStatus);

             if(data.expectedBody || data.expectedSchema){

                const actualBody= await response.json();
                console.log(`TC: ${data.testId}, response: `,actualBody);

                if(data.expectedbody){
                    responsecheckOBJ.checkExactBody(actualBody,data.expectedBody);
                }
                if(data.expectedSchema){
                    responsecheckOBJ.checkSchema(actualBody,data.expectedSchema);
                }

            }

        })
    })

    

})