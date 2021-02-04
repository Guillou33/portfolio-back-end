/* Replace with your SQL commands */
Drop table if exists `Admin`;
CREATE TABLE IF NOT EXISTS `Admin` (
  `idAdmin` INT NOT NULL AUTO_INCREMENT ,
  `nomAdmin` VARCHAR(45) NULL,
  `prenomAdmin` VARCHAR(45) NULL,
  `loginAdmin` VARCHAR(45) NULL,
  `passwordAdmin` VARCHAR(45) NULL,
  `image_url` VARCHAR(255) NULL,
  `presentation` VARCHAR(255) NULL,
  `tel` VARCHAR(12) NULL,
  `mail` VARCHAR(45) NULL,
  `compteGithub` VARCHAR(45) NULL,
  `compteLinkedIn` VARCHAR(45) NULL,
  PRIMARY KEY (`idAdmin`))
ENGINE = InnoDB;