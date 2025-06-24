package com.projectone.gharvypar.controller;

import com.projectone.gharvypar.propertyservice.entities.Property;
import com.projectone.gharvypar.propertyservice.service.IPropertyService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/properties")
@RequiredArgsConstructor
public class PropertyController {
    
    private final IPropertyService propertyService;
    
    
    @PostMapping("/add")
    public ResponseEntity<Property> addProperty(
            @RequestParam Long userId,
            @RequestBody Property propertyRequest) {
        Property property = propertyService.addProperty(userId, propertyRequest);
        return ResponseEntity.ok(property);
    }
    
    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Property>> getUserProperties(@PathVariable Long userId) {
        return ResponseEntity.ok(propertyService.getAllPropertiesByUserId(userId));
    }
}

