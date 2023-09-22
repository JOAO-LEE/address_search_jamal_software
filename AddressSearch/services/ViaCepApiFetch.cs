using System.Net.Http;

namespace AddressSearch.Services {
    public class ViaCepService {
        private readonly HttpClient _client;
        public string viaCepUrl = "https://viacep.com.br/ws/";
        public ViaCepService(HttpClient client)
        {
            _client = client;
        }
    // public async Task<
    }
}