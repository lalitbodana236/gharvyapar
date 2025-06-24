package com.projectone.gharvypar.propertyservice.service;

import com.projectone.gharvypar.propertyservice.dto.UnitDTO;
import com.projectone.gharvypar.propertyservice.entities.Unit;

public interface IUnitService {
    Unit createUnit(UnitDTO unitDTO);
}
