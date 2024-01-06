using System.Net.Http.Json;

namespace BlazorWasm.Quotlets.Services
{
    public class QuotletsService
    {
        private readonly HttpClient _httpClient;

        public QuotletsService(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        private async Task<List<T>?> GetData<T>(string fileName)
        {
            return await _httpClient.GetFromJsonAsync<List<T>>(fileName);
        }
    }
}
