package com.projectone.gharvypar.propertyservice.repository;

import com.projectone.gharvypar.propertyservice.entities.Property;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IPropertyRepository extends JpaRepository<Property,Long> {
    
    @Query("SELECT p FROM Property p WHERE p.ownerId = :ownerId")
    List<Property> findAllByOwner(Long ownerId);
}
