package com.projectone.gharvypar.userservice.service.impl;

import com.projectone.gharvypar.userservice.entities.OTPVerification;
import com.projectone.gharvypar.userservice.repository.IOtpRepository;
import com.projectone.gharvypar.userservice.service.IOtpService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.Random;

@Service
@RequiredArgsConstructor
public class OtpService implements IOtpService {
    private final IOtpRepository otpRepo;
    
    
    
    
    
    public void sendOtp(String mobileNumber) {
        String otp = String.valueOf(new Random().nextInt(899999) + 100000);
        LocalDateTime expiry = LocalDateTime.now().plusMinutes(5);
        
        OTPVerification otp1 = OTPVerification.builder()
                                      .mobileNumber(mobileNumber)
                                      .otpCode(otp)
                                      .expiresAt(expiry)
                                      .verified(false)
                                      .build();
        
        otpRepo.save(otp1);
        
      
    }
    
    public boolean verifyOtp(String mobileNumber, String otp) {
        Optional<OTPVerification> record = otpRepo.findTopByMobileNumberOrderByIdDesc(mobileNumber);
        if (record.isPresent()) {
            OTPVerification otpEntity = record.get();
            if (otpEntity.getOtpCode().equals(otp) && LocalDateTime.now().isBefore(otpEntity.getExpiresAt())) {
                otpEntity.setVerified(true);
                otpRepo.save(otpEntity);
                return true;
            }
        }
        return false;
    }
}
