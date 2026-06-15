from bottle import Bottle, run
from pymongo import MongoClient

app = Bottle()

client = MongoClient("mongodb://localhost:27017")
db = client["CineSoul"]
filme = db["filme"]


@app.get("/")
def lista_filme():
    html = "<h1>CineSoul - Filme</h1><ul>"
    for f in filme.find({}, {"_id": 0, "film_id": 1, "titlu": 1}).sort("film_id", 1):
        html += f'<li><a href="/film/{f["film_id"]}">{f["titlu"]}</a> (ID: {f["film_id"]})</li>'
    html += "</ul>"
    return html


@app.get("/film/<film_id:int>")
def detalii_film(film_id: int):
    f = filme.find_one({"film_id": film_id}, {"_id": 0})
    if not f:
        return '<p>Film inexistent. <a href="/">Înapoi</a></p>'

    html = f'<p><a href="/">← Înapoi</a></p>'
    html += f"<h1>{f.get('titlu','-')}</h1>"
    html += f"<p><b>An:</b> {f.get('an_lansare','-')}</p>"

    reg = f.get("regizor", {})
    html += "<h2>Regizor</h2>"
    html += f"<p>{reg.get('nume','-')} ({reg.get('nationalitate','-')})</p>"

    html += "<h2>Genuri</h2><ul>"
    for g in f.get("genuri", []):
        html += f"<li>{g.get('nume_gen','-')}</li>"
    html += "</ul>"

    html += "<h2>Actori</h2><ul>"
    for a in f.get("actori", []):
        html += f"<li>{a.get('nume','-')} (tarif: {a.get('tarif_actor','-')})</li>"
    html += "</ul>"

    html += "<h2>Ratinguri</h2><ul>"
    for r in f.get("ratinguri", []):
        html += f"<li>User {r.get('user_id','-')}: {r.get('scor_rating','-')} — {r.get('descriere_rating','')}</li>"
    if len(f.get("ratinguri", [])) == 0:
        html += "<li>Nu există ratinguri.</li>"
    html += "</ul>"

    return html


if __name__ == "__main__":
    run(app, host="0.0.0.0", port=8080, debug=True)

