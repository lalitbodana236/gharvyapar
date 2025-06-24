package com.projectone.gharvypar.propertyservice.entities;

import com.projectone.gharvypar.propertyservice.utils.ComponentType;
import jakarta.persistence.*;
import lombok.Builder;
import lombok.Data;

@Entity
@Data
@Builder
public class UnitComponent {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long componentId;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "unit_id", nullable = false)
    private Unit unit;
    
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private ComponentType componentType;
   
    private boolean isShared;
    
    @Column(nullable = false)
    private String notes;
}
