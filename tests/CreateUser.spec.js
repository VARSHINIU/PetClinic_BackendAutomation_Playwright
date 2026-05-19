import {test,expect,request} from "@playwright/test";
import  {User} from "../API/user.api";
import {CreateUserTestData} from "../DATA/CreateUser.data"

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


test.describe("Create list of User",()=>{
    let userAPI;

    test.beforeAll(async()=>{
        const context=await request.newContext();
        userAPI=new User(context);
    })

    
    CreateUserTestData.forEach((data)=>{
        test(`${data.testId}, ${data.description}`,async()=>{
            const response= await userAPI.createUsers(data.payload);

            //validate response status code
            const actualstatus= await response.status();
            expect(actualstatus).toBe(data.expectedStatus);

            if(data.expectedBody || data.expectedSchema){
                const actualBody= await response.json();
                console.log(`TC: ${data.testId}, response: `,actualBody);

                if(data.expectedBody){
                    checkExactBody(actualBody,data.expectedBody);
                }
                if(data.expectedSchema){
                    checkSchema(actualBody,data.expectedSchema);
                }

            }
        })
    })


})

