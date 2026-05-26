import { test, expect, request } from '@playwright/test';
import { Petnew } from '../API/Petnew.api';
import { newPet } from '../data/newPet.data'
import { ResponseChecknew } from '../UTILS/ResponseChecknew'

test.describe("Add a new Pet", () => {
    let petAPI;
    let Utils;

    test.beforeAll(async () => {
        const context = await request.newContext();

        petAPI = new Petnew(context);
        Utils = new ResponseChecknew(expect);
    });

    newPet.forEach((data) => {
        test(`${data.Test_id}, ${data.description}`, async () => {
            const response = await petAPI.newPet(data.payload)

            const actualStatus = await response.status();
            await expect(actualStatus).toBe(data.expectedstatus);

            if (data.expectedBody || data.expectedSchema) {
                const actualBody = await response.json();
                console.log(actualBody)

                if (data.expectedBody) {
                    Utils.checkExactBody(actualBody, data.expectedBody)
                }
                if (data.expectedSchema) {
                    Utils.checkSchema(actualBody, data.expectedSchema)
                }
            }
        })
    })
})