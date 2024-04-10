Delete from Dashboard;
Delete from HistoriaTarea;
Delete from Usuario;


INSERT INTO [dbo].[Usuario]
           ([Nombre]
           ,[Apellido]
           ,[CorreoElectronico]
           ,[Clave]
           
           ,[IdRol])
     VALUES
           ('Yamill'
           ,'Moran'
           ,'moranyamill21@gmail.com'
           ,'Marela19#'
           
           ,1)
GO

Select * from Usuario
Select * from TareaSemanal
Select * from Dashboard
Select * from HistoriaTarea

USE [warrenHills_db]
GO



INSERT INTO [dbo].[Dashboard]
           ([IdUsuario]
           ,[IdTarea]
           ,[DiaSemana])
     VALUES
           (60
           ,1
           ,'Miercoles')
GO

INSERT INTO [dbo].[Dashboard]
           ([IdUsuario]
           ,[IdTarea]
           ,[DiaSemana])
     VALUES
           (60
           ,2
           ,'Jueves')
GO




