# API Documenting using Swagger

Blog: https://www.section.io/engineering-education/documenting-node-js-rest-api-using-swagger/

## Setting-up Swagger

-   Command: `app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(docs));`
-   Syntax: `app.use('<Route Name>', swaggerUI.serve, swaggerUI.setup(<Folder Name>))`
-   Docs will be present in .js in the form of exorts. i.e **module.exports = {}**
-   These files will be present in the above mentioned **Folder Name**

## Different Files present in the Docs Folder

-   basicInfo.js

    -   This will have the basic information about your API and act as the homepage for your API.
    -   Information included are: Title, Description, OpenAPI version, Contact Info and sooo on

-   servers.js

    -   This contains information about the different servers and will have:
        -   url
        -   description

-   tags.js

    -   Tags are used in grouping different related operations. For example, in an API where you deal with users and stores, you can use tags to differentiate their respective operations.

-   components.js

    -   Components stores differnet reusable definations.
    -   They can include: schemas, parameters, responses, request body, headers, links, callbacks etc
    -   To create a dropdow kind of thing we use **type: "object"**
    -   Ex: See in components.js

-   todos/index.js

    -   This determines the Paths based on different URLs and also determines the order in which the things appears in docs

-   Inside the **todos folder** we will have seperate files for each of the routes and the **index file** will be determining the display structure.

-   We can mention a lot of things and use schemas by using the **$ref**, we previously definded.
