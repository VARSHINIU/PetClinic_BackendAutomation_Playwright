export const CreateUserTestData=[
    {
        testId:"TC_USER_001",
        description:"Create single user with valid data",
        payload:[
        {
            id: 0,
            username: "varshini",
            firstName: "varsh",
            lastName: "U",
            email: "varsh@gmail.com",
            password: "Varshini1",
            phone: "1234",
            userStatus: 0
        }],
        expectedStatus: 200,
        expectedBody:{
            code: 200,
            type: "unknown",
            message: "ok"
        },
        expectedSchema:{
            code:{type: "number"},
            type: {type:"string"},
            message: {type:"string"}
        }

    },
    {
        testId:"TC_USER_002",
        description:"Create multiple valid new users",
        payload:[
                {
                    id: 1,
                    username: "john",
                    firstName: "johnson",
                    lastname: "U",
                    email: "john@gmail.com",
                    password: "Varshini1",
                    phone: "1234",
                    userStatus: 0
                },
                
                {
                    id: 2,
                    username: "ram",
                    firstName: "raam",
                    lastname: "U",
                    email: "ram@gmail.com",
                    password: "Varshini1",
                    phone: "1234",
                    userStatus: 0
                }

                ],
        expectedStatus: 200,
        expectedBody:{
            code: 200,
            type: "unknown",
            message: "ok"
        },
        expectedSchema:{
            code:{type: "number"},
            type: {type:"string"},
            message: {type:"string"}
        }
    },
    {
           testId:"TC_USER_003",
        description:"Create user with minimal reuired fields",
        payload:[
            {
                id: 1,
                username: "",
                firstName: "",
                lastname: "",
                email: "",
                password: "",
                phone: "",
                userStatus: 1
            }

            ],
        expectedStatus: 400,
        expectedBody:null,
        expectedSchema:null
    },
    {
        
        testId:"TC_USER_004",
        description:"Create user with invalid email",
        payload:[
        {
            id: 1,
            username: "john",
            firstName: "johnson",
            lastname: "U",
            email: "invalid",
            password: "Varshini1",
            phone: "1234",
            userStatus: 0
        }

        ],
        expectedStatus: 400,
        expectedBody:null,
        expectedSchema:null
    },
    {
        
        testId:"TC_USER_005",
        description:"Empty Body",
        payload:null,
        expectedStatus: 415,
        expectedBody:{
            code: 415,
            type: "unknown",  
        },
        expectedSchema:{
            code:{type:"number"},
            type:{type:"string"}
        }
    },
    {
        
        testId:"TC_USER_006",
        description:"Wrong Data Type",
        payload:[
            {
                id: "hello",
                username: "john",
                firstName: "johnson",
                lastname: "U",
                email: "invalid",
                password: "Varshini1",
                phone: "1234",
                userStatus: "hello"
            }

            ],
        expectedStatus: 500,
        expectedBody:{
            code: 500,
            type: "unknown",
            message: "something bad happened"
        },
        expectedSchema:{
            code:{type:"number"},
            type:{type:"string"},
            message:{type:"string"}
        }
    },
    {
        
        testId:"TC_USER_007",
        description:"Create user with object type",
        payload:
            {
                id: 1,
                username: "john",
                firstName: "johnson",
                lastname: "U",
                email: "invalid",
                password: "Varshini1",
                phone: "1234",
                userStatus: 1
            }
            ,
        expectedStatus: 500,
        expectedBody:{
            code: 500,
            type: "unknown",
            message: "something bad happened"
        },
        expectedSchema:{
            code:{type:"number"},
            type:{type:"string"},
            message:{type:"string"}
        }
    },
    {
        
        testId:"TC_USER_008",
        description:"Null Values",
        payload:
           [
        {
            id: 1,
            username: null,
            firstName: null,
            lastname: "U",
            email: null,
            password: null,
            phone: "1234",
            userStatus: 1
        }
    ]
            ,
        expectedStatus: 400,
        expectedBody:null,
        expectedSchema:null
    }

]