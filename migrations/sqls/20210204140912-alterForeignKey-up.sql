/* Replace with your SQL commands */

Drop table if exists `Competence_has_Projet`;
Drop table if exists `Projet`;

CREATE TABLE IF NOT EXISTS `Projet` (
  `idProjet` INT NOT NULL AUTO_INCREMENT,
  `nomProjet` VARCHAR(45) NULL,
  `descriptifProjet` VARCHAR(255) NULL,
  `urlApp` VARCHAR(128) NULL,
  `idClient` INT,
  PRIMARY KEY (`idProjet`),
  FOREIGN KEY (`idClient`) REFERENCES `Client` (`idClient`) ON DELETE SET NULL ON UPDATE CASCADE
)ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Competence_has_Projet` (
  `idCompetenceProject` INT NOT NULL AUTO_INCREMENT,
  `idCompetence` INT,
  `idProjet` INT,
  PRIMARY KEY (`idCompetenceProject`),
  FOREIGN KEY (`idCompetence`)
    REFERENCES `Competence` (`idCompetence`)
    ON DELETE SET NULL
    ON UPDATE CASCADE,
  FOREIGN KEY (`idProjet`)
    REFERENCES `Projet` (`idProjet`)
    ON DELETE SET NULL
    ON UPDATE CASCADE
)ENGINE = InnoDB;