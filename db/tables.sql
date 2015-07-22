USE `map`;

DROP TABLE IF EXISTS `poi`;

CREATE TABLE `poi` (
	`id` TINYINT UNSIGNED NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(255) NOT NULL,
	`type` ENUM ('Ключар', 'Аптека', 'Железария', 'Магазин', 'Копирен център', 'АТМ') NOT NULL,
	`description` VARCHAR(255) NULL DEFAULT NULL,
	`latitude` FLOAT (10, 6) NOT NULL,
	`longitude` FLOAT (10, 6) NOT NULL,
	`image` VARCHAR(255) NULL DEFAULT NULL,
	`address` VARCHAR(255) NULL DEFAULT NULL,
	`working_hours` VARCHAR(255) NULL DEFAULT NULL,
	`account` ENUM ('Normal', 'Silver', 'Gold', 'Platinum') NOT NULL DEFAULT 'Normal',
	`phone` VARCHAR(255) NULL DEFAULT NULL,
	PRIMARY KEY (`id`)
) ENGINE=INNODB;

INSERT INTO poi(account, address, description, id, image, latitude, longitude, name, phone, type, working_hours) VALUES
	('Normal','ул.проф.Архитект Храбър Попов',NULL,1,'pic1.jpg',42.644655,23.339647,'Супермаркет Перла',NULL,'Магазин','7:00-22:00'),
	('Normal','ул.проф.д-р Иван Странски',NULL,2,'pic2.jpg',42.643364,23.338624,'Супермаркет Рекорд',NULL,'Магазин','7:30-22:00'),
	('Normal','ул.проф.Архитект Храбър Попов','принтиране - 4 ст\nксерокс - 3 ст',3,'pic3.jpg',42.6446,23.338319,'Център за набор и печат',NULL,'Копирен център','8:00-22:00'),
	('Normal','ул.проф.Архитект Храбър Попов',NULL,4,'pic4.jpg',42.644668,23.339851,'Банкомат ProCredit Bank',NULL,'АТМ','non stop'),
	('Normal','ул.проф.д-р Иван Странски',NULL,5,'pic5.jpg',42.642943,23.341186,'Аптека',NULL,'Аптека','non stop');
