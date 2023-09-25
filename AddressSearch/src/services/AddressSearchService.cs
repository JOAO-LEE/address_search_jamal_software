using AddressSearch.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace AddressSearch.Services;

public class AddressSearchService
{
    private readonly IMongoCollection<Address> _address;

    public AddressSearchService(
        IOptions<AddressSearchDatabaseSettings> AddressSearchDatabaseSettings)
    {
        var mongoClient = new MongoClient(
            AddressSearchDatabaseSettings.Value.ConnectionString);

        var mongoDatabase = mongoClient.GetDatabase(
            AddressSearchDatabaseSettings.Value.DatabaseName);

        _address = mongoDatabase.GetCollection<Address>(
            AddressSearchDatabaseSettings.Value.AddressCollectionName);
    }

    public async Task<Address?> GetAddressByCepNumber(string cepNumber) =>
        await _address.Find(x => x.Cep == cepNumber).FirstOrDefaultAsync();

    public async Task CreateAddress(Address newAddress) =>
        await _address.InsertOneAsync(newAddress);
}