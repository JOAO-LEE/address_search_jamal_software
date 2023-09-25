using AddressSearch.Models;
using AddressSearch.Services;
using MongoDB.Bson;
using MongoDB.Driver;

var builder = WebApplication.CreateBuilder(args);
builder.Services.Configure<AddressSearchDatabaseSettings>(builder.Configuration.GetSection("AddressSearchDatabase"));
builder.Services.AddSingleton<AddressSearchService>();
var app = builder.Build();

var httpClient = new HttpClient();

app.MapGet("/{cepNumber}", async (string cepNumber, AddressSearchService addressSearchService) => {

    var foundAddressInDB = await addressSearchService.GetAddressByCepNumber(cepNumber);
    if(foundAddressInDB is null )
    {
        var viaCepService = new ViaCepService(httpClient);
        var foundAddressExternal = await viaCepService.GetAddress(cepNumber);
        if (foundAddressExternal is null)
        {
        return Results.BadRequest(new { message = "Não existe endereços com o cep informado!" });
        }
    
    return foundAddressExternal;
    }
    return foundAddressInDB;
});

app.Run();
