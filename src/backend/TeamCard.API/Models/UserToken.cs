namespace TeamCard.API.Models;

public class UserToken
{
    public UserToken(User user, string token)
    {
        User = user;
        Token = token;
    }

    public User User { get; set; }
    public string Token { get; set; }
}