using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Json;
using System.Threading.Tasks;
using StudyBuddySystem.Models;

namespace StudyBuddySystem.Services
{
    public class ApiService
    {
        private readonly HttpClient _httpClient;
        private const string BaseUrl = "https://localhost:5001/api";

        public ApiService(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public async Task<List<Question>> GetQuestions()
        {
            return await _httpClient.GetFromJsonAsync<List<Question>>($"{BaseUrl}/questions");
        }

        public async Task<Question> GetQuestion(int id)
        {
            return await _httpClient.GetFromJsonAsync<Question>($"{BaseUrl}/questions/{id}");
        }

        public async Task<Question> AddQuestion(Question question)
        {
            var response = await _httpClient.PostAsJsonAsync($"{BaseUrl}/questions", question);
            response.EnsureSuccessStatusCode();
            return await response.Content.ReadFromJsonAsync<Question>();
        }

        public async Task UpdateQuestion(int id, Question question)
        {
            var response = await _httpClient.PutAsJsonAsync($"{BaseUrl}/questions/{id}", question);
            response.EnsureSuccessStatusCode();
        }

        public async Task DeleteQuestion(int id)
        {
            var response = await _httpClient.DeleteAsync($"{BaseUrl}/questions/{id}");
            response.EnsureSuccessStatusCode();
        }

        public async Task<List<Favorite>> GetFavorites()
        {
            return await _httpClient.GetFromJsonAsync<List<Favorite>>($"{BaseUrl}/favorites");
        }

        public async Task<Favorite> AddFavorite(Favorite favorite)
        {
            var response = await _httpClient.PostAsJsonAsync($"{BaseUrl}/favorites", favorite);
            response.EnsureSuccessStatusCode();
            return await response.Content.ReadFromJsonAsync<Favorite>();
        }

        public async Task RemoveFavorite(int id)
        {
            var response = await _httpClient.DeleteAsync($"{BaseUrl}/favorites/{id}");
            response.EnsureSuccessStatusCode();
        }
    }
}

