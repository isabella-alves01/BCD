-- ============================================================
-- AULA 08 - ATIVIDADE PRÁTICA DE DML
-- Nome: Isabella Alves do Carmo Cleto
-- Turma: DEVIS 1/26 Data: 02/10/2026
-- Base: smartcoffee_dml
-- ============================================================
USE SMARTCOFFEE_DML_ISABELLA1;
-- IMPORTANTE:
-- Para toda questão de UPDATE ou DELETE, escreva primeiro um SELECT
-- com o mesmo WHERE para validar os registros afetados.

-- PARTE A - INSERT

-- 1. Cadastre dois novos clientes com dados diferentes.

INSERT INTO cliente(nome,email,telefone,cidade,ativo) VALUES
('Joana Pessoa','joana@gmail.com',99999999999998,'Limeira',TRUE),
('Gustavo Lima','gustavo@gmail.com',909088358332,'Limeira',TRUE);


-- 2. Cadastre a categoria 'Especiais da Casa'.

INSERT INTO categoria (nome) VALUES
('Especial da casa');


-- 3. Localize o id da categoria criada e cadastre três produtos nela.

SET @categoria_especial = (SELECT id_categoria FROM categoria WHERE nome = 'Especiais da Casa');


INSERT INTO categoria (id_categoria, nome) VALUES 
(14, 'Lanches'),
(15, 'Bolos e Doces'),
(16, 'Sobremesas Especial');

SELECT* from categoria;
INSERT INTO categoria(nome,id_categoria)  VALUES
('Sorvete',17);

-- 4. Cadastre um terceiro cliente sem telefone.

INSERT INTO cliente(nome, email, telefone,cidade,ativo) VALUES
('Jodmilson Silva','jodmilsonsilva3@gmail.com',NULL,'Americana',TRUE);

SELECT* from cliente;


-- 5. Crie um novo pedido para um dos clientes cadastrados.

INSERT INTO pedido (data_pedido,status_pedido, valor_total,id_cliente) VALUES
(NOW(),'ABERTO',12.00,1);

SET @pedido_compra = LAST_INSERT_ID();

SELECT * from pedido

-- 6. Use LAST_INSERT_ID() para guardar o id do pedido em @pedido_atividade
--    e insir
a pelo menos dois itens nesse pedido.

INSERT INTO pedido (data_pedido,status_pedido, valor_total,id_cliente) VALUES
(NOW(),'ABERTO',20.00,2),
(NOW(),'FINALIZADO',23.00,3);

SET @pedido_atividade = LAST_INSERT_ID();


-- PARTE B - UPDATE

-- 7. Corrija o telefone de um dos clientes criados.
-- SELECT de validação:
-- UPDATE:
-- SELECT final:

UPDATE Cliente
SET telefone = '1988880001'
WHERE id_cliente = 1

SELECT * FROM cliente

-- 8. Altere cidade e telefone de outro cliente em um único UPDATE.

UPDATE Cliente
SET telefone = '19932098457',
CIDADE='Piracicaba'
WHERE id_cliente = 3;

-- 9. Aumente em 8% o preço dos produtos da categoria 'Especiais da Casa'.

UPDATE produto
SET preco = preco * 0.08
WHERE id_categoria = 12;


-- 10. Altere o status do pedido criado para 'PREPARANDO'.

UPDATE pedido
SET status_pedido = 'PREPARANDO'
WHERE id_pedido = 1;


SELECT * FROM pedido



-- 11. Atualize valor_total do pedido de acordo com os itens cadastrados.
--     Você pode calcular previamente com SELECT SUM(quantidade * preco_unitario).


-- não terminei a tabela sem conclusao


-- 12. Escolha um dos produtos criados e faça uma exclusão lógica (ativo = FALSE).

UPDATE produto 
SET ativo = FALSE 
WHERE id_produto = 1;


-- PARTE C - DELETE

-- 13. Crie um cliente de teste sem pedidos. Depois localize e exclua apenas esse cliente.
INSERT INTO cliente (nome, email, telefone, cidade, ativo) 
VALUES ('Cliente Teste', 'teste@email.com', '1999999999', 'Limeira', TRUE);

DELETE FROM cliente 
WHERE email = 'teste@email.com';


-- 14. Tente excluir um cliente da base original que possua pedidos.
-- Deixe o DELETE comentado após o teste e descreva o erro abaixo.
-- DELETE FROM cliente WHERE id_cliente = 10;
-- Resultado observado: Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`smartcoffee_dml_isabella1`.`pedido`, CONSTRAINT `fk_pedido_cliente` FOREIGN KEY (`id_cliente`) REFERENCES `cliente` (`id_cliente`))


-- 15. Explique em comentário por que a FK bloqueou a exclusão.
-- Resposta: A chave estrangeira (FK) bloqueou a exclusão porque existem registros na tabela 'pedido' vinculados a este cliente. Para manter a integridade referencial do banco de dados e evitar pedidos "órfãos" sem um cliente associado, o SGBD impede que o registro pai seja excluído.


-- 16. Crie uma categoria temporária chamada 'Excluir Depois' e remova-a.
INSERT INTO categoria (nome) 
VALUES ('Excluir Depois');

DELETE FROM categoria 
WHERE nome = 'Excluir Depois';