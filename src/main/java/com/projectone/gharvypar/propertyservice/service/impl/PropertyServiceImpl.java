package com.projectone.gharvypar.propertyservice.service.impl;

import com.projectone.gharvypar.propertyservice.entities.Property;
import com.projectone.gharvypar.propertyservice.repository.IPropertyRepository;
import com.projectone.gharvypar.propertyservice.service.IPropertyService;
import com.projectone.gharvypar.userservice.entities.User;
import com.projectone.gharvypar.userservice.repository.IUserRepository;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class PropertyServiceImpl implements IPropertyService {
    
    private final IPropertyRepository propertyRepository;
    private final IUserRepository userRepository; // Needed to map userId to owner
    
    
    // ✅ Add Property
    public Property addProperty(Long userId, Property propertyRequest) {
        User user = userRepository.findById(userId)
                            .orElseThrow(() -> new RuntimeException("User not found with ID: " + userId));
       
        propertyRequest.setOwnerId(user.getUserid());
        return propertyRepository.save(propertyRequest);
    }
    
    // ✅ Get All Properties for a User
    public List<Property> getAllPropertiesByUserId(Long userId) {
        return propertyRepository.findAllByOwner(userId);
    }
}
