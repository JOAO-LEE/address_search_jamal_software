using System.Net.Http;
using Models.AddressSearchInterfaces;
using Services.ViaCepServiceInterfaces;

namespace AddressSearch.Services {
    public class ViaCepService : IViaCepService
    {
        public HttpClient _client;
         
        public ViaCepService(HttpClient client) {
            _client = client;
        }

        public async Task<IAddress> GetAddress(string cepNumber)
        {  string ViaCepUrl = $"https://viacep.com.br/ws/{cepNumber}/json"; 
           var requestMessage = new HttpRequestMessage(HttpMethod.Get, ViaCepUrl);
            var response = await _client.SendAsync(requestMessage);
             if (!response.IsSuccessStatusCode)
            {
                return default!;
            }
            var result = await response.Content.ReadFromJsonAsync<IAddress>();
            return result;
        }
    }
}
