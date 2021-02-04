/* Replace with your SQL commands */
Drop table if exists `Admin`;
CREATE TABLE IF NOT EXISTS `Admin` (
  `idAdmin` INT NOT NULL AUTO_INCREMENT ,
  `nomAdmin` VARCHAR(45) NULL,
  `prenomAdmin` VARCHAR(45) NULL,
  `loginAdmin` VARCHAR(45) NULL,
  `passwordAdmin` VARCHAR(45) NULL,
  PRIMARY KEY (`idAdmin`))
ENGINE = InnoDB;