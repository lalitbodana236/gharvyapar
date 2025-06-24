package com.projectone.gharvypar.propertyservice.service;

import com.projectone.gharvypar.propertyservice.entities.Property;

import java.util.List;

public interface IPropertyService {
    Property addProperty(Long userId, Property propertyRequest);
    
    List<Property> getAllPropertiesByUserId(Long userId);
}
