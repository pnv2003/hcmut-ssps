package com.se.ssps.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.se.ssps.server.entity.user.Student;

import jakarta.transaction.Transactional;

public interface StudentRepository extends JpaRepository<Student,Integer> {
    @Query("SELECT s FROM Student s where s.id = ?1 ")
    public Student findStudentById(Integer id);

    @Modifying
    @Transactional
    @Query("UPDATE Student s set s.balance = ?1 where s.id = ?2")
    public void updateNumOfPages(Integer numOfPages, Integer id);
}
