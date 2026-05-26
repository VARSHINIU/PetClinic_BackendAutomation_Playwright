export const newPet = [
    {
        Test_id: "TC_USER_0001",
        description: "Add a new Pet to store",

        payload: {
            id: 7364364167,
            category: {
                id: 34,
                name: "American Bully"
            },
            name: "Rott Bully",
            photoUrls: [
                "https://www.google.com/imgres?q=american%20bully&imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F6%2F63%2FChampion_Charlie_Muscles_%25282%2529.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FAmerican_Bully&docid=pQgG2h3KIBefDM&tbnid=tQzaO9MSZ63aiM&vet=12ahUKEwjNh4rpidSUAxXcRWcHHbDGITEQnPAOegQIFxAB..i&w=1003&h=1020&hcb=2&ved=2ahUKEwjNh4rpidSUAxXcRWcHHbDGITEQnPAOegQIFxAB"
            ],
            tags: [
                {
                    id: 34,
                    name: "Bully"
                }
            ],
            status: "available"
        },

        expectedstatus: 200,

        expectedBody: {
            id: 7364364167,
            category: {
                id: 34,
                name: "American Bully"
            },
            name: "Rott Bully",
            photoUrls: [
                "https://www.google.com/imgres?q=american%20bully&imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F6%2F63%2FChampion_Charlie_Muscles_%25282%2529.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FAmerican_Bully&docid=pQgG2h3KIBefDM&tbnid=tQzaO9MSZ63aiM&vet=12ahUKEwjNh4rpidSUAxXcRWcHHbDGITEQnPAOegQIFxAB..i&w=1003&h=1020&hcb=2&ved=2ahUKEwjNh4rpidSUAxXcRWcHHbDGITEQnPAOegQIFxAB"
            ],
            tags: [
                {
                    id: 34,
                    name: "Bully"
                }
            ],
            status: "available"
        },
        expectedSchema:

        {
            id: {
                type: "number"
            },
            category: {
                type: "object",
                properties: {
                    id: {
                        "type": "number"
                    },
                    name: {
                        "type": "string"
                    }
                }
            },
            name: {
                type: "string"
            },
            photoUrls: {
                type: "object",
                items: {
                    type: "string",
                    format: "uri"
                }
            },
            tags: {
                type: "object",
                items: {
                    type: "object",
                    properties: {
                        id: {
                            type: "integer"
                        },
                        name: {
                            type: "string"
                        }
                    }
                }
            },
            status: {
                type: "string"
            }
        },

    },
    //Null data
    {
        Test_id: "TC_USER_0002",
        description: "Passing null payload",

        payload: null,

        expectedstatus: 415,

        expectedBody: null,
        expectedSchema:

        {
            code: { type: "number" },
            type: { type: "string" },
            message: { type: "string" }
        }
    }

]