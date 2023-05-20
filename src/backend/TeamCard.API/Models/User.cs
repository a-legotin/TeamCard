using System.Text.Json.Serialization;

namespace TeamCard.API.Models;

public class User
{
    public User(long id, string email, string role)
    {
        Id = id;
        Email = email;
        Role = role;
    }

    public long Id { get; set; }
    
    public string Email { get; set; }
    public string Role { get; set; }
}

public class UserCredentials
{
    public UserCredentials()
    {
    }

    [JsonPropertyName("email")]
    public string? Email { get; set; }
    
    [JsonPropertyName("password")]
    public string? Password { get; set; }
}