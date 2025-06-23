package com.projectone.gharvypar.propertyservice.repository;

import com.projectone.gharvypar.propertyservice.entities.Property;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IPropertryRepository extends JpaRepository<Property,Long> {
}
