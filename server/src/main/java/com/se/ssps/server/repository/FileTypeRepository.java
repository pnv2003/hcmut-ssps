package com.se.ssps.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.se.ssps.server.entity.configuration.FileType;
@Repository
public interface FileTypeRepository extends JpaRepository<FileType,Integer>{
    @Query("SELECT f FROM FileType f WHERE f.id = ?1")
    public FileType findTypeById(Integer id);
}
