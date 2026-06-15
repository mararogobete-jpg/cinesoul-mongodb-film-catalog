// CineSoul MongoDB Film Catalog
// MongoDB script for creating the database, collections, sample data, indexes,
// queries and aggregation pipelines.
//
// How to run:
// mongosh < mongo-scripts/cinesoul_mongodb_script.js

const cineSoulDb = db.getSiblingDB("CineSoul");

// Reset database so the script can be run multiple times.
cineSoulDb.dropDatabase();

// Create collections
cineSoulDb.createCollection("actori");
cineSoulDb.createCollection("regizori");
cineSoulDb.createCollection("filme");

// Insert actors
cineSoulDb.actori.insertMany([
  {
    _id: 100001,
    nume: "Mihai Popescu",
    data_nastere: ISODate("1985-04-12T00:00:00Z"),
    tarif_actor: 5000.00
  },
  {
    _id: 100002,
    nume: "Ioana Ionescu",
    data_nastere: ISODate("1990-07-23T00:00:00Z"),
    tarif_actor: 4200.50
  },
  {
    _id: 100003,
    nume: "Andrei Vasilescu",
    data_nastere: ISODate("1978-11-05T00:00:00Z"),
    tarif_actor: 7500.00
  },
  {
    _id: 100004,
    nume: "Elena Dumitrescu",
    data_nastere: ISODate("1982-02-17T00:00:00Z"),
    tarif_actor: 6300.75
  },
  {
    _id: 100005,
    nume: "Cristina Marinescu",
    data_nastere: ISODate("1995-09-30T00:00:00Z"),
    tarif_actor: 3100.00
  },
  {
    _id: 100006,
    nume: "George Stan",
    data_nastere: ISODate("1988-12-01T00:00:00Z"),
    tarif_actor: 5800.25
  },
  {
    _id: 100007,
    nume: "Laura Mihăilescu",
    data_nastere: ISODate("1975-06-15T00:00:00Z"),
    tarif_actor: 6900.90
  }
]);

// Insert directors
cineSoulDb.regizori.insertMany([
  {
    _id: 1001,
    nume: "Radu Muntean",
    numar_telefon: "0722123456",
    nationalitate: "Român"
  },
  {
    _id: 1002,
    nume: "Sofia Martinez",
    numar_telefon: null,
    nationalitate: "Spaniolă"
  },
  {
    _id: 1003,
    nume: "Kenji Takahashi",
    numar_telefon: "0755432109",
    nationalitate: "Japonez"
  },
  {
    _id: 1004,
    nume: "Anca Damian",
    numar_telefon: "0744112233",
    nationalitate: null
  },
  {
    _id: 1005,
    nume: "Michael O'Connor",
    numar_telefon: "0788001122",
    nationalitate: "Irlandez"
  },
  {
    _id: 1006,
    nume: "Fatima El Hassan",
    numar_telefon: null,
    nationalitate: "Marocană"
  },
  {
    _id: 1007,
    nume: "Luca Bianchi",
    numar_telefon: "0799556677",
    nationalitate: "Italian"
  }
]);

// Insert movies
cineSoulDb.filme.insertMany([
  {
    film_id: 100001,
    titlu: "4 luni, 3 săptămâni și 2 zile",
    an_lansare: 2007,
    regizor: {
      regizor_id: 1002,
      nume: "Sofia Martinez",
      nationalitate: "Spaniolă"
    },
    genuri: [
      { gen_id: 11111, nume_gen: "Dramă" }
    ],
    actori: [
      {
        actor_id: 100001,
        nume: "Mihai Popescu",
        tarif_actor: 5000.00
      }
    ],
    ratinguri: [
      {
        user_id: 100001,
        scor_rating: 8,
        descriere_rating: "Film profund cu o poveste captivantă."
      }
    ]
  },
  {
    film_id: 100002,
    titlu: "Poziția copilului",
    an_lansare: 2013,
    regizor: {
      regizor_id: 1005,
      nume: "Michael O'Connor",
      nationalitate: "Irlandez"
    },
    genuri: [
      { gen_id: 11111, nume_gen: "Dramă" },
      { gen_id: 55555, nume_gen: "Romantic" }
    ],
    actori: [
      {
        actor_id: 100002,
        nume: "Ioana Ionescu",
        tarif_actor: 4200.50
      },
      {
        actor_id: 100001,
        nume: "Mihai Popescu",
        tarif_actor: 5000.00
      }
    ],
    ratinguri: [
      {
        user_id: 100002,
        scor_rating: 9,
        descriere_rating: "Un film puternic, cu o regie excelentă."
      }
    ]
  },
  {
    film_id: 100003,
    titlu: "Moartea domnului Lăzărescu",
    an_lansare: 2005,
    regizor: {
      regizor_id: 1001,
      nume: "Radu Muntean",
      nationalitate: "Român"
    },
    genuri: [
      { gen_id: 11111, nume_gen: "Dramă" },
      { gen_id: 22222, nume_gen: "Comedie" }
    ],
    actori: [
      {
        actor_id: 100003,
        nume: "Andrei Vasilescu",
        tarif_actor: 7500.00
      },
      {
        actor_id: 100002,
        nume: "Ioana Ionescu",
        tarif_actor: 4200.50
      }
    ],
    ratinguri: [
      {
        user_id: 100003,
        scor_rating: 7,
        descriere_rating: "Un film greoi cu un mesaj puternic."
      }
    ]
  },
  {
    film_id: 100004,
    titlu: "După dealuri",
    an_lansare: 2012,
    regizor: {
      regizor_id: 1002,
      nume: "Sofia Martinez",
      nationalitate: "Spaniolă"
    },
    genuri: [
      { gen_id: 11111, nume_gen: "Dramă" }
    ],
    actori: [
      {
        actor_id: 100004,
        nume: "Elena Dumitrescu",
        tarif_actor: 6300.75
      }
    ],
    ratinguri: [
      {
        user_id: 100004,
        scor_rating: 6,
        descriere_rating: "Film lent, dar cu o atmosferă intensă."
      }
    ]
  },
  {
    film_id: 100005,
    titlu: "Undeva la Palilula",
    an_lansare: 2012,
    regizor: {
      regizor_id: 1004,
      nume: "Anca Damian",
      nationalitate: null
    },
    genuri: [
      { gen_id: 22222, nume_gen: "Comedie" },
      { gen_id: 66666, nume_gen: "SF" }
    ],
    actori: [
      {
        actor_id: 100005,
        nume: "Cristina Marinescu",
        tarif_actor: 3100.00
      }
    ],
    ratinguri: [
      {
        user_id: 100005,
        scor_rating: 9,
        descriere_rating: "Un film original, mix de comedie și dramă."
      }
    ]
  }
]);

// Update operation: update one embedded rating
cineSoulDb.filme.updateOne(
  {
    film_id: 100005,
    "ratinguri.user_id": 100005
  },
  {
    $set: {
      "ratinguri.$.scor_rating": 10
    }
  }
);

// Delete operation: remove one embedded rating
cineSoulDb.filme.updateOne(
  { film_id: 100004 },
  {
    $pull: {
      ratinguri: { user_id: 100004 }
    }
  }
);

// Create compound index
cineSoulDb.filme.createIndex(
  { "genuri.nume_gen": 1, an_lansare: -1 },
  { name: "idx_gen_an" }
);

// Example queries

// 1. Movies directed by Romanian directors
print("Movies directed by Romanian directors:");
printjson(
  cineSoulDb.filme.find(
    { "regizor.nationalitate": "Român" },
    { _id: 0, titlu: 1, an_lansare: 1, "regizor.nume": 1 }
  ).sort({ an_lansare: -1 }).toArray()
);

// 2. Actors with fee greater than 6000
print("Actors with fee greater than 6000:");
printjson(
  cineSoulDb.actori.find(
    { tarif_actor: { $gt: 6000 } },
    { _id: 1, nume: 1, tarif_actor: 1 }
  ).sort({ tarif_actor: -1 }).toArray()
);

// 3. Drama movies sorted by release year
print("Drama movies sorted by release year:");
printjson(
  cineSoulDb.filme.find(
    { "genuri.nume_gen": "Dramă" },
    { _id: 0, titlu: 1, an_lansare: 1 }
  ).sort({ an_lansare: -1 }).toArray()
);

// 4. Movies with more than one genre
print("Movies with more than one genre:");
printjson(
  cineSoulDb.filme.aggregate([
    { $unwind: "$genuri" },
    {
      $group: {
        _id: "$film_id",
        titlu: { $first: "$titlu" },
        nr_genuri: { $sum: 1 }
      }
    },
    { $match: { nr_genuri: { $gt: 1 } } },
    {
      $project: {
        _id: 0,
        film_id: "$_id",
        titlu: 1,
        nr_genuri: 1
      }
    },
    { $sort: { nr_genuri: -1, titlu: 1 } }
  ]).toArray()
);

// 5. Average rating for each movie
print("Average rating for each movie:");
printjson(
  cineSoulDb.filme.aggregate([
    { $unwind: "$ratinguri" },
    {
      $group: {
        _id: "$film_id",
        titlu: { $first: "$titlu" },
        rating_mediu: { $avg: "$ratinguri.scor_rating" },
        nr_ratinguri: { $sum: 1 }
      }
    },
    {
      $project: {
        _id: 0,
        film_id: "$_id",
        titlu: 1,
        rating_mediu: { $round: ["$rating_mediu", 2] },
        nr_ratinguri: 1
      }
    },
    { $sort: { rating_mediu: -1, nr_ratinguri: -1 } }
  ]).toArray()
);

print("CineSoul database created successfully.");