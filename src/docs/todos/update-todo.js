module.exports = {
    // The PUT just marks the TODO Task as completed i.e we don't need a body
    put: {
        tags: ["TODO Operations"],
        description: "Updating a TODO",
        operationId: "updateTodo",
        parameters: [
            {
                name: "id",
                in: "path",
                schema: {
                    $ref: "#/components/schemas/id",
                },
                required: true,
                description: "Id of the TODO to be Updated",
            },
        ],
        responses: {
            // response code
            200: {
                description: "Todo updated successfully", // response desc.
            },
            // response code
            404: {
                description: "Todo not found", // response desc.
            },
            // response code
            500: {
                description: "Server error", // response desc.
            },
        },
    },
};
