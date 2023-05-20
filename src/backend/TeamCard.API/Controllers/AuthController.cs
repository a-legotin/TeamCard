using TeamCard.API.Models;
using TeamCard.API.Services;
using Microsoft.AspNetCore.Mvc;

namespace TeamCard.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly ILogger<UsersController> _logger;
    private readonly UsersDb _usersDb;
    private readonly UsersAuth _usersAuth;

    public AuthController(ILogger<UsersController> logger, UsersDb usersDb, UsersAuth usersAuth)
    {
        _logger = logger;
        _usersDb = usersDb;
        _usersAuth = usersAuth;
    }

    [HttpPost("login")]
    public IActionResult Login([FromBody] UserCredentials credentials)
    {
        _logger.LogDebug("Logging user {user} in", credentials.Email);

        var user = _usersDb.Users.Values.FirstOrDefault(user =>
            user.Email.Equals(credentials.Email, StringComparison.InvariantCultureIgnoreCase));
        if (user == null)
        {
            return Unauthorized();
        }

        if (_usersAuth.UsersTokens.TryGetValue(user.Id, out var token))
        {
            return Ok(token);
        }

        token = new UserToken(user, Guid.NewGuid().ToString());
        _usersAuth.UsersTokens[user.Id] = token;
        return Ok(token);
    }
}