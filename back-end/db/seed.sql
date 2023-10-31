\c songs_dev;

INSERT INTO songs (name, artist, album, time, is_favorite)
VALUES
('Clumsy', 'Fergie','The Dutches', '2006', false),
('Around the way girl', 'LL-Cool J','Mama said Knock you Out', '1990', true),
('Get man', '50 Cent and Eminem','The Massacre', '2005', true),
('Hasta Abajo', 'Don Omar','Onda Latina Summer 2010', '2010', false);

INSERT INTO songs (song_id, reviewer, title, content, rating)
VALUES
('1', 'Evan', 'My Favorite', 'This website crushes it when it comes to awesome explanations', 3),
('2', 'Evan', 'My Favorite', 'This website crushes it when it comes to inspiring me', 3),
('3', 'Evan', 'My Least Favorite', 'This website crushes it when it comes to destroying my patience', 5),
('2', 'Juliana', 'I Love Going Here', 'I finally learned how to properly fold a fitted sheet', 5),
('2', 'David', 'Cool Site', 'But I got way into adding decorative pillows everywhere', 1),
('2', 'Mr. Mingo', 'So Helpful', 'I got some awesome recommendations for a ceiling fan and some spoons', 3),
('2', 'Alison', 'A lifesaver!','Helped me get my stove cleaner than I ever imagiend possible!', 4),
('3', 'Hannah', 'Insert Confetti Emoji Here', 'I survived 6 hours at the DMV!', 4),
('3', 'Gabi', 'My Friend Hannah', 'Gets a discount if I leave a positive review, so here it is', 5);