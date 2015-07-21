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
	`advertizer` BIT(1) NOT NULL DEFAULT '0',
	`account` ENUM ('Normal', 'Silver', 'Gold', 'Platinum') NOT NULL DEFAULT 'Normal',
	`phone` VARCHAR(255) NULL DEFAULT NULL,
	PRIMARY KEY (`id`)
) ENGINE=INNODB;

INSERT INTO poi(name, type, latitude, longitude, ) VALUES
	(''),
	(''),
	('');