using backend.DTO;
using backend.Services;
using Microsoft.AspNetCore.Mvc;
namespace backend.Controllers;

public class UsuarioController : ControllerBase
{
    private readonly UsuariosService _service;
    
    public UsuarioController(UsuariosService service)
    {
        _service = service;
    }

    [HttpGet]
    public async Task<ActionResult<List<UsuariosService>>> PegarTodosUsuarios()
    {
        var usuarios = await _service.ObterTodosAsync();
        return Ok(usuarios);
    }

    [HttpPost]
    public async Task<ActionResult<UsuariosService>> CriarUsuario([FromBody] CriarUsuarioDto criarUsuarioDto)
    {
        var novoUsuario = await _service.CriarUsuarioAsync(criarUsuarioDto);
        return CreatedAtAction(nameof(PegarTodosUsuarios), new { id = novoUsuario.id }, novoUsuario);
    }
}