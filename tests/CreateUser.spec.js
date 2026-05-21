import {test,expect,request} from "@playwright/test";
import  {User} from "../API/user.api";
import {CreateUserTestData} from "../DATA/CreateUser.data"

function checkExactBody(body, expectedBody){  //check utils folder
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
        const context=await request.newContext();   //  created a new, isolated APIRequestContext.
        userAPI=new User(context); //passed to User api as contructor need to initialize
    })

    
    CreateUserTestData.forEach((data)=>{  // getting each data from the Data file
        test(`${data.testId}, ${data.description}`,async()=>{   // passing the each test id and description
            const response= await userAPI.createUsers(data.payload);   // accessing the APi request by passing the request details

            //validate response status code
            const actualstatus= await response.status(); //extracts the actual response status code
            expect(actualstatus).toBe(data.expectedStatus); // compare the actual code with expected code

            if(data.expectedBody || data.expectedSchema){  //check whetherthe data file contaains the expected body or expected schema
                const actualBody= await response.json();  //extract the response body
                console.log(`TC: ${data.testId}, response: `,actualBody);  // prints actual response body in terminal

                if(data.expectedBody){ //if it contains the expected body then it will call the chcekbody function to validate the response body
                    checkExactBody(actualBody,data.expectedBody);  // pasing arguments for the function
                }
                if(data.expectedSchema){  //if it contains the expected schema then it will execute the checkschema function to validate the response sschema validation
                    checkSchema(actualBody,data.expectedSchema); //passing  argumentss for the function
                }

            }
        })
    })


})

