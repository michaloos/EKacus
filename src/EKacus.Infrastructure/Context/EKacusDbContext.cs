using EKacus.Domain.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace EKacus.Infrastructure.Context
{
    public class EKacusDbContext : IdentityDbContext<User, Role, Guid>
    {
        public EKacusDbContext(DbContextOptions<EKacusDbContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(typeof(EKacusDbContext).Assembly);

            foreach (var relationship in modelBuilder.Model.GetEntityTypes()
                .SelectMany(e => e.GetForeignKeys()))
                relationship.DeleteBehavior = DeleteBehavior.ClientSetNull;

            base.OnModelCreating(modelBuilder);
            var password = new PasswordHasher<User>();
            var superAdminId = Guid.NewGuid();
            var superAdminRoleId = Guid.NewGuid();
            
            modelBuilder.Entity<Role>().HasData(
                new Role
                {
                    Id = superAdminRoleId,
                    Name = "SuperAdmin",
                    NormalizedName = "SUPERADMIN",
                    ConcurrencyStamp = Guid.NewGuid().ToString()
                },
                new Role
                {
                    Id = Guid.NewGuid(),
                    Name = "ADMIN",
                    NormalizedName = "ADMIN",
                    ConcurrencyStamp = Guid.NewGuid().ToString()
                });
            
            modelBuilder.Entity<User>().HasData(
                new User
                {
                    Id = superAdminId,
                    UserName = "administrator@email.com",
                    NormalizedUserName = "ADMINISTRATOR@EMAIL.COM",
                    Email = "administrator@email.com",
                    NormalizedEmail = "ADMINISTRATOR@EMAIL.COM",
                    EmailConfirmed = true,
                    PasswordHash = password.HashPassword(null, "!23qwertY"),
                    SecurityStamp = Guid.NewGuid().ToString()
                });
            
            modelBuilder.Entity<IdentityUserRole<Guid>>().HasData(
                new IdentityUserRole<Guid>
                {
                    RoleId = superAdminRoleId,
                    UserId = superAdminId
                });
        }
    }
}
