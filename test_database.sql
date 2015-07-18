drop database if exists sap_web_test;

create database sap_web_test;

use sap_web_test;

create table poi
(
poi_name varchar(255) not null,
owner_name varchar(255) not null,
poi_type varchar(255), /*can also use enum*/
coordinates_latitude int not null, /* probably will not remain as int type*/
coordinates_longitude int not null, /* probably will not remain as int type*/
address text not null,
owner_key varchar(10),
primary key(poi_name, coordinates_latitude, coordinates_longitude)
);

delimiter //

/* add a new poi*/
drop procedure if exists add_poi //
create procedure add_poi(in name varchar(255), in owner varchar(255), in type varchar(255),  in latitude int, in longitude int, in this_address text, in o_key varchar(10))
begin
	insert into poi values(name, owner, type, latitude, longitude, this_address, o_key);
end //

/* deletes a poi*/
drop procedure if exists delete_poi //
create procedure delete_poi(in o_key varchar(10))
begin
	delete from poi where owner_key = o_key;
end //

/* returns all information about all poi*/
drop procedure if exists get_all_poi //
create procedure get_all_poi()
begin
	select * from poi;
end //

/* returns poi specified by coordinates*/
drop procedure if exists get_poi_by_coordinates //
create procedure get_poi_by_coordinates(in latitude int, in longitude int)
begin
	select * from poi where coordinates_latitude = latitude and coordinates_longitude = longitude;
end //

/* returns poi specified by name*/
drop procedure if exists get_poi_by_name //
create procedure get_poi_by_name(in name varchar(255))
begin
	select * from poi where poi_name = name;
end //

/* returns poi specified by type*/
drop procedure if exists get_poi_by_type //
create procedure get_poi_by_type(in type varchar(255))
begin
	select * from poi where poi_type = type;
end //

/* returns poi specified by address*/
drop procedure if exists get_poi_by_address //
create procedure get_poi_by_address(in this_address text)
begin
	select * from poi where address = this_address;
end //

/* replaces the coordinates of a poi with new ones*/
drop procedure if exists update_poi_coordinates //
create procedure update_poi_coordinates(in latitude int, in longitude int, in name varchar(255), in owner varchar(255))
begin
	update poi set coordinates_latitude = latitude and coordinates_longitude = longitude where poi_name = name and owner_name = owner;
end //

/* replaces the name of a poi with new one*/
drop procedure if exists update_poi_name //
create procedure update_poi_name(in new_name varchar(255), in name varchar(255), in owner varchar(255))
begin
	update poi set poi_name = new_name where poi_name = name and owner_name = owner;
end //

/* replaces the owner of a poi with new one*/
drop procedure if exists update_poi_owner //
create procedure update_poi_owner(in new_owner varchar(255), in name varchar(255), in owner varchar(255))
begin
	update poi set owner_name = new_owner where poi_name = name and owner_name = owner;
end //

/* replaces the address key of a poi with new one*/
drop procedure if exists update_poi_address //
create procedure update_poi_address(in new_address varchar(10), in name varchar(255), in owner varchar(255))
begin
	update poi set address = new_address where poi_name = name and owner_name = owner;
end //

/* replaces the owner key of a poi with new one*/
drop procedure if exists update_poi_owner_key //
create procedure update_poi_owner_key(in new_o_key varchar(10), in name varchar(255), in owner varchar(255))
begin
	update poi set owner_key = new_o_key where poi_name = name and owner_name = owner;
end //

delimiter ;
