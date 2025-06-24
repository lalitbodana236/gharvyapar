package com.projectone.gharvypar.propertyservice.repository;

import com.projectone.gharvypar.propertyservice.entities.UnitComponent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IUnitComponent extends JpaRepository<UnitComponent,Long> {
}
