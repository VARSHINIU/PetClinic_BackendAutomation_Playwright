import {test,expect,request} from "@playwright/test";
import {User} from "../API/user.api"
import {getUserData} from "../DATA/GetUser.data";

function checkExactBody(body, expectedBody){
    const keys= Object.keys(expectedBody);

    for(let i=0;i<keys.length; i++){
        const key=keys[i];
        const expectedValue=expectedBody[key];
        const actualValue=body[key];

       expect(actualValue).toBe(expectedValue);

    }
}

function checkSchema(body,expectedSchema){
    const keys= Object.keys(expectedSchema);

    for(let i=0;i<keys.length;i++){
        const key=keys[i];
        const expectedType=expectedSchema[key].type;
        const actualType=typeof body[key];

         expect(actualType).toBe(expectedType);
    }
}
test.describe("Getting User Details",()=>{
    let userAPI;

    test.beforeAll(async()=>{
        const context=await request.newContext();
        userAPI=new User(context);
    })

    getUserData.forEach((data)=>{
        test(`${data.testId}: ${data.description}`,async()=>{
             
            const response=await userAPI.GetUser(data.username);

            const actualstatus=await response.status();
            await expect(actualstatus).toBe(data.expectedStatus);

            if(data.expectedbody || data.expectedSchema){
                const actualBody= await response.json();
                console.log(`TC: ${data.testId}, response: `,actualBody);

                if(data.expectedbody){
                    checkExactBody(actualBody,data.expectedbody);
                }
                if(data.expectedSchema){
                    checkSchema(actualBody,data.expectedSchema);
                }

            }

        })
    })


})