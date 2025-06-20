-----------------tbcategoria-------------------------------
CREATE TABLE `tbcategoria` (
  `catnumsequencial` int NOT NULL AUTO_INCREMENT,
  `catnome` varchar(255) NOT NULL,
  `catativo` tinyint(1) NOT NULL,
  PRIMARY KEY (`catnumsequencial`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

-----------------tbmarca-----------------------------------
CREATE TABLE `tbmarca` (
  `marnumsequencial` int NOT NULL AUTO_INCREMENT,
  `marnome` varchar(150) NOT NULL,
  `mardescricao` varchar(255) DEFAULT NULL,
  `marativo` varchar(255) NOT NULL,
  PRIMARY KEY (`marnumsequencial`),
  UNIQUE KEY `marnome` (`marnome`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
-----------------tbproduto--------------------------------

CREATE TABLE `tbproduto` (
  `pronumsequencial` int NOT NULL AUTO_INCREMENT,
  `protitulo` varchar(255) NOT NULL,
  `propreco` decimal(10,2) NOT NULL,
  `prodescricao` varchar(255) DEFAULT NULL,
  `prolinkimagem` varchar(255) NOT NULL,
  `proprecopromocional` decimal(10,2) DEFAULT NULL,
  `promarca` int NOT NULL,
  `procategoria` int NOT NULL,
  `proqueimaestoque` tinyint(1) DEFAULT '0',
  `procolecao` tinyint(1) DEFAULT '0',
  `proemalta` tinyint(1) DEFAULT '0',
  `proofertaEspecial` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`pronumsequencial`),
  KEY `promarca` (`promarca`),
  KEY `procategoria` (`procategoria`),
  CONSTRAINT `tbproduto_ibfk_1` FOREIGN KEY (`promarca`) REFERENCES `tbmarca` (`marnumsequencial`) ON UPDATE CASCADE,
  CONSTRAINT `tbproduto_ibfk_2` FOREIGN KEY (`procategoria`) REFERENCES `tbcategoria` (`catnumsequencial`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

-----------------tbuser----------------------------------
CREATE TABLE `tbuser` (
  `usenumsequencial` int NOT NULL AUTO_INCREMENT,
  `usenome` varchar(255) NOT NULL,
  `useemail` varchar(255) NOT NULL,
  `usesenha` varchar(255) NOT NULL,
  `usetermo` tinyint(1) NOT NULL,
  `useativo` tinyint(1) NOT NULL,
  PRIMARY KEY (`usenumsequencial`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

-----------------Insert de Marca---------------------------

INSERT INTO `tbmarca` 
(
  `marnome`,
  `marativo`
)
VALUES 
('SmartFit',1),
('Urban Style',1),
('NoiseBlock',1),
('GlowCare',1),
('Runner',1),
('UrbanShield',1),
('SmartBlend',1),
('HomeCotton',1),
('AromaArt',1),
('DeskTidy',1),
('HyperSound',1),
('TechWear',1),
('LuxMirror',1),
('ThermoSteel',1),
('SmartDesk',1);

-----------------Insert de tbcategoria-----------------------

insert into `tbcategoria` 
(
`catnome`,
`catativo`
)
values
('Tecnologia e Gadgets', 1),
('Moda Masculina', 1),
('Moda Feminina', 1),
('Beleza e Cuidados Pessoais', 1),
('Casa e Decoração', 1),
('Esporte e Lazer', 1),
('Cama, Mesa e Banho', 1),
('Acessórios e Utilidades', 1),
('Eletrônicos e Áudio', 1);


-----------------------------insert Produto------------------------

INSERT INTO `ecommece`.`tbproduto`
(`protitulo`,
 `propreco`,
 `prodescricao`,
 `prolinkimagem`,
 `proprecopromocional`,
 `promarca`,
 `procategoria`,
 `proqueimaestoque`,
 `procolecao`,
 `proemalta`,
 `proofertaEspecial`)
VALUES
('SmartFit Watch X3', 499.90, 'Relógio inteligente com monitoramento de saúde e notificações.', 'turn0image0', 1, 1, 1, 0, 1, 0, 1),
('Camiseta Oversized Urban Style', 89.90, 'Camiseta unissex de algodão premium, estilo streetwear.', 'turn0image1', 0, 2, 3, 1, 0, 1, 0),
('Headphone Bluetooth NoiseBlock Pro', 299.90, 'Cancelamento de ruído ativo e até 30 h de bateria.', 'turn0image2', 1, 3, 1, 0, 1, 0, 1),
('Kit SkinCare Facial Glow', 159.90, 'Conjunto vegano de skincare iluminador.', 'turn0image3', 0, 4, 4, 1, 0, 1, 0),
('Tênis Runner Max 2.0', 249.90, 'Comfort e amortecimento para corrida e caminhada.', 'turn0image0', 1, 5, 6, 0, 1, 0, 1),
('Mochila Anti-Furto UrbanShield', 189.90, 'Proteção com compartimento secreto e saída USB.', 'turn0image1', 0, 6, 4, 1, 0, 1, 0),
('Liquidificador SmartBlend 1000W', 349.90, 'Potente, 12 velocidades, jarra em Tritan.', 'turn0image2', 1, 7, 5, 0, 1, 0, 1),
('Conjunto Cama Queen Algodão Egípcio', 399.90, 'Lençóis 300 fios, toque macio e durável.', 'turn0image3', 0, 8, 7, 1, 0, 1, 0),
('Kit 3 Velas Aromáticas Artesanais', 129.90, 'Lavanda, baunilha e canela para relaxar.', 'turn0image0', 1, 9, 5, 0, 1, 0, 1),
('Organizador de Cabos Magnético DeskTidy', 59.90, 'Clipes magnéticos para manter cabos no lugar.', 'turn0image1', 0, 10, 8, 1, 0, 1, 0),
('Fone Gamer HyperSound G7', 249.90, 'Som surround + microfone com LED RGB.', 'turn0image2', 1, 11, 1, 0, 1, 0, 1),
('Jaqueta Windbreaker Tech', 199.90, 'Leve, à prova d\'água e corte moderno.', 'turn0image3', 0, 12, 3, 1, 0, 1, 0),
('Espelho LED com Sensor Touch', 219.90, 'Espelho de bancada com luz ajustável.', 'turn0image0', 1, 13, 5, 0, 1, 0, 1),
('Garrafa Térmica Inox 1L', 79.90, 'Mantém líquidos frios por até 24h.', 'turn0image1', 0, 14, 5, 1, 0, 1, 0),
('Kit Escritório SmartDesk', 499.90, 'Suporte para laptop + base ventilada.', 'turn0image2', 1, 15, 8, 0, 1, 0, 1);

-------------------------userPadrao----------------------------

INSERT INTO `ecommece`.`tbuser`
(
`usenome`,
`useemail`,
`usesenha`,
`usetermo`,
`useativo`)
VALUES
('admin',
'teste@teste',
'$2b$10$mbMqIUGrcjindgZqJzvG7.ayW9y57nEiuWz40jBlYn0hvitqC3G6C',
1,
1
);