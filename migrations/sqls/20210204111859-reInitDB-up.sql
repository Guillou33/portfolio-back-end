/* Replace with your SQL commands */
Drop table if exists `Admin`;
Drop table if exists `Commentaire`;
Drop table if exists `Interet`;
Drop table if exists `Competence_has_Projet`;
Drop table if exists `Projet`;
Drop table if exists `Competence`;
Drop table if exists `Client`;

/* Replace with your SQL commands */
CREATE TABLE IF NOT EXISTS `Admin` (
  `idAdmin` INT NOT NULL AUTO_INCREMENT ,
  `nomAdmin` VARCHAR(45) NULL,
  `prenomAdmin` VARCHAR(45) NULL,
  `loginAdmin` VARCHAR(45) NULL,
  `passwordAdmin` VARCHAR(45) NULL,
  `image_url` VARCHAR(45) NULL,
  `presentation` VARCHAR(255) NULL,
  `tel` VARCHAR(12) NULL,
  `mail` VARCHAR(45) NULL,
  `compteGithub` VARCHAR(45) NULL,
  `compteLinkedIn` VARCHAR(45) NULL,
  PRIMARY KEY (`idAdmin`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Commentaire` (
  `idCommentaire` INT NOT NULL AUTO_INCREMENT,
  `texteCommentaire` VARCHAR(255) NULL,
  `auteurCommentaire` VARCHAR(45) NULL,
  PRIMARY KEY (`idCommentaire`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Interet` (
  `idInteret` INT NOT NULL AUTO_INCREMENT,
  `nomInteret` VARCHAR(45) NULL,
  `descriptifInteret` VARCHAR(255) NULL,
  PRIMARY KEY (`idInteret`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Competence` (
  `idCompetence` INT NOT NULL AUTO_INCREMENT,
  `nomCompetence` VARCHAR(45) NULL,
  `niveau` VARCHAR(45) NULL,
  PRIMARY KEY (`idCompetence`))
ENGINE = InnoDB;
CREATE TABLE IF NOT EXISTS `Client` (
  `idClient` INT NOT NULL AUTO_INCREMENT,
  `nomSociete` VARCHAR(45) NULL,
  `urlSociete` VARCHAR(128) NULL,
  `nomContact` VARCHAR(45) NULL,
  `mailContact` VARCHAR(45) NULL,
  PRIMARY KEY (`idClient`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Projet` (
  `idProjet` INT NOT NULL AUTO_INCREMENT,
  `nomProjet` VARCHAR(45) NULL,
  `descriptifProjet` VARCHAR(255) NULL,
  `urlApp` VARCHAR(128) NULL,
  `Client_idClient` INT UNIQUE,
  PRIMARY KEY (`idProjet`),
  INDEX `fk_Projet_Client1_idx` (`Client_idClient` ASC) VISIBLE,
  CONSTRAINT `fk_Projet_Client1`
    FOREIGN KEY (`Client_idClient`)
    REFERENCES `Client` (`idClient`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Competence_has_Projet` (
  `Competence_idCompetence` INT UNIQUE,
  `Projet_idProjet` INT UNIQUE,
  PRIMARY KEY (`Competence_idCompetence`, `Projet_idProjet`),
  INDEX `fk_Competence_has_Projet_Projet1_idx` (`Projet_idProjet` ASC) VISIBLE,
  INDEX `fk_Competence_has_Projet_Competence1_idx` (`Competence_idCompetence` ASC) VISIBLE,
  CONSTRAINT `fk_Competence_has_Projet_Competence1`
    FOREIGN KEY (`Competence_idCompetence`)
    REFERENCES `Competence` (`idCompetence`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_Competence_has_Projet_Projet1`
    FOREIGN KEY (`Projet_idProjet`)
    REFERENCES `Projet` (`idProjet`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;