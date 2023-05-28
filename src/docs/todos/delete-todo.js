module.exports = {
    // Operation's method
    delete: {
        tags: ["TODO Operations"], // To which category(tag) this belongs to
        descriptions: "Deleting a Task",
        operationId: "deleteTodo", // Unique Operation ID, Don't know where's its used
        parameters: [
            // expected parameters
            {
                name: "id", // name of the param
                in: "path", // Location of param
                schema: {
                    $ref: "#/components/schemas/id", // Schema example and content will be fetched from there
                },
                required: true,
                description: "ID of the Task which has to be deletd", // Description of the Param
            },
        ],
        //  Expected Responses
        responses: {
            // response Code
            200: {
                description: "Successfully deleted TODO Task", // Response Description
            },
            404: {
                description: "Todo not Found",
            },
            500: {
                description: "Server Error",
            },
        },
    },
};
