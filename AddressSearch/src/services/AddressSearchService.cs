using AddressSearch.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace AddressSearch.Services;

public class AddressSearchServ
{
    private readonly IMongoCollection<Address> _addressCollection;

    public AddressSearchServ(
        IOptions<AddressSearchDatabaseSettings> AddressSearchDatabaseSettings)
    {
        var mongoClient = new MongoClient(
            AddressSearchDatabaseSettings.Value.ConnectionString);

        var mongoDatabase = mongoClient.GetDatabase(
            AddressSearchDatabaseSettings.Value.DatabaseName);

        _addressCollection = mongoDatabase.GetCollection<Address>(
            AddressSearchDatabaseSettings.Value.BooksCollectionName);
    }

    public async Task<Address?> GetAsync(string cepNumber) =>
        await _addressCollection.Find(x => x.Cep == cepNumber).FirstOrDefaultAsync();

    public async Task CreateAsync(Address newAddress) =>
        await _addressCollection.InsertOneAsync(newAddress);
}