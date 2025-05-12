package com.nindaba.porio.cv;

import java.util.List;
import org.springframework.stereotype.Service;

public interface CvMapper {
  CvModel merge(CvModel existing, CvModel update);

  @Service
  class CvMapperImpl implements CvMapper {
    @Override
    public CvModel merge(CvModel existing, CvModel update) {
      String id = update.id();
      String name = update.name();
      String email = update.email();
      String phone = update.phone();
      String summary = update.summary();
      boolean isDefault = update.isDefault();
      List<String> skills = update.skills();
      List<String> languages = update.languages();
      List<String> hobbies = update.hobbies();
      String universityName = update.universityName();
      String universityLogo = update.universityLogo();
      String degree = update.degree();
      String graduationDate = update.graduationDate();

      return new CvModel(
          id,
          name != null ? name : existing.name(),
          email != null ? email : existing.email(),
          phone != null ? phone : existing.phone(),
          summary != null ? summary : existing.summary(),
          isDefault,
          existing.experience(),
          skills != null ? skills : existing.skills(),
          languages != null ? languages : existing.languages(),
          hobbies != null ? hobbies : existing.hobbies(),
          universityName != null ? universityName : existing.universityName(),
          universityLogo != null ? universityLogo : existing.universityLogo(),
          degree != null ? degree : existing.degree(),
          graduationDate != null ? graduationDate : existing.graduationDate());
    }
  }
}
