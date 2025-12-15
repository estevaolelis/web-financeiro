using Microsoft.EntityFrameworkCore;
using backend.Models; // Isso puxa sua classe 'usuarios.cs' que está na pasta Models

namespace backend.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }
        
        public DbSet<usuarios> usuarios { get; set; }
    }
}