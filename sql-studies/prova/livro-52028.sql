create database prova;

use prova;

create table livro (
	codigo int primary key,
    titulo varchar(40),
    autor varchar(30),
    genero varchar(10)
);

insert into livro
	values (001,'the outsider','stephen king','ficção'),
		   (002,'neuromancer','william gibson','ficção'),
           (003,'harry potter','j.k. rowling','ficção'),
           (004,'gwendys button box','stephen king','terror'),
           (005,'a culpa é das estrelas','john green','romance'),
           (006,'emma','jane austen','romance'),
           (007,'caixa de passaros','josh malerman','suspense');
           
select * from livro;

select titulo,genero from livro;

select * from livro where genero = 'ficção';

select * from livro where autor = 'stephen king';

select * from livro order by titulo;

select * from livro order by autor desc;

select * from livro where titulo like 'c%';

select * from livro where autor like '%n';

select * from livro where genero like '_o%';

select * from livro where titulo like '%e_';

update livro set genero = 'fantasia' where codigo = 003;

select * from livro;

delete from livro where codigo = 005;

select * from livro;

drop table livro;

select * from livro;