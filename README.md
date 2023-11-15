## **Yelp Business Api Clone by Fatur Nangin**

This project is deployed online at [https://62teknologi-backend-test-fatur-abu-nangin.vercel.app/api/v1/businesses/](https://62teknologi-backend-test-fatur-abu-nangin.vercel.app/api/v1/businesses/)  
However if you want to clone and run it by your own, read and follow details below.

## Technologies

*   [Express.js](https://expressjs.com/): Web framework for Node.js.
*   [TypeScript](https://www.typescriptlang.org/): Typed superset of JavaScript.
*   [PostgreSQL](https://www.postgresql.org/): Relational database management system.

## Prerequisites

*   [Node.js](https://nodejs.org/): JavaScript runtime for server.
*   [npm](https://www.npmjs.com/): Node.js package manager.
*   [PostgreSQL](https://www.postgresql.org/): Database server.

## Initial Setup

Clone this repository:

Import database provided in utils folder

Install dependencies

## ENV

```plaintext
For local postgres server :
POSTGRES_USER=
POSTGRES_HOST=
POSTGRES_PASSWORD=
POSTGRES_DATABASE=
For run it on local server
PORT=5000 
```

## Running the Application

```plaintext
npm run dev
```

## API Documentation

### **Method GET**

```plaintext
pathname used for get all data: api/v1/businesses
pathname used for get data by id: api/v1/businesses/:id
pathname used for get data by its property: api/v1/businesses/search?:parameter=:value
example :
Get all : https://62teknologi-backend-test-fatur-abu-nangin.vercel.app/api/v1/businesses/
Get by id : https://62teknologi-backend-test-fatur-abu-nangin.vercel.app/api/v1/businesses/1
Get by specific property :https://62teknologi-backend-test-fatur-abu-nangin.vercel.app/api/v1/businesses/search?location=New York
```

### **Method Put**

```plaintext
pathname used for replace data by id: api/v1/businesses/:id
example json data :
{
  "name": "Central Perk",
  "location": "Los Angeles",
  "latitude": "34.05220000",
  "longitude": "-118.24370000",
  "term": "Cafe",
  "radius": 80,
  "categories": "Coffee Shop",
  "locale": "us",
  "price": "$99999",
  "open_now": false,
  "open_at": 9,
  "attributes": "cozy",
  "sort_by": "popularity"
}
```

### **Method Delete**

```plaintext
pathname used for delete data by id: api/v1/businesses/:id
example to delete data with id = 1 : https://62teknologi-backend-test-fatur-abu-nangin.vercel.app/api/v1/businesses/1
```

### **Method Create**

```plaintext
pathname used for add data: api/v1/businesses/
example json data :
{
  "name": "Sky Lounge",
  "location": "Miami",
  "latitude": "25.76170000",
  "longitude": "-80.19179020",
  "term": "Lounge",
  "radius": 120,
  "categories": "Nightclub",
  "locale": "us",
  "price": "$1000",
  "open_now": true,
  "open_at": 10,
  "attributes": "elegant",
  "sort_by": "atmosphere"
}
```
