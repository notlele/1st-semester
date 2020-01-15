create table funcionario (
		codFunc int primary key,
        nmFunc varchar(30),
        vlrSalario decimal(10,2),
        sexo enum('f','m'),
        codSupervisor int,
        foreign key (codSupervisor) references funcionario(codFunc),
        dataNasc date
        );
        
create table departamento (
		codDepto int primary key,
        nmDepto varchar(30),
        codGerente int,
        foreign key (codGerente) references funcionario(codFunc),
        dataInicioGer date
        );
        
create table projeto (
		codProj int primary key,
        nmProj varchar(30),
        localProj varchar(30),
        codDepto int,
        foreign key (codDepto) references departamento(codDepto)
        );
        
alter table funcionario add column codDepto int,
		add foreign key (codDepto) references departamento(codDepto);
        
create table trabalhaEm (
		codFunc int,
        foreign key (codFunc) references funcionario(codFunc),
        codProj int,
        foreign key (codProj) references projeto(codProj),
        horas int,
        primary key (codFunc, codProj)
        );

insert into departamento values
		(105, 'Pesquisa', 2, '2008-05-22'),
        (104, 'Administração', 7, '2015-01-01'),
        (101, 'Matriz', 8, '2001-06-19');

insert into funcionario (codFunc, nmFunc, vlrSalario, sexo, dataNasc) values
		(1, 'Joao Silva', '3500', 'm', '1985-01-09'),
        (2, 'Fernando Wong', '4500', 'm', '1975-12-08'),
		(3, 'Alice Sousa', '2500', 'f', '1988-01-19'),
        (4, 'Janice Moraes', '4300', 'f', '1970-06-20'),
        (5, 'Ronaldo Lima', '3800', 'm', '1982-09-15'),
        (6, 'Joice Leite', '2500', 'f', '1992-07-31'),
        (7, 'Antonio Pereira', '2500', 'm', '1989-03-29'),
        (8, 'Juliano Brito', '5500', 'm', '1957-11-10');
        
update funcionario set codSupervisor = 2 where codFunc = 1;
update funcionario set codSupervisor = 7 where codFunc = 3;
update funcionario set codSupervisor = 3 where codFunc = 7;
update funcionario set codSupervisor = 1 where codFunc in (5,6);
update funcionario set codSupervisor = 8 where codFunc in (2,4);

update funcionario set codDepto = 105 where codFunc in (1,2,5,6);
update funcionario set codDepto = 104 where codFunc in (3,4,7);
update funcionario set codDepto = 101 where codFunc = 8;

insert into projeto values
		(1, 'Produto X', 'Santo André', 105),
        (2, 'Produto Y', 'Itu', 105),
        (3, 'Produto Z', 'São Paulo', 105),
        (10, 'Informatização', 'Mauá', 104),
        (20, 'Reorganização', 'São Paulo', 101),
        (30, 'Benefícios', 'Mauá', 104);
        
insert into trabalhaEm values
		(1,1,32.5),
        (1,2,7.5),
        (5,3,40),
        (6,1,20),
        (6,2,20),
        (2,2,10),
        (2,3,10),
        (2,10,10),
        (2,20,10),
        (3,30,30),
        (3,10,10),
        (7,10,35),
        (7,30,5),
        (4,30,20),
        (4,20,15),
        (8,20,null);

select * from funcionario;
select * from departamento;
select * from projeto;
select * from trabalhaEm;

insert into funcionario values
		(null, 'Cecília Ribeiro', '2800', 'f', null, '1980-04-05', 104);
	/* nao funciona pois pk notnull */
    
insert into funcionario values
		(3, 'Alice Sousa', '2800', 'f', 4, '1980-04-05', 107);
	/* nao funciona por ja ter um cod 3 e nao existe depto 107 */
    
insert into funcionario values
		(9, 'Cecília Ribeiro', '2800', 'f', 4, '1980-04-05', 104);
	/* sim pois tudo está de acordo */
    
delete from trabalhaEm where codFunc = 3 and codProj = 10;
	/* sim pois existe um registro com esses códigos */
    
delete from funcionario where codFunc = 3;
delete from funcionario where codFunc = 2;
	/* nao porque é uma fk em outra tabela */
    
update funcionario set vlrSalario = '2800' where codFunc = 3;
	/* sim pois o salario era outro */
    
update funcionario set codDepto = 101 where codFunc = 3;
	/* de boa */
    
update funcionario set codDepto = 107 where codFunc = 3;
	/* nao porque nao existe depto 107 */
    
select vlrSalario,dataNasc from funcionario where codFunc = 1;

select vlrSalario from funcionario;

select distinct vlrSalario from funcionario;

select * from funcionario order by nmFunc;

select * from funcionario order by vlrSalario desc;

select * from funcionario where vlrSalario >= '2000' and vlrSalario <= '4000';

select * from funcionario where nmFunc like 'J%';

select * from funcionario where nmFunc like '%a';

select * from funcionario where nmFunc like '__n%';

select nmFunc, dataNasc from funcionario where nmFunc like '%s____';

select * from funcionario where codDepto = 105;

select * from funcionario where codDepto = 105 and vlrSalario > '3500';

select * from funcionario where codDepto = 105 and nmFunc like 'j%';

select f.codFunc as codigo, f.nmFunc, s.codFunc as codigoSupervisor, s.nmFunc as nmSupervisor 
	from funcionario as f, funcionario as s where s.codFunc = f.codSupervisor;
    
select codProj, p.codDepto, nmFunc, dataNasc from projeto as p, departamento as d, funcionario as f where p.codDepto = d.codDepto
	and d.codGerente = f.codFunc and localProj = 'São Paulo';

select f.codFunc, nmFunc, t.codProj, nmProj, horas from trabalhaEm as t, funcionario as f, projeto as p where t.codFunc = f.codFunc
	and t.codProj = p.codProj;
    
select nmFunc from funcionario where dataNasc < '1980';

update funcionario set vlrSalario = vlrSalario * 1.10 where codDepto = (select codDepto from departamento where nmDepto = 'Pesquisa');

select count(distinct vlrSalario) as 'Qtd salarios distintos' from funcionario;

select count(distinct localProj) as 'Qtd locais distintos' from projeto;

select avg(vlrSalario) as mediaSalario, sum(vlrSalario) as totalSalario from funcionario;

select min(vlrSalario) as menorSalario, max(vlrSalario) as maiorSalario from funcionario;

select codDepto, sum(vlrSalario) as totalSalario from funcionario group by codDepto;

select codDepto, count(*) as qtdFunc, sum(vlrSalario) as totalSalario from funcionario group by codDepto having count(*) > 2;

select * from funcionario as f, departamento as d where f.codDepto = d.codDepto;

SELECT * FROM funcionario AS f INNER JOIN departamento AS d ON f.codDepto = d.codDepto where vlrSalario > '3500';

select f.codFunc, nmFunc, p.codProj, nmProj, horas from funcionario as f join trabalhaEm as t on t.codFunc = f.codFunc join projeto as p
	on t.codProj = p.codProj;

insert into funcionario values
	(10, 'José da Silva', '1800', 'm', 3, '2000-10-12', null),
    (11, 'Benedito de Almeida', '1200', 'm', 5, '');
    
    -- Exibição dos funcionários e de seus respectivos departamentos
-- INNER JOIN não traz os funcionários sem departamento e nem os departamentos sem funcionário 
select * from funcionario as f inner join Departamento as d on f.codDepto = d.codDepto;
    
-- Exibição dos funcionários e de seus respectivos departamentos
-- LEFT JOIN traz os funcionários sem departamento
select * from funcionario as f
    left join departamento as d on f.codDepto = d.codDepto;
    
-- Exibição dos funcionários e de seus respectivos departamentos
-- RIGHT JOIN traz os departamentos sem funcionário 
select * from funcionario as f
    right join departamento as d on f.codDepto = d.codDepto;    

-- Exibição dos departamentos e de seus respectivos funcionários
-- RIGHT JOIN aqui traz os dados dos funcionários sem departamento
select * from departamento as d
    right join funcionario as f on f.codDepto = d.codDepto;    

-- Exibição dos funcionários e de seus respectivos departamentos
-- traz os funcionários sem departamento e nem os departamentos sem funcionário 
select * from funcionario as f left join departamento as d on f.codDepto = d.codDepto
   union 
 select * from funcionario as f right join departamento as d on f.codDepto = d.codDepto;    

-- exibir a quantidade de mulheres da tabela Funcionario
select count(sexo) as QtdMulheres from Funcionario where sexo = 'f';
