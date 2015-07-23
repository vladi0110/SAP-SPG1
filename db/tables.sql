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

    
INSERT INTO poi(name, type, description, latitude, longitude, image, address, working_hours, account, phone) VALUES
('Супермаркет Перла', 'Магазин', null, 42.644655, 23.339647, 'pic1.jpg', 
'ул.проф.Архитект Храбър Попов 14', 'понеделник - неделя 7:30-24:00', 'normal', null),
('Супермаркет Рекорд', 'Магазин', null, 42.643364, 23.338624, 'pic2.jpg',
'ул.проф.д-р Иван Странски', 'понеделник - неделя 8:00-24:00', 'normal', null),
('Център за набор и печат', 'Копирен център', 'принтиране - 4 ст\nксерокс - 3 ст', 42.644600, 23.338319, 'pic3.jpg',
'ул.проф.Архитект Храбър Попов', 'понеделник - петък 9:00-21:00', 'normal', null),
('Банкомат ProCredit Bank', 'АТМ', null, 42.644668, 23.339851, 'pic4.jpg',
'ул.проф.Архитект Храбър Попов', 'non stop', 'normal', null),
('Аптека', 'Аптека', null, 42.642943, 23.341186, 'pic5.jpg',
'ул.проф.д-р Иван Странски', 'non stop', 'normal', null),
('Банкомат Central Cooperative Bank', 'АТМ', null, 42.643184, 23.339693, 'pic6.jpg',
'ул.проф.д-р Иван Странски', 'non stop', 'normal', null),
('Копирен център The Net', 'Копирен център', null, 42.642879, 23.339189, 'pic7.jpg',
'Студентски град блок 59', '8:00 - 23:00', 'normal', null),
('Дигитален копирен център Кинтек', 'Копирен център', 'Широкоформатно принтиране, сканиране и копиране', 42.642594, 23.342128, 'pic8.jpg',
'ул.акад. Борис Стефанов', '8:00 - 22:00', 'normal', null),
('Домашни потреби', 'Железария', null, 42.642873, 23.340565, 'pic9.jpg',
'ул.проф.д-р Иван Странски', '9:00 - 20:00', 'normal', null),
('Ключар', 'Ключар', null, 42.643752, 23.342021, 'pic10.jpg',
'ул.акад. Борис Стефанов', '9:00 - 18:00', 'normal', null),
('Банкомат ProCredit Bank', 'АТМ', null, 42.649685, 23.341884, 'pic11.jpg',
'ул.акад. Борис Стефанов', 'non stop', 'normal', null),
('Фантастико', 'Магазин', null, 42.650180, 23.341598, 'pic12.jpg',
'ул.акад. Борис Стефанов №12', 'non stop', 'normal', null);
