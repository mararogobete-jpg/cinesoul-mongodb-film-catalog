# CineSoul – MongoDB Film Catalog Backend

## Overview

CineSoul is a MongoDB-based backend project for a digital streaming platform that manages movies, directors, actors, genres and user ratings.

The project focuses on document-oriented database modelling, using embedded documents for information that is frequently accessed together, such as a movie's director, genres, cast and ratings. Separate collections are also used for actors and directors in order to allow independent queries and easier data management.

The repository also includes a simple Python web application built with Bottle and PyMongo, which connects to the local MongoDB database and displays the movie catalog through a basic web interface.

## Technologies Used

- MongoDB
- MongoDB Shell
- JavaScript MongoDB scripts
- Python
- Bottle
- PyMongo
- NoSQL database modelling
- Document-oriented database design
- Aggregation pipelines
- Indexing

## Database Structure

The database is named `CineSoul` and contains three main collections:

- `filme` – the main collection, containing movie information, embedded director data, genres, actors and user ratings
- `actori` – stores actor information such as name, birth date and actor fee
- `regizori` – stores director information such as name, nationality and phone number

The `filme` collection uses embedded documents and arrays to represent relationships that are usually accessed together in the application.

## Features

- Creates MongoDB collections for movies, actors and directors
- Inserts sample movie, actor and director data
- Stores genres, actors and ratings as embedded arrays inside movie documents
- Performs update operations on embedded rating data
- Performs delete operations using `$pull`
- Creates a compound index on genre and release year
- Runs MongoDB queries for filtering movies and actors
- Uses aggregation pipelines to calculate average movie ratings
- Includes a simple Bottle + PyMongo web interface for displaying movies and movie details

## Project Structure

```text
cinesoul-mongodb-film-catalog/
│
├── app/
│   └── app.py
│
├── documentation/
│   └── CineSoul_MongoDB_Documentation.docx
│
├── mongo-scripts/
│   └── cinesoul_mongodb_script.js
│
├── requirements.txt
└── README.md
```

## Example Queries

The project includes MongoDB queries and aggregations such as:

- Finding movies directed by Romanian directors
- Finding actors with a fee greater than a given value
- Filtering movies by genre and release year
- Finding movies with more than one genre
- Calculating the average rating for each movie
- Sorting movies by average rating

## How to Run

Make sure MongoDB is installed and running locally.

Run the MongoDB script from the project root:

```bash
mongosh < mongo-scripts/cinesoul_mongodb_script.js
```

The script recreates the `CineSoul` database, creates the required collections, inserts sample data, creates indexes and runs example queries.

Install Python dependencies:

```bash
pip install -r requirements.txt
```

Run the web application:

```bash
python app/app.py
```

Then open the local address in your browser:

```text
http://localhost:8080
```

## Note

The MongoDB script contains the following line:

```js
cineSoulDb.dropDatabase();
```

This resets the `CineSoul` database before recreating it. It is useful for reproducibility, but it should be commented out if the existing local database should be preserved.

## What I Learned

Through this project, I practiced NoSQL database design, document-oriented modelling, embedded documents, MongoDB queries, update and delete operations, indexing, aggregation pipelines and connecting a Python web application to a MongoDB database.
