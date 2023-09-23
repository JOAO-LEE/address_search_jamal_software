using AddressSearch.Models;

namespace Services.ViaCepServiceInterfaces {
public interface IViaCepService {
    Task<object> GetAddress(string cepNumber);
}

}
