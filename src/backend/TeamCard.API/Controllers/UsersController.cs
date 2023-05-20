using TeamCard.API.Models;
using TeamCard.API.Services;
using Microsoft.AspNetCore.Mvc;

namespace TeamCard.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UsersController : ControllerBase
{
    private readonly ILogger<UsersController> _logger;
    private readonly UsersDb _usersDb;

    public UsersController(ILogger<UsersController> logger, UsersDb usersDb)
    {
        _logger = logger;
        _usersDb = usersDb;
    }

    [HttpGet("me")]
    public User Get()
    {
        _logger.LogDebug("Getting current user");
        return _usersDb.Users[1];
    }
}