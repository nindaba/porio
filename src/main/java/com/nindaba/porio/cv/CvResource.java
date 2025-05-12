package com.nindaba.porio.cv;

import java.util.List;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

@Controller
public class CvResource {
  private final CvService cvService;

  public CvResource(CvService cvService) {
    this.cvService = cvService;
  }

  @QueryMapping
  public CvModel defaultCv() {
    return cvService.getDefaultCv();
  }

  @QueryMapping
  public CvModel cv(@Argument String id) {
    return cvService.getCvById(id);
  }

  @QueryMapping
  public List<CvModel> cvs() {
    return cvService.getAllCvs();
  }

  @MutationMapping
  public CvModel createCv(@Argument CvModel cv) {
    return cvService.createCv(cv);
  }

  @MutationMapping
  public CvModel updateCv(@Argument String id, @Argument CvModel cv) {
    return cvService.updateCv(id, cv);
  }

  @MutationMapping
  public void deleteCv(@Argument String id) {
    cvService.deleteCv(id);
  }
}
