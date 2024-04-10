USE [WarrenHills01]
GO


--Inserciones
--Rol
INSERT INTO [dbo].[Rol]
           ([Descripcion])
     VALUES
           ('Admin')
GO
INSERT INTO [dbo].[Rol]
           ([Descripcion])
     VALUES
           ('Usuario')
GO


SELECT [IdRol]
      ,[Descripcion]
  FROM [dbo].[Rol]

GO

--Usuario

INSERT INTO [dbo].[Usuario]
           ([Nombre]
           ,[Apellido]
           ,[CorreoElectronico]
           ,[Clave]
           ,[ImgPerfil]
           ,[IdRol])
     VALUES
           ('Yamill'
           ,'Moran'
           ,'moranyamill21@gmail.com'
           ,'Welcome123'
           ,'NA'
           ,1)
GO



SELECT [IdUsuario]
      ,[Nombre]
      ,[Apellido]
      ,[CorreoElectronico]
      ,[Clave]
      ,[ImgPerfil]
      ,[IdRol]
  FROM [dbo].[Usuario]

GO


INSERT INTO [dbo].[TareaSemanal]
           ([Descripcion])
     VALUES
           ('Sacar Basura')
GO

INSERT INTO [dbo].[TareaSemanal]
           ([Descripcion])
     VALUES
           ('Limpiar Casa')
GO



INSERT INTO [dbo].[HistoriaTarea]
           (
           [IdTarea],[IdUsuario]
           ,[Fecha_Finalizacion]
           ,[Comentario])
     VALUES
           (
           2
		   ,1
           ,'2024-03-08'
           ,'Se limpio Mars!!!')
GO

USE [WarrenHills01]
GO

SELECT [IdHistoriaTarea]
      ,[IdTarea]
      ,[IdUsuario]
      ,[Fecha_Finalizacion]
      ,[Comentario]
  FROM [dbo].[HistoriaTarea]

GO


INSERT INTO [dbo].[Gasto_Mensual]
           ([Descripcion]
           ,[Fecha_Generado]
           ,[Fecha_Vencimiento]
           ,[Id_pago])
     VALUES
           ('Luz'
           ,15
           ,30
           ,'A420420')
GO

INSERT INTO [dbo].[Gasto_Mensual]
           ([Descripcion]
           ,[Fecha_Generado]
           ,[Fecha_Vencimiento]
           ,[Id_pago])
     VALUES
           ('Internet'
           ,15
           ,30
           ,'B421421')
GO

USE [WarrenHills01]
GO

INSERT INTO [dbo].[Dashboard]
           ([IdUsuario]
           ,[IdTarea]
           ,[DiaSemana])
     VALUES
           (1
           ,2
           ,'Jueves')
GO











