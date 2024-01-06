using BlazorWasm.Quotlets.Models;
using System.Net.Http.Json;

namespace BlazorWasm.Quotlets.Services
{
    public class QuotletsService
    {
        private readonly HttpClient _httpClient;
        private static List<UserModel> Users = null;
        private static List<QuotletsModel> Quotlets = null;

        public QuotletsService(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public async Task<QuotletsResponseModel?> GetQuotlets
            (int pageNo = 1, int pageSize = 12)
        {
            if (Quotlets is null)
            {
                var result = await GetData<QuotletsModel>("data/Quotlets.json");
                Quotlets = result!;
            }
            var count = Quotlets!.Count();
            var totalPage = count / pageSize;
            if (totalPage % pageSize == 0)
                totalPage++;
            var model = new QuotletsResponseModel
            {
                Data = Quotlets!.Skip((pageNo - 1) * pageSize).Take(pageSize).ToList(),
                TotalPage = totalPage,
            };
            return model;
        }

        public async Task<QuotletsResponseModel?> GetQuotlets
            (string userName, int pageNo = 1, int pageSize = 12)
        {
            if (Quotlets is null)
            {
                var result = await GetData<QuotletsModel>("data/Quotlets.json");
                Quotlets = result!;
            }
            var user = Users.FirstOrDefault(x => x.UserName == userName)!;
            var quotlets = Quotlets.Where(x => x.UserId == user.UserId).ToList()!;
            var count = quotlets!.Count();
            var totalPage = count / pageSize;
            if (totalPage % pageSize == 0)
                totalPage++;
            var model = new QuotletsResponseModel
            {
                Data = quotlets!.Skip((pageNo - 1) * pageSize).Take(pageSize).ToList(),
                TotalPage = totalPage,
            };
            return model;
        }

        public async Task<List<UserModel>> GetUsers()
        {
            if (Users is not null) return Users;
            var result = await GetData<UserModel>("data/User.json");
            Users = result!;
            return Users;
        }

        public async Task<UserModel> GetUser(string userName)
        {
            if (Users is null)
                await GetUsers();
            return Users!.FirstOrDefault(x => x.UserName == userName)!;
        }

        private async Task<List<T>?> GetData<T>(string fileName)
        {
            return await _httpClient.GetFromJsonAsync<List<T>>(fileName);
        }
    }
}
