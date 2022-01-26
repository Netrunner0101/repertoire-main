package porto.repertoire.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import porto.repertoire.entity.RepertoireEntity;
import porto.repertoire.service.RepertoireService;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.PUT,RequestMethod.GET,RequestMethod.DELETE,RequestMethod.POST})
public class RepertoireController {
	
	@Autowired RepertoireService repertoireServ;
	
	//GET ALL
	@GetMapping("/repertoires")
	public Iterable<RepertoireEntity> All() {
		return repertoireServ.getAllRepertoire();
	}
	
//	//GET ALL ( Thymeleaf Version )
//	@GetMapping("/repertoires")
//	public String All(Model model) {
//		model.addAttribute(personnes,repertoireServ.getAllRepertoire());
//		return repertoireServ.getAllRepertoire();
//	}
//	
	// GET ID
	@GetMapping("/repertoire/{id}")
	public Optional<RepertoireEntity> getId(@PathVariable("id") int id) {
		return repertoireServ.getByIdRepertoire(id);
	}
	
	// POST repertoire
	@PostMapping(value="/repertoire/create", consumes = {"application/json"})
	public RepertoireEntity postPersonne(@RequestBody RepertoireEntity personne) {
		return repertoireServ.postRepertoire(personne);
	}
	
	// UPDATE
	@PutMapping(value="/repertoire/update/{id}", consumes = {"application/json"})
	public RepertoireEntity updateId(@PathVariable("id") int id, @RequestBody RepertoireEntity personne) {
		return repertoireServ.updateRepertoire(id, personne);
	}
	
	//DELETE
	@DeleteMapping("/repertoire/delete/{id}")
	public void deleteId(@PathVariable("id") int id) {
		repertoireServ.deleteRepertoire(id);
	}
	
}
