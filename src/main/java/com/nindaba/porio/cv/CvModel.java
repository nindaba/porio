package com.nindaba.porio.cv;

import java.util.List;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "cv")
public record CvModel(
    @Id String id,
    String name,
    String email,
    String phone,
    String summary,
    boolean isDefault,
    List<ExperienceModel> experience,
    List<String> skills,
    List<String> languages,
    List<String> hobbies,
    String universityName,
    String universityLogo,
    String degree,
    String graduationDate) {}
