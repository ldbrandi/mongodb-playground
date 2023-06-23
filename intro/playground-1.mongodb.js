use('Alura_Series');

db.series.insertOne({
    "Série": "Fleabag",
    "Ano de lançamento": 2016,
    "Temporadas disponíveis": 2,
    "Linguagem": "Inglês",
    "IMDb Avaliação": 8.7
})

db.series.insertMany([
    {
        "Série": "Made in Heaven",
        "Temporadas disponíveis": 1,
        "Linguagem": "Hindi",
        "Genero": ["Drama"],
        "IMDb Avaliação": 8.3,
        "Classificação": "18+"
    },
    {
        "Série": "Homecoming",
        "Temporadas disponíveis": 2,
        "Linguagem": "Inglês",
        "Genero": ["Drama"],
        "IMDb Avaliação": 7.5,
        "Classificação": "16+"
    }
])

db.series.updateMany({"Série":{$in:["Homecoming", "Fleabag"]}},{$set: {"Classificação": "18+"}})