using TeamCard.API.Services;
using Serilog;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddSingleton<UsersDb>();
builder.Services.AddSingleton<UsersAuth>();
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var logger = new LoggerConfiguration()
    .ReadFrom.Configuration(builder.Configuration)
    .Enrich.FromLogContext()
    .Enrich.WithThreadName()
    .CreateLogger();

builder.Logging.ClearProviders();
builder.Logging.AddSerilog(logger);

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    app.UseCors(corsPolicyBuilder => corsPolicyBuilder
        .WithOrigins("https://localhost:3001")
        .AllowCredentials()

        .AllowAnyMethod()
        .AllowAnyHeader());
}

app.UseAuthentication();
app.MapControllers();
app.Run();