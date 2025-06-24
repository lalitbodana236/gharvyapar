package com.projectone.gharvypar.userservice.entities;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(
        name = "user",
        uniqueConstraints = {
                @UniqueConstraint(name = "uc_user_email", columnNames = "email"),
                @UniqueConstraint(name = "uc_user_mobile", columnNames = "mobile")
        }
)
public class User {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userid;
    
    @Column(nullable = false)
    private String firstname;
    
    @Column(nullable = false)
    private String lastname;
    
    @Column(nullable = false, unique = true)
    private String email;
    
    @Column(nullable = false, unique = true)
    private String mobile;
    
    private String password;
    
    private Role role;
    
    @Column(nullable = false)
    private boolean enabled;
    
    @Column(name = "email_verified", nullable = false)
    private boolean emailVerified;
    
    @Column(name = "mobile_verified", nullable = false)
    private boolean mobileVerified;
}
