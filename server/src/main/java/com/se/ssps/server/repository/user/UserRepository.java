package com.se.ssps.server.repository.user;

import org.springframework.stereotype.Repository;

import com.se.ssps.server.entity.user.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


@Repository
public interface UserRepository extends JpaRepository<User,Long>{
    @Query("SELECT u FROM User u WHERE u.username = ?1")
    public User findByUsername(String username);
    
}
