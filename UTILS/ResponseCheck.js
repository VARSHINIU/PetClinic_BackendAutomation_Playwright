export class ResponseCheck{

    constructor(expect){
        this.expect=expect;  // passing the expect funstion from test case to use here
    }

     async checkExactBody(body, expectedBody){ // passes  the actual body and expected body
        const keys= Object.keys(expectedBody);  //extracting all keys from the expected body
    
        for(let i=0;i<keys.length; i++){
            const key=keys[i];  // extarcting each key name from all keys
            const expectedValue=expectedBody[key]; //retrieve the value of each key from expected body
            const actualValue=body[key]; // retrieve the value of each key from actual response body
    
           await  this.expect(actualValue).toBe(expectedValue);  // compare both values are same, through we confirm the response is same aas expected
     
        }
    }
    
     async checkSchema(body,expectedSchema){ // passes  the actual body and expected schema
        const keys= Object.keys(expectedSchema); //extracting all keys from the expected body
    
    
        for(let i=0;i<keys.length;i++){
            const key=keys[i]; // extarcting each key name from all keys
            const expectedType=expectedSchema[key].type; //retrieve the value of each key's type property value
            const actualType=typeof body[key];  // get the value of each key and predict  the data type using JS function "typeof"

    
            await this.expect(actualType).toBe(expectedType); //compare the both values
        }
    }
    

}