module.exports = {
    post: {
        tags: ["TODO Operations"],
        description: "Create a TODO",
        operationId: "createTodo",
        parameters: [], // No params
        requestBody: {
            content: {
                "application.json": {
                    schema: {
                        $ref: "#/components/schemas/TodoInput",
                    },
                },
            },
        },
        responses: {
            // response code
            201: {
                description: "Todo created successfully", // response desc
            },
            // response code
            500: {
                description: "Server error", // response desc
            },
        },
    },
};
