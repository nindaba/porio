package com.nindaba.porio.cv;

import java.util.Optional;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CvRepository extends MongoRepository<CvModel, String> {
  Optional<CvModel> findByIsDefaultTrue();
}
