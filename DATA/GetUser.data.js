import { type } from "node:os";

export const getUserData = [
    {
        testId: "TC_USER_009",
        description: "get single user",
        username: "varshini",
        expectedStatus: 200,
        expectedbody:
        {
            id: 9223372036854755843,
            username: "varshini",
            firstName: "varsh",
            lastName: "U",
            email: "varsh@gmail.com",
            password: "Varshini1",
            phone: "1234",
            userStatus: 0
        },
        expectedSchema: {
            id: { type: "number" },
            username: { type: "string" },
            firstName: { type: "string" },
            lastName:{type:"string"},
            email: { type: "string" },
            password:{type:"string"},
            phone:{type:"string"},
            userStatus: { type: "number" }
        }
    },
    {
        testId: "TC_USER_010",
        description: "Get user without username",
        username: null,
        expectedStatus: 405,
        expectedbody: null,
        expectedSchema: null
    },
    {
        testId: "TC_USER_011",
        description: "get not existent user",
        username: "invalidusernamenotexist",
        expectedStatus: 404,
        expectedbody:
        {
            code: 1,
            type: "error",
            message: "User not found"
        },
        expectedSchema: {
            code: { type: "number" },
            type: { type: "string" },
            message: { type: "string" }
        }
    }

]