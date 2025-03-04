﻿using System;
using System.Collections.Generic;

namespace ApplicationTier.Domain.Entities
{
    public partial class MusLunarPararameter
    {
        public MusLunarPararameter()
        {
            MusLunarEmployees = new HashSet<MusLunarEmployee>();
            MusLunarSingers = new HashSet<MusLunarSinger>();
        }

        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public string Value { get; set; } = null!;
        public int ParaTypeId { get; set; }
        public string? Note { get; set; }
        public DateTime Created { get; set; }
        public int CreatedBy { get; set; }
        public DateTime Modified { get; set; }
        public int ModifiedBy { get; set; }
        public int? State { get; set; }

        public virtual MusLunarPararameterType ParaType { get; set; } = null!;
        public virtual ICollection<MusLunarEmployee> MusLunarEmployees { get; set; }
        public virtual ICollection<MusLunarSinger> MusLunarSingers { get; set; }
    }
}
