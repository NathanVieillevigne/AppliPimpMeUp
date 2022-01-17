DROP TABLE categoriesProduit CASCADE;
DROP TABLE categoriesReservation CASCADE;
DROP TABLE produits CASCADE;
DROP TABLE prestation CASCADE;
DROP TABLE rendezVous CASCADE;
DROP TABLE disponibilite CASCADE;
DROP TABLE semaine CASCADE;
DROP TABLE lundi CASCADE;
DROP TABLE mardi CASCADE;
DROP TABLE mercredi CASCADE;
DROP TABLE jeudi CASCADE;
DROP TABLE vendredi CASCADE;
DROP TABLE samedi CASCADE;
DROP TABLE dimanche CASCADE;
DROP TABLE heure CASCADE;
DROP TABLE panier CASCADE;
DROP TABLE client CASCADE;
DROP TABLE prestataire CASCADE;
DROP TABLE adresse CASCADE;
DROP TABLE avis CASCADE;

CREATE TABLE categoriesProduit (
    	categorie VARCHAR(128) NOT NULL,
	urlImage VARCHAR(2000) NOT NULL,
    	PRIMARY KEY (categorie)
);

CREATE TABLE categoriesReservation (
    	categorie VARCHAR(128) NOT NULL,
	urlImage VARCHAR(2000) NOT NULL,
    	PRIMARY KEY (categorie)
);

CREATE TABLE produits(
	idproduits INT NOT NULL,
	nom VARCHAR(128),
	prix FLOAT,
	description VARCHAR(2000),
	categorie VARCHAR(128) NOT NULL,
	urlImage VARCHAR(2000) NOT NULL, 
	stock INT,
	nbProduitVendue INT,
	PRIMARY KEY(idproduits),
	FOREIGN KEY(categorie) REFERENCES categoriesProduit(categorie)
);

CREATE TABLE heure(
	idHeure INT NOT NULL,
	septH VARCHAR(128),
	septHtrente VARCHAR(128),
	huitH VARCHAR(128),
	huitHtrente VARCHAR(128),
	neufH VARCHAR(128),
	neufHtrente VARCHAR(128),
	dixH VARCHAR(128),
	dixHtrente VARCHAR(128),
	onzeH VARCHAR(128),
	onzeHtrente VARCHAR(128),
	douzeH VARCHAR(128),
	douzeHtrente VARCHAR(128),
	treizeH VARCHAR(128),
	treizeHtrente VARCHAR(128),
	quatorzeH VARCHAR(128),
	quatorzeHtrente VARCHAR(128),
	quinzeH VARCHAR(128),
	quinzeHtrente VARCHAR(128),
	seizeH VARCHAR(128),
	seizeHtrente VARCHAR(128),
	dixseptH VARCHAR(128),
	dixseptHtrente VARCHAR(128),
	dixhuitH VARCHAR(128),
	dixhuitHtrente VARCHAR(128),
	dixneufH VARCHAR(128),
	dixneufHtrente VARCHAR(128),
	vingtH VARCHAR(128),
	vingtHtrente VARCHAR(128),
	vingtunH VARCHAR(128),
	PRIMARY KEY(idHeure)
);

CREATE TABLE lundi(
	idLundi INT NOT NULL,
	idHeure INT NOT NULL,
	PRIMARY KEY(idLundi),
	FOREIGN KEY(idHeure) REFERENCES heure(idHeure)
);

CREATE TABLE mardi(
	idMardi INT NOT NULL,
	idHeure INT NOT NULL,
	PRIMARY KEY(idMardi),
	FOREIGN KEY(idHeure) REFERENCES heure(idHeure)
);

CREATE TABLE mercredi(
	idMercredi INT NOT NULL,
	idHeure INT NOT NULL,
	PRIMARY KEY(idMercredi),
	FOREIGN KEY(idHeure) REFERENCES heure(idHeure)
);

CREATE TABLE jeudi(
	idJeudi INT NOT NULL,
	idHeure INT NOT NULL,
	PRIMARY KEY(idJeudi),
	FOREIGN KEY(idHeure) REFERENCES heure(idHeure)
);

CREATE TABLE vendredi(
	idVendredi INT NOT NULL,
	idHeure INT NOT NULL,
	PRIMARY KEY(idVendredi),
	FOREIGN KEY(idHeure) REFERENCES heure(idHeure)
);

CREATE TABLE samedi(
	idSamedi INT NOT NULL,
	idHeure INT NOT NULL,
	PRIMARY KEY(idSamedi),
	FOREIGN KEY(idHeure) REFERENCES heure(idHeure)
);

CREATE TABLE dimanche(
	idDimanche INT NOT NULL,
	idHeure INT NOT NULL,
	PRIMARY KEY(idDimanche),
	FOREIGN KEY(idHeure) REFERENCES heure(idHeure)
);

CREATE TABLE semaine(
	idSemaine INT NOT NULL,
	idLundi INT NOT NULL,
	idMardi INT NOT NULL,
	idMercredi INT NOT NULL,
	idJeudi INT NOT NULL,
	idVendredi INT NOT NULL,
	idSamedi INT NOT NULL,
	idDimanche INT NOT NULL,
	PRIMARY KEY(idSemaine),
	FOREIGN KEY(idLundi) REFERENCES lundi(idLundi),
	FOREIGN KEY(idMardi) REFERENCES mardi(idMardi),
	FOREIGN KEY(idMercredi) REFERENCES mercredi(idMercredi),
	FOREIGN KEY(idJeudi) REFERENCES jeudi(idJeudi),
	FOREIGN KEY(idVendredi) REFERENCES vendredi(idVendredi),
	FOREIGN KEY(idSamedi) REFERENCES samedi(idSamedi),
	FOREIGN KEY(idDimanche) REFERENCES samedi(idDimanche)
);

CREATE TABLE disponibilite(
	idDisponibilite INT NOT NULL,
	idSemaine INT NOT NULL,
	PRIMARY KEY(idDisponibilite),
	FOREIGN KEY(idSemaine) REFERENCES semaine(idSemaine)
);

CREATE TABLE adresse(
	idAdresse INT NOT NULL,
	voie INT,
	rue VARCHAR (128),
	ville VARCHAR (128),
	nomDepartement VARCHAR (128),
	numeroDepartement INT,
	PRIMARY KEY(idAdresse)
);

CREATE TABLE prestation(
	idPrestation INT NOT NULL,
	nom VARCHAR (128),
	prix FLOAT,
	description VARCHAR(20000),
	categorie VARCHAR(128) NOT NULL,
	urlImage VARCHAR(2000) NOT NULL,
	PRIMARY KEY(idPrestation),
	FOREIGN KEY(categorie) REFERENCES categoriesReservation(categorie)
);

CREATE TABLE rendezVous(
	idRendezVous INT NOT NULL,
	idPrestation INT NOT NULL,
	idDisponibilite INT NOT NULL,
	PRIMARY KEY(idRendezVous),
	FOREIGN KEY(idPrestation) REFERENCES prestation(idPrestation),
	FOREIGN KEY(idDisponibilite) REFERENCES disponibilite(idDisponibilite)
);

CREATE TABLE prestataire(
	idPrestataire INT NOT NULL,
	idRendezVous INT NOT NULL,
	nom VARCHAR (128),
	prenom VARCHAR (128),
	idAdresse INT NOT NULL,
	nbPrestaptionPrevue INT,
	nbPrestationFait INT,
	recetteDuMois FLOAT,
	PRIMARY KEY(idPrestataire),
	FOREIGN KEY(idRendezVous) REFERENCES rendezVous(idRendezVous),
	FOREIGN KEY(idAdresse) REFERENCES adresse(idAdresse)
);

CREATE TABLE panier(
	idPanier INT NOT NULL,
	prix FLOAT,
	idproduits INT,
	idRendezVous INT,
	PRIMARY KEY(idPanier),
	FOREIGN KEY(idRendezVous) REFERENCES rendezVous(idRendezVous),
	FOREIGN KEY(idproduits) REFERENCES produits(idproduits)
);

CREATE TABLE client(
	idClient INT NOT NULL,
	nom VARCHAR (128),
	prenom VARCHAR (128),
	idPanier INT NOT NULL,
	idAdresse INT NOT NULL,
	PRIMARY KEY(idClient),
	FOREIGN KEY(idPanier) REFERENCES panier(idPanier),
	FOREIGN KEY(idAdresse) REFERENCES adresse(idAdresse)
);


CREATE TABLE avis(
	idAvis INT NOT NULL,
	idproduits INT,
	idPrestation INT,
	idClient INT NOT NULL,
	note INT,
	descriptionAvis VARCHAR(20000),
	PRIMARY KEY(idAvis),
	FOREIGN KEY(idproduits) REFERENCES produits(idproduits),
	FOREIGN KEY(idPrestation) REFERENCES prestation(idPrestation),
	FOREIGN KEY(idClient) REFERENCES client(idClient)
);





