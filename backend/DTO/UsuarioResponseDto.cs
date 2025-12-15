namespace backend.DTO;

public class UsuarioResponseDto
{
    public Guid id { get; set; }
    public string nome { get; set; }
    public string email { get; set; }
}

public class CriarUsuarioDto
{
    public string nome { get; set; }
    public string email { get; set; }
    public string senha { get; set; }
}