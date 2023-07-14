-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema test_neoris
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema test_neoris
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `test_neoris` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `test_neoris` ;

-- -----------------------------------------------------
-- Table `test_neoris`.`persona`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `test_neoris`.`persona` (
  `identificacion` VARCHAR(255) NOT NULL,
  `direccion` VARCHAR(255) NULL DEFAULT NULL,
  `edad` VARCHAR(255) NULL DEFAULT NULL,
  `genero` VARCHAR(255) NULL DEFAULT NULL,
  `nombre` VARCHAR(255) NULL DEFAULT NULL,
  `telefono` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`identificacion`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `test_neoris`.`cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `test_neoris`.`cliente` (
  `clienteid` BIGINT NOT NULL AUTO_INCREMENT,
  `contra` VARCHAR(255) NULL DEFAULT NULL,
  `estado` INT NOT NULL,
  `persona_id` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`clienteid`),
  UNIQUE INDEX `UK_fp4oq6jpmv4n8xirq1dt5910b` (`persona_id` ASC) VISIBLE,
  CONSTRAINT `FKmc52upywn8gona2iiwwwphb92`
    FOREIGN KEY (`persona_id`)
    REFERENCES `test_neoris`.`persona` (`identificacion`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `test_neoris`.`cuenta`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `test_neoris`.`cuenta` (
  `num_cuenta` VARCHAR(255) NOT NULL,
  `estado` INT NOT NULL,
  `saldo_inicial` BIGINT NULL DEFAULT NULL,
  `tipo_cuenta` VARCHAR(255) NULL DEFAULT NULL,
  `cliente_clienteid` BIGINT NULL DEFAULT NULL,
  PRIMARY KEY (`num_cuenta`),
  INDEX `FK4xrbvrhb0f4kwtk5jroeslole` (`cliente_clienteid` ASC) VISIBLE,
  CONSTRAINT `FK4xrbvrhb0f4kwtk5jroeslole`
    FOREIGN KEY (`cliente_clienteid`)
    REFERENCES `test_neoris`.`cliente` (`clienteid`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `test_neoris`.`movimientos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `test_neoris`.`movimientos` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `fecha` DATE NULL DEFAULT NULL,
  `saldo` BIGINT NULL DEFAULT NULL,
  `tipo_movimiento` VARCHAR(255) NULL DEFAULT NULL,
  `valor` BIGINT NULL DEFAULT NULL,
  `cuenta_num_cuenta` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `FKp5x51r78tjy72d5x9y07csmrv` (`cuenta_num_cuenta` ASC) VISIBLE,
  CONSTRAINT `FKp5x51r78tjy72d5x9y07csmrv`
    FOREIGN KEY (`cuenta_num_cuenta`)
    REFERENCES `test_neoris`.`cuenta` (`num_cuenta`))
ENGINE = InnoDB
AUTO_INCREMENT = 8
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
