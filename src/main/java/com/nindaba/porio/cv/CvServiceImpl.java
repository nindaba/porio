package com.nindaba.porio.cv;

import com.nindaba.porio.exceptions.NotFoundException;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class CvServiceImpl implements CvService {
  private final CvRepository cvRepository;
  private final CvMapper cvMapper;

  public CvServiceImpl(CvRepository cvRepository, CvMapper cvMapper) {
    this.cvRepository = cvRepository;
    this.cvMapper = cvMapper;
  }

  @Override
  public CvModel createCv(CvModel cv) {
    return cvRepository.save(cv);
  }

  @Override
  public CvModel getDefaultCv() {
    return cvRepository
        .findByIsDefaultTrue()
        .orElseThrow(() -> new NotFoundException("Default CV not found"));
  }

  @Override
  public CvModel getCvById(String id) {
    return cvRepository
        .findById(id)
        .orElseThrow(() -> new NotFoundException("CV with id " + id + " not found"));
  }

  @Override
  public CvModel updateCv(String id, CvModel cv) {
    CvModel existingCv = getCvById(id);

    return cvRepository.save(cvMapper.merge(existingCv, cv));
  }

  @Override
  public void deleteCv(String id) {
    CvModel existingCv = getCvById(id);
    if (existingCv.isDefault()) {
      throw new IllegalStateException("Cannot delete the default CV");
    }
    cvRepository.delete(existingCv);
  }

  @Override
  public List<CvModel> getAllCvs() {
    return cvRepository.findAll();
  }
}
