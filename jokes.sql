CREATE TABLE jokes (
    id serial primary key,
    whoseJoke varchar(120),
    jokeQuestion varchar(120),
    punchLine varchar(120),
    funniness INT DEFAULT 1
    );

INSERT INTO "jokes"(whoseJoke, jokeQuestion, punchLine) VALUES
('Danny', 'Why do scuba divers fall backwards out of boats?','If they fell forwards they’d still be in the boat!'),
('Luke', 'Twofish are in a tank. What did one fish say to the other?','Do you know how to drive this thing?'),
('Millie', 'What do you call a pile of cats?', 'A meowntain!'),
('dEv', 'Why should you not play cards in the forest?', 'Too many Cheetahs!'),
('Scott', 'I went to the zoo the other day, it had one dog...', 'It was a shih tzu');

SELECT jokes.id, authors.whosejoke, jokes.jokequestion, jokes.punchline, jokes.funniness
    FROM
        jokes
        JOIN authors ON jokes.authors_id = authors.id;



INSERT INTO jokes(whosejoke, jokequestion, punchline, funniness) VALUES ($1, $2, $3, $4)
