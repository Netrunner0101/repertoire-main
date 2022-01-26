package porto.repertoire.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import porto.repertoire.entity.RepertoireEntity;

@Repository
public interface RepertoireRepository extends CrudRepository<RepertoireEntity,Integer>{
	
}
