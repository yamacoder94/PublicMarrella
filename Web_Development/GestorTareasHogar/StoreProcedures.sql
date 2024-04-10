--Store procedures
--Consulta Historial de Tareas 
CREATE PROCEDURE ConsultaHistoriaTareas 
AS
BEGIN
	SELECT 
		(SELECT Nombre from Usuario WHERE Usuario.IdUsuario = HistoriaTarea.IdUsuario ) AS Nombre
        ,(SELECT Descripcion from TareaSemanal WHERE TareaSemanal.IdTarea = HistoriaTarea.IdTarea) AS Tarea
		,[Fecha_Finalizacion]
		,[Comentario]
		
    FROM 
        [dbo].[HistoriaTarea];

END
GO


EXEC ConsultaHistoriaTareas
GO

-- Consulta Tareas usuarios 
CREATE PROCEDURE ConsultaTareasUsuarios 
AS
BEGIN
	SELECT 
		(SELECT Nombre from Usuario WHERE Usuario.IdUsuario = Dashboard.IdUsuario ) AS Nombre
        ,(SELECT Descripcion from TareaSemanal WHERE TareaSemanal.IdTarea = Dashboard.IdTarea) AS Tarea
		,DiaSemana
		
    FROM 
        [dbo].[Dashboard];

END
GO

EXEC ConsultaTareasUsuarios
GO

-- Consulta Tareas usuarios 
CREATE PROCEDURE TareasUsuarioUnico 
	@IDUSUARIO INT
AS
BEGIN
	
WITH dash AS (
SELECT [Id]
      ,[IdUsuario]
      ,[IdTarea]
      ,[DiaSemana]
  FROM [dbo].[Dashboard]
),
usuario AS (
SELECT [IdUsuario]
      ,[Nombre]
      ,[Apellido]
      ,[CorreoElectronico]
      ,[Clave]
      ,[ImgPerfil]
      ,[IdRol]
  FROM [dbo].[Usuario]
),
tarea1 AS (
    SELECT * 
    FROM TareaSemanal
)
SELECT 
	--usuario.Nombre,
	tarea1.Descripcion AS tarea,
    dash.DiaSemana
FROM 
    dash
JOIN 
    usuario ON dash.IdUsuario = usuario.IdUsuario
JOIN 
    tarea1 ON dash.IdTarea = tarea1.IdTarea

Where @IDUSUARIO = dash.IdUsuario 
END
GO

EXEC TareasUsuarioUnico 1;

Select * from Usuario



-- Inserta en Dash
CREATE PROCEDURE InsertaDash 
	
	@IDUSUARIO INT
	,@IDTAREA INT
	,@DIASEMANA VARCHAR(100)
AS
BEGIN

INSERT INTO [dbo].[Dashboard]
           ([IdUsuario]
           ,[IdTarea]
           ,[DiaSemana])
     VALUES
           (@IDUSUARIO
           ,@IDTAREA
           ,@DIASEMANA)
END
GO

EXEC InsertaDash 1, 2, 'Domingo'

-- Inserta en Historial
CREATE PROCEDURE InsertarHistorial 
	
	@IDT INT
	,@IDUSUARIO INT
	,@FECHA Date
	,@COMENTARIOS VARCHAR(100)
AS
BEGIN


INSERT INTO [dbo].[HistoriaTarea]
           ([IdTarea]
           ,[IdUsuario]
           ,[Fecha_Finalizacion]
           ,[Comentario])


     VALUES
           (@IDT
           ,@IDUSUARIO
		   ,@FECHA
           ,@COMENTARIOS)
END
GO


-- Inserta en Usuario
CREATE PROCEDURE InsertaUsuario 
	
	@NOMBRE VARCHAR(100)
	,@APELLIDO VARCHAR(100)
	,@CORREOELECTRONICO VARCHAR(100)
	,@CLAVE VARCHAR(100)
	,@IDROLL INT
AS
BEGIN


INSERT INTO [dbo].[Usuario]
           ([Nombre]
           ,[Apellido]
           ,[CorreoElectronico]
           ,[Clave]
           
           ,[IdRol])
     VALUES
           (@NOMBRE
           ,@APELLIDO
           ,@CORREOELECTRONICO
           ,@CLAVE
           ,@IDROLL)
END
GO

