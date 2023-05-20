FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY ["TeamCard.API/TeamCard.API.csproj", "TeamCard.API/"]
RUN dotnet restore "TeamCard.API/TeamCard.API.csproj"
COPY . .
WORKDIR "/src/TeamCard.API"
RUN dotnet build "TeamCard.API.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "TeamCard.API.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "TeamCard.API.dll"]
