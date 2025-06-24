package com.projectone.gharvypar.propertyservice.entities;

import com.projectone.gharvypar.propertyservice.utils.PropertyType;
import com.projectone.gharvypar.userservice.entities.User;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Property {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long propertyId;
    
    //@ManyToOne(fetch = FetchType.LAZY)
    //@JoinColumn(name = "owner_id", nullable = false)
    private Long ownerId;
    
    @Column(nullable = false)
    private String propertyName;
    
    @Column(nullable = false)
    private String address;
    
    @Column(nullable = false)
    private String city;
    
    @Column(nullable = false)
    private String state;
    
    @Column(nullable = false)
    private String pincode;
    
    @Column(nullable = false)
    private String country;
    
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private PropertyType type;
    
    private Integer floor;
    
}
