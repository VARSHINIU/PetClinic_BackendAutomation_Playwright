export class ResponseChecknew {
    constructor(expect) {
        this.expect = expect;
    }
    async checkExactBody(body, expectedBody) {
        const keys = Object.keys(expectedBody);

        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            const expectedValue = expectedBody[key];
            const actualValue = body[key];

            await this.expect(actualValue).toEqual(expectedValue);
        }
    }
    async checkSchema(body, expectedSchema) {
        const keys = Object.keys(expectedSchema)

        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            const expectedType = expectedSchema[key].type;
            const actualType = typeof body[key];

            await this.expect(actualType).toBe(expectedType);

        }
    }


}