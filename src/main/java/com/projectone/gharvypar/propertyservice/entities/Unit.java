package com.projectone.gharvypar.propertyservice.entities;

import com.projectone.gharvypar.propertyservice.utils.UnitCategory;
import com.projectone.gharvypar.propertyservice.utils.UnitStatus;
import com.projectone.gharvypar.propertyservice.utils.UnitType;
import jakarta.persistence.*;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Builder
@Data
public class Unit {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long unitId;
    
  //  @ManyToOne(fetch = FetchType.LAZY)
   // @JoinColumn(name = "property_id", nullable = false)
    private Long propertyId;
    
    @Column(nullable = false)
    private String unitNumber;
    
    @Enumerated(EnumType.STRING)
    
    @Column(nullable = false)
    private UnitType unitType;
    
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private UnitCategory unitCategory;
  
    
    private int areaSqft;
   
    @OneToMany(mappedBy = "unit", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private List<UnitComponent> components = new ArrayList<>();
    
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private UnitStatus status;
    
    private LocalDateTime createdAt;
}
