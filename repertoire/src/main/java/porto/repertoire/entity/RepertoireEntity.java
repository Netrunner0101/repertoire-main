package porto.repertoire.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Data
@Table(name="personne")
public class RepertoireEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="idpersonne")
	int id ; 
	
	@Column(name="nom")
	String nom ; 
	
	@Column(name="prenom")
	String prenom ;
	
	@Column(name="email")
	String email;

	public RepertoireEntity(int id, String nom, String prenom, String email) {
		super();
		this.id = id;
		this.nom = nom;
		this.prenom = prenom;
		this.email = email;
	} 

	public RepertoireEntity() {
		super();
	}

	public int getIdPersonne() {
		return id;
	}

	public void setIdPersonne(int idPersonne) {
		this.id = idPersonne;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getPrenom() {
		return prenom;
	}

	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	
	
	
	
}
