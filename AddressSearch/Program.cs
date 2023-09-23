using AddressSearch.Models;
using AddressSearch.Services;

var builder = WebApplication.CreateBuilder(args);
builder.Services.Configure<AddressSearchDatabaseSettings>(
    builder.Configuration.GetSection("AddressSearchDatabase"));
    
var app = builder.Build();

var httpClient = new HttpClient();

app.MapGet("/{cepNumber}",  async (string cepNumber) => {
    var viaCepService = new ViaCepService(httpClient);
    var foundAddress = await viaCepService.GetAddress(cepNumber);
    if(foundAddress is null)
    {
        return Results.BadRequest(new { message = "Não existe endereços com o cep informado!" });
    }
    return foundAddress;
});

app.Run();
