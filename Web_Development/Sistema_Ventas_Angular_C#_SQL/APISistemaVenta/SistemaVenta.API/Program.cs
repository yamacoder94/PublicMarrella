using SistemaVenta.IOC;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//Es necesario para poder leer la linea de conexion (Connection String)
builder.Services.InyectarDependencias(builder.Configuration);

//Para activar Cors 
//Estos evitan confilictos de URL al llamar a los APIs
//permite comparitir informacion con cualquier URL
builder.Services.AddCors(option =>
{
    option.AddPolicy("NuevaPolitica", app =>
    {
        app.AllowAnyOrigin()
        .AllowAnyHeader()
        .AllowAnyMethod();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthorization();

app.UseCors("NuevaPolitica");

app.MapControllers();

app.Run();
