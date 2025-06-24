package com.projectone.gharvypar.propertyservice.service.impl;

import com.projectone.gharvypar.propertyservice.dto.UnitDTO;
import com.projectone.gharvypar.propertyservice.entities.Property;
import com.projectone.gharvypar.propertyservice.entities.Unit;
import com.projectone.gharvypar.propertyservice.entities.UnitComponent;
import com.projectone.gharvypar.propertyservice.repository.IPropertyRepository;
import com.projectone.gharvypar.propertyservice.repository.IUnitRepository;
import com.projectone.gharvypar.propertyservice.service.IUnitService;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class UnitServiceImpl implements IUnitService {
    
    private final IUnitRepository unitRepository;
    private final IPropertyRepository propertyRepository;
    
    @Transactional
    public Unit createUnit(UnitDTO dto) {
        Property property = propertyRepository.findById(dto.getPropertyId())
                                    .orElseThrow(() -> new IllegalArgumentException("Property not found"));
        
        Unit unit = Unit.builder()
                            .unitNumber(dto.getUnitNumber())
                            .areaSqft(dto.getAreaSqft())
                            .status(dto.getStatus())
                            .unitCategory(dto.getUnitCategory())
                            .unitType(dto.getUnitType())
                            .createdAt(LocalDateTime.now())
                            .propertyId(property.getPropertyId())
                            .build();
        
        var components = dto.getComponents().stream()
                                 .map(c -> UnitComponent.builder()
                                                   .componentType(c.getComponentType())
                                                   .isShared(c.isShared())
                                                   .notes(c.getNotes())
                                                   .unit(unit)
                                                   .build())
                                 .collect(Collectors.toList());
        
        unit.setComponents(components);
        
        return unitRepository.save(unit);
    }
    
}
