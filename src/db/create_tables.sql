
CREATE TABLE IF NOT EXISTS Ingredients (
    id INTEGER DEFAULT 1,
    nameIngredients TEXT,
    descriptionIngredients TEXT,
    uniteIngredients TEXT,
    prixUnitaireIngredients TEXT,
    PRIMARY KEY(id)
)


CREATE TABLE IF NOT EXISTS Clients (
   id INTEGER PRIMARY KEY AUTOINCREMENT,
   firstName TEXT,
   name TEXT,
   phoneNumber TEXT
);
