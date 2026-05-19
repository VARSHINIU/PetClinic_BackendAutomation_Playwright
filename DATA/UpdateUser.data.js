
export const UpdateUser=[
    {
        testId:"TC_USER_012",
        description:"Update the user valid data",
        username:"varshini",
        payload: 
        {
        "id": 0,
        "username": "John",
        "firstName": "Ramanujan",
        "lastName": "johnson",
        "email": "johnson@gmail.com",
        "password": "john123",
        "phone": "123456",
        "userStatus": 0
        },
        expectedStatus:200,
        expectedBody: 
        {
            "code": 200,
            "type": "unknown",
            "message": "9222968140497197427"
        },
        expectedSchema:{
            code:{type:"number"},
            type:{type:"string"},
            message:{type:"string"}
        }
    },
    {
        testId:"TC_USER_013",
        description:"update the non existent user",
        username:"invalidnonexistentuser",
        payload: 
        {
        "id": 0,
        "username": "invalidnonexistentuser",
        "firstName": "Ramanujan",
        "lastName": "johnson",
        "email": "johnson@gmail.com",
        "password": "john123",
        "phone": "123456",
        "userStatus": 0
        },
        expectedStatus:404,
        expectedBody: null,
        expectedSchema:null
    }

]