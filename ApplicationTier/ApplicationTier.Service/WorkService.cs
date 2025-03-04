﻿using ApplicationTier.Domain.Entities;
using ApplicationTier.Domain.Interfaces.Services;
using ApplicationTier.Domain.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ApplicationTier.Infrastructure.Repositories;

namespace ApplicationTier.Service
{
    public class WorkService : IWorkService
    {
        private readonly IUnitOfWork _unitOfWork;
        public WorkService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public async Task<IList<Work>> GetAll()
        {
            //return (IList<Work>)await _unitOfWork.Repository<Work>().GetAllAsync();
            return await WorkRepository.GetAll(_unitOfWork.Repository<Work>());
        }

        public async Task<Work> GetOne(int workId)
        {
            return await _unitOfWork.Repository<Work>().FindAsync(workId);
        }

        public async Task Update(Work workInput)
        {
            try
            {
                await _unitOfWork.BeginTransaction();

                var workRepos = _unitOfWork.Repository<Work>();
                var work = await workRepos.FindAsync(workInput.Id);
                if (work == null)
                    throw new KeyNotFoundException();

                work.Name = work.Name;

                await _unitOfWork.CommitTransaction();
            }
            catch (Exception e)
            {
                await _unitOfWork.RollbackTransaction();
                throw;
            }
        }

        public async Task Add(Work workInput)
        {
            try
            {
                await _unitOfWork.BeginTransaction();

                var workRepos = _unitOfWork.Repository<Work>();
                await workRepos.InsertAsync(workInput);

                await _unitOfWork.CommitTransaction();
            }
            catch (Exception e)
            {
                await _unitOfWork.RollbackTransaction();
                throw;
            }
        }

        public async Task Delete(int workId)
        {
            try
            {
                await _unitOfWork.BeginTransaction();

                var workRepos = _unitOfWork.Repository<Work>();
                var work = await workRepos.FindAsync(workId);
                if (work == null)
                    throw new KeyNotFoundException();

                await workRepos.DeleteAsync(work);

                await _unitOfWork.CommitTransaction();
            }
            catch (Exception e)
            {
                await _unitOfWork.RollbackTransaction();
                throw;
            }
        }
    }
}
