using System.Net.Http;
using AddressSearch.Models;
using Services.ViaCepServiceInterfaces;

namespace AddressSearch.Services {
    public class ViaCepService : IViaCepService
    {
        public HttpClient _client;
         
        public ViaCepService(HttpClient client) {
            _client = client;
        }

        public async Task<object> GetAddress(string cepNumber)
        { 
            string ViaCepUrl = $"https://viacep.com.br/ws/{cepNumber}/json"; 
           var requestMessage = new HttpRequestMessage(HttpMethod.Get, ViaCepUrl);
           requestMessage.Headers.Add("Accept", "application/json");
            var response = await _client.SendAsync(requestMessage);
             if (!response.IsSuccessStatusCode || response == null)
            {
                return default!;
            }
            var result = await response.Content.ReadFromJsonAsync<object>();
            return result!;
        }
    }
}
