export const DeleteUser=[
    {
        testId:"TC_USER_014",
        description:"delete the valid user",
        username:"varshini",
        expectedStatus:200,
        expectedBody:      
        {
            "code": 200,
            "type": "unknown",
            "message": "varshini"
        },
        expectedSchema:{
            code:{type:"number"},
            type:{type:"string"},
            message:{type:"string"}
        }

    },
    {
         testId:"TC_USER_015",
        description:"Delete the non exissitent User",
        username:"invalidUsernamenonexisted",
        expectedStatus:404,
        expectedBody:null,
        expectedSchema:null
    }
]