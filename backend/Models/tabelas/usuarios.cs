using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Runtime.CompilerServices;
using Microsoft.EntityFrameworkCore;

namespace backend.Models;

[Table("usuarios")]
public class usuarios
{
    [Key]
    [Column("id")]
    public Guid id { get; set; } = Guid.NewGuid();
    
    [Required]
    [Column("nome")]
    public string nome { get; set; }
    
    [Required]
    [Column("email")]
    public string email { get; set; }
    
    [Required]
    [Column("senha")]
    public string senha { get; set; } = string.Empty;
    
    [Column("ativo")] 
    public bool ativo { get; set; } = true;
    
    [Column("data")]
    public DateTime data { get; set; } = DateTime.Now;
}