# Test App  
### Node.js + Express + MongoDB (Docker)

This is a backend application built using **Node.js**, **Express**, and **MongoDB**, where MongoDB is run inside a **Docker container**.  
The project demonstrates proper backend structure, environment variable management, and Docker-based database setup.


##  Features

- REST API using Express
- MongoDB database (Dockerized)
- Mongoose ODM
- Environment-based configuration
- Proper error handling middleware
- Ready for Docker & production scaling


##  Tech Stack

- **Backend:** Node.js, Express
- **Database:** MongoDB
- **ORM:** Mongoose
- **Tools:** Docker, Nodemon
- **Environment Management:** dotenv


##  Prerequisites

Make sure you have the following installed:

- Node.js (v18 or above)
- Docker
- npm

## MONGODB set-up using docker (If your using traditional metod) 

1. Create a docker network :
   ```
   docker network create _network_name_
   ```
2. Run MongoDB container :
   ```
   docker run -d \
   --name mongodb \
   --network mongo-network \
   -p 27017:27017 \
   -e MONGO_INITDB_ROOT_USERNAME=username \
   -e MONGO_INITDB_ROOT_PASSWORD=password \
   mongo : version
   ```
3. Run Mongo Express (Optional) :
   ```
   docker run -d \
   --name mongo-express \
   --network mongo-network \
   -p 8081:8081 \
   -e ME_CONFIG_MONGODB_ADMINUSERNAME=username \
   -e ME_CONFIG_MONGODB_ADMINPASSWORD=password \
   -e ME_CONFIG_MONGODB_URL="mongodb://username:password@mongodb:27017" \
   mongo-express
   ```
   If your using mongo express then run the container and go to localhost 8081 in web browser ``` http://localhost:8081```
   - username : admin
   - password : pass

4. Clone the repo
   ```
   git clone https://github.com/ujwals05/test-doc
   ```
5. Install dependencies and run the application :
   ```
   npm install
   ```
   ```
   npm run dev
   ```
   

   

