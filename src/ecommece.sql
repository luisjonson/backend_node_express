--criação da tabela usuario.
select * from tbcategoriaCREATE TABLE `tbuser` (
  `usernumsequencial` int NOT NULL AUTO_INCREMENT,
  `usenome` varchar(255) NOT NULL,
  `useemail` varchar(255) NOT NULL,
  `usesenha` varchar(255) NOT NULL,
  `usetermo` tinyint(1) NOT NULL,
  `useativo` tinyint(1) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`usernumsequencial`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE IF NOT EXISTS `gtecblog`.`tags` (  
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    PRIMARY KEY (`id`))
ENGINE = InnoDB;

--Criação da tabela categoria
CREATE TABLE `tbcategoria` (
  `catnumsequencial` int NOT NULL AUTO_INCREMENT,
  `catnome` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`catnumsequencial`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
