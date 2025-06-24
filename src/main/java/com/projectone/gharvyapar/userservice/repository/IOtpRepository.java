package com.projectone.gharvypar.userservice.repository;

import com.projectone.gharvypar.userservice.entities.OTPVerification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface IOtpRepository extends JpaRepository<OTPVerification,Long> {
    Optional<OTPVerification> findTopByMobileNumberOrderByIdDesc(String mobileNumber);
}
