# Test App
### Node.js + Express + MongoDB (Docker)

This is a backend application built using Node.js, Express, and MongoDB, where MongoDB is run inside a Docker container.  
The project demonstrates proper backend structure, environment variable management, and Docker-based database setup.


## Features

- REST API using Express
- MongoDB database running in Docker
- Mongoose ODM for database operations
- Environment-based configuration using dotenv
- Centralized error handling middleware
- Scalable and production-ready backend structure


## Tech Stack

- Backend: Node.js, Express
- Database: MongoDB
- ODM: Mongoose
- Tools: Docker, Nodemon
- Environment Management: dotenv

## Prerequisites

Ensure the following are installed on your system:

- Node.js v18 or higher
- Docker
- npm


## Environment Variables

Create a `.env` file in the project root directory.

Example:

```
MONGO_URI=mongodb://<username>:<password>@localhost:27017/test_app?authSource=admin
PORT=3000
```
## Using docker compose:
In the .yaml file directory run the following command:
```
docker compose -f <filename> up -d

```
This pulls the image from the docker hub and run multiple containers.
This file will create a default network to run multiple container in same network

To remove the image and container:
In the .yaml file folder enter this command:
```
docker compose -f <filename> down
```