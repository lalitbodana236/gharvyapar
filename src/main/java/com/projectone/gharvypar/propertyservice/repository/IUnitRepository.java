package com.projectone.gharvypar.propertyservice.repository;

import com.projectone.gharvypar.propertyservice.entities.Unit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IUnitRepository extends JpaRepository<Unit,Long> {
}
