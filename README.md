## Welcome to my second test - Butterfly
### installation:
- Please go to the following link and clone the repository from github.com: https://github.com/sgomezag/back-sgomezag
- Open a Windows console into the directory 
- To install the dependencies, run the following command:
npm i
- To run the project, run the following command:
npm run dev
you should get a console message saying: 
Listening on http://localhost:3001
[db] Successfully connected

## Important configuration
The database is hosted in Mongo DB Atlas, different endpoints were created in the server to be able to interact with the database, you can find them inside the project in the folder:
- **server/routes.js** // Here you can find the initial path.
- **server/components/"answers"/network.js**// Here you can find the different methods to interact with the database.
- **server/components/"answers"/model.js** // Here you can find the different data needed to interact with the database.

Practical example, in order to create a company inside the database, use your favorite API client Rest (Postman, insomnia), open it and select POST request, paste the following URL: http://localhost:3001/company/create then using a JSON send the required data in the server/company/model.js and send the request. If everything is correct, check in your Mongo DB Atlas and you will see a new record.
