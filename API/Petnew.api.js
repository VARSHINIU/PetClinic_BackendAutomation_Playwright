export class Petnew {

    constructor(request) {
        this.request = request;

    }

    async newPet(payload) {
        //there is not data in payload

        if (payload === null) {
            return await this.request.post(`${process.env.BASE_URL}/pet`);
        }

        else {
            return await this.request.post(`${process.env.BASE_URL}/pet`,
                {
                    headers: { "Content-Type": "application/json" },
                    data: payload
                }
            )
        }

    }

}