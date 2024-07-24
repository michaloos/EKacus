using EKacus.Domain.Interfaces;
using EKacus.Domain.Models;
using EKacus.Infrastructure.Context;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

namespace EKacus.Infrastructure.Repositories;

public abstract class Repository<TEntity> : IRepository<TEntity> where TEntity : IEntity
{
	protected readonly EKacusDbContext DbContext;
	protected readonly DbSet<TEntity> DbSet;

	protected Repository(EKacusDbContext dbContext)
	{
		DbContext = dbContext;
		DbSet = dbContext.Set<TEntity>();
	}

	public virtual async Task Add(TEntity entity)
	{
		DbSet.Add(entity);
		await SaveChanges();
	}

	public void Dispose()
	{
		DbContext?.Dispose();
	}

	public virtual async Task<List<TEntity>> GetAll() => await DbSet.ToListAsync();

	public virtual async Task<TEntity?> GetById(Guid id) => await DbSet.FindAsync(id);

	public virtual async Task Remove(TEntity entity)
	{
		DbSet.Remove(entity);
		await SaveChanges();
	}

	public async Task<int> SaveChanges() => await DbContext.SaveChangesAsync();

	public virtual async Task<IEnumerable<TEntity>> Search(Expression<Func<TEntity, bool>> predicate) => await DbSet.AsNoTracking().Where(predicate).ToListAsync();

	public virtual async Task Update(TEntity entity)
	{
		DbSet.Update(entity);
		await SaveChanges();
	}
}