using AddressSearch.Services;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

var httpClient = new HttpClient();

app.MapGet("/{cepNumber}",  async (string cepNumber) => {
    var viaCepService = new ViaCepService(httpClient);
    var foundAddress = await viaCepService.GetAddress(cepNumber);
    return foundAddress;
});

app.Run();
