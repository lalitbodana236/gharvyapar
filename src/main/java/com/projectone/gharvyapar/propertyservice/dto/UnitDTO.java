package com.projectone.gharvypar.propertyservice.dto;





import com.projectone.gharvypar.propertyservice.utils.ComponentType;
import com.projectone.gharvypar.propertyservice.utils.UnitCategory;
import com.projectone.gharvypar.propertyservice.utils.UnitStatus;
import com.projectone.gharvypar.propertyservice.utils.UnitType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UnitDTO {
    private String unitNumber;
    private Integer areaSqft;
    private UnitStatus status;
    private UnitCategory unitCategory;
    private UnitType unitType;
    private Long propertyId;
    private List<UnitComponentDTO> components;
    
    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class UnitComponentDTO {
        private ComponentType componentType;
        private boolean isShared;
        private String notes;
    }
}

