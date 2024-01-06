using BlazorWasm.Quotlets.Models;
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
        public async Task<QuotletsResponseModel?> GetQuotlets
            (int pageNo = 1,int pageSize = 12)
        {
           var quotList = await GetData<QuotletsModel>("quotlets/Quotlets.json");
            var count = quotList!.Count();
            var totalPage = count / pageSize;
            if (totalPage % pageSize == 0)
                totalPage++;
            var model = new QuotletsResponseModel
            {
                Data = quotList!.Skip((pageNo-1) * pageSize).Take(pageSize).ToList(),
                TotalPage = totalPage,
            };
            return model;
        }

        private async Task<List<T>?> GetData<T>(string fileName)
        {
            return await _httpClient.GetFromJsonAsync<List<T>>(fileName);
        }
    }
}
