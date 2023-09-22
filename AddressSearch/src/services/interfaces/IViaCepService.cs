using Models.AddressSearchInterfaces;

namespace Services.ViaCepServiceInterfaces {
public interface IViaCepService {
    Task<IAddress> GetAddress(string cepNumber);
}

}
