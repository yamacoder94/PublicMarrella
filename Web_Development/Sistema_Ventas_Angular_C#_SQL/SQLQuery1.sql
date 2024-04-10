create table Rol(
IdRol int primary key identity(1,1),
Nombre varchar(50),
FechaRegistro datetime default getdate()
)

create table Menu(
IdMenu int primary key identity(1,1),
Nombre varchar(50),
Icono varchar(50),
Url varchar(50),
)

create table MenuRol(
IdMenuRol int primary key identity(1,1),
IdMenu int references Menu(IdMenu),
IdRol int references Rol(IdRol)
)

create table Usuario(
IdUsuario int primary key identity(1,1),
NombreCompleto varchar(50),
Correo varchar(50),
IdRol int references Rol(IdRol),
Clave varchar(50),
EsActivo bit default 1,
FechaRegistro datetime default getdate()
)


create table Categoria(
IdCategoria int primary key identity(1,1),
Nombre varchar(50),
EsActivo bit default 1,
FechaRegistro datetime default getdate()
)

create table Producto(
IdProducto int primary key identity(1,1),
NombreCompleto varchar(50),
IdCategoria int references Categoria(IdCategoria),
Stock int,
Precio decimal(10,2),
EsActivo bit default 1,
FechaRegistro datetime default getdate()
)

--almacena los numeros de ventas que se van registrando
--Formato 00000x 
create table NumeroDocumento(
IdNumeroDocumento int primary key identity(1,1),
UltimoNumero int not null,
FechaRegistro datetime default getdate()
)

create table Venta(
IdVenta int primary key identity(1,1),
NumeroDocumento varchar(50),
TipoPago varchar(50),
Total decimal(10,2),
FechaRegistro datetime default getdate()
)

create table DetalleVenta(
IdDetalleVenta int primary key identity(1,1),
IdVenta int references Venta(IdVenta),
IdProducto int references Producto(IdProducto),
Cantidad int,
Precio decimal(10,2),
Total decimal(10,2)
)

ALTER AUTHORIZATION ON DATABASE::SistemaVentas TO sa;


--Inserciones
USE [SistemaVentas]
GO

INSERT INTO Rol(Nombre) VALUES
('Administrador'),('Empleado'),('Supervisor')


USE [SistemaVentas]
GO

SELECT [IdRol]
      ,[Nombre]
      ,[FechaRegistro]
  FROM [dbo].[Rol]

GO

USE [SistemaVentas]
GO

INSERT INTO [dbo].[Usuario]
           ([NombreCompleto]
           ,[Correo]
           ,[IdRol]
           ,[Clave]
           )
     VALUES
           ('Codigo estudiante'
           ,'code@example.com'
           ,1
           ,'123'
           )
GO

Select * from Usuario;

--aca se especifica el EsActivo
INSERT INTO Categoria(Nombre,EsActivo) VALUES
('Laptops',1),('Monitores',1),('Teclados',1),('Auriculares',1),('Memorias',1),('Accesorios',1)

Select * from Categoria

INSERT INTO Producto(NombreCompleto,IdCategoria,Stock,Precio,EsActivo) VALUES
('Laptop Samsung book pro',1,20,2500,1),
('Laptop Lenovo idea pad ',1,30,2200,1),
('Laptop Asus Zenbook Due',1,30,2100,1),
('Monitor Teros Gaming Te-2',2,25,1050,1),
('Monitor Samsung Curvo ',2,15,1400,1),
('Auriculares Logitech Gamer',4,15,800,1),
('Memoria Kingstone rgb',5,10,200,1),
('Ventilador Cooler Master',6,20,200,1)

Select * from Producto

INSERT INTO Menu(Nombre,Icono,Url) VALUES
('DashBoard','dashboard','/pages/dashboard'),
('Usuarios','group','/pages/usuarios'),
('Productos','collections_bookmark','/pages/productos'),
('Ventas','currency_exchange','/pages/venta'),
('Historias de Ventas','edit_note','/pages/historial_venta'),
('Reportes','receipt','/pages/reportes')

Select * from Menu

Select * from MenuRol
--Se asignan todos los menus al Administrador
INSERT INTO MenuRol (IdMenu,IdRol) values
(1,1),
(2,1),
(3,1),
(4,1),
(5,1),
(6,1)

--Menu para empleados
INSERT INTO MenuRol (IdMenu,IdRol) values
(4,2),
(5,2)

--Menu para supervidor
INSERT INTO MenuRol (IdMenu,IdRol) values
(3,3),
(4,3),
(5,3),
(6,3)

--De esta forma se va creando el formato de los numeros de ventas
-- empieza desde 0
Insert into NumeroDocumento(UltimoNumero,FechaRegistro) values
(0,GETDATE())

Select * from NumeroDocumento
