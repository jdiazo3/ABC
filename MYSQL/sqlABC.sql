create database empresaABC;
USE empresaABC;

create table proveedor (
documento_pro integer not null, 
apellido_pro varchar(20), 
direccion_pro varchar(50), 
email_pro varchar(50), 
nombre varchar(20), 
vehiculos_pro integer, 
primary key (documento_pro)) engine=InnoDB
