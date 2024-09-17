Use `npm i` to install modules <br/>
Use `npm run dev` to launch program <br/>
Create .env file with 
* EMAIL = [email account]
* PASS = [google pass key]
* KEY = [key]
* DB_URL = [mongodb://<db_url>]
* URL = [localhost url]

After setting up Public and connectDB, the program will display that the database was connected, and which port it is listening on. <br/>
The database is separated in Schemas, Models, Services, Routers, and Controllers. <br/>
Schemas consists of the structure of the data type, which are turned into models in Models.js <br>
Services have the functions for creating or modifying existing data, which is called in the controller of the respective data type. <br/>
Routers link the database to Postman commands, and check for authentication tokens. <br/>
Utils, Validations, and Middleware have middleware responsible for services outside of data manipulation and creation.
