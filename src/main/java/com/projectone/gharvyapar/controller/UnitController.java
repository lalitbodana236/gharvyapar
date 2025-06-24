package com.projectone.gharvypar.controller;

import com.projectone.gharvypar.propertyservice.dto.UnitDTO;
import com.projectone.gharvypar.propertyservice.entities.Unit;
import com.projectone.gharvypar.propertyservice.service.IUnitService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/units")
@RequiredArgsConstructor

public class UnitController {
    
    private final IUnitService unitService;
    
    @PostMapping
    public ResponseEntity<Unit> createUnit(@RequestBody UnitDTO unitDTO) {
        Unit created = unitService.createUnit(unitDTO);
        return ResponseEntity.ok(created);
    }
}
