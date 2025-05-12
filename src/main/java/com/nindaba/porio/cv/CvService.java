package com.nindaba.porio.cv;

import java.util.List;

public interface CvService {
  CvModel createCv(CvModel cv);

  List<CvModel> getAllCvs();

  CvModel getCvById(String id);

  CvModel getDefaultCv();

  CvModel updateCv(String id, CvModel cv);

  void deleteCv(String id);
}
