package com.example.Lab.Report.Repository;

import com.example.Lab.Report.Entity.LabReport;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface LabReportRepository extends MongoRepository<LabReport, String> {
    List<LabReport> findByPatientId(String patientId);
}