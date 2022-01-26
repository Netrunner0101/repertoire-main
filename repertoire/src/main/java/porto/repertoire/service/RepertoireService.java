package porto.repertoire.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import porto.repertoire.entity.RepertoireEntity;
import porto.repertoire.repository.RepertoireRepository;

@Service
public class RepertoireService {
	
	@Autowired RepertoireRepository repertoireRepo;
	
	// Get all
	public Iterable<RepertoireEntity> getAllRepertoire() {
		return (Iterable<RepertoireEntity>) repertoireRepo.findAll();
	}
	
	//Get by id
	public Optional<RepertoireEntity> getByIdRepertoire(int idPersonne) {
		return repertoireRepo.findById(idPersonne);
	}
	
	//POST
	public RepertoireEntity postRepertoire(RepertoireEntity personne) {
		return repertoireRepo.save(personne);
		
	}
	//Update
	public RepertoireEntity updateRepertoire(int idPersonne,RepertoireEntity personne) {
		RepertoireEntity updatedP =  repertoireRepo.findById(idPersonne).get();
		if(updatedP.getIdPersonne() != 0) {
			updatedP.setNom(personne.getNom());
			updatedP.setPrenom(personne.getPrenom());
			updatedP.setEmail(personne.getEmail());
		}
		return repertoireRepo.save(updatedP);
	}
	
	// Delete
	public void deleteRepertoire(int idPersonne) {
		repertoireRepo.deleteById(idPersonne);
	}
	
}
