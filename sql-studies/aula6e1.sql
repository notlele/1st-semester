create table empresa (
	nome varchar(40) primary key,
    representante varchar(20)
    );
    
create table origem (
	nome varchar(30) primary key,
    bairro varchar(40)
);

create table Aluno (
   ra int primary key,
   nome varchar(20),
   telefone int,
   email varchar(40),
   hobby varchar(30),
   origem varchar(30),
   empresa varchar(40),
   foreign key (origem) references origem(nome),
   foreign key (empresa) references empresa(nome)
   );
   
insert into empresa
   values ('totvs', 'xxx'),
          ('fleury', 'yyy'),
          ('logicalis', 'zzz');
          
insert into origem
   values ('etec', 'brás'),
          ('ios', 'sé'),
          ('proa', 'luz');
          
insert into Aluno
   values (52105, 'Viktor', 2312321, 'viktor@bandtec.com', 'jogos', 'etec', 'fleury'),
          (52094, 'Claudia', 6456455, 'claudia@bandtec.com', 'filmes', 'etec', 'logicalis'),
          (52059, 'Beatriz', 4534645, 'beatriz@bandtec.com', 'jogos', 'proa', 'totvs'),
          (52060, 'Bruno', 5234534, 'bruno@bandtec.com', 'dança', 'ios', 'totvs');
          
select * from aluno, origem, empresa;

update Aluno set hobby = 'jogos' where ra in (52059);

alter table empresa drop representante;

select * from Aluno where empresa = 'totvs';

select * from Aluno where origem = 'etec';
