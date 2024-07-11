using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EKacus.Domain.Models
{
    public abstract class IEntity
    {
        public required Guid Id { get; set; }
    }
}
