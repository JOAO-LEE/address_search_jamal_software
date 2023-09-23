using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

using AddressSearch.Models.Interfaces;

namespace AddressSearch.Models {
public class Address : IAddress
{   [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get ; set ; }
    public string? Cep { get ; set ; }
    public string? Logradouro { get ; set ; }
    public string? Complemento { get  ; set ; }
    public string? Bairro { get ; set ; }
    public string? Localidade { get ; set ; }
    public string? Uf { get ; set ; }
    public string? Ibge { get ; set ; }
    public string? Gia { get ; set ; }
    public string? Ddd { get ; set ; }
    public string? Siafi { get ; set ; }
}
}