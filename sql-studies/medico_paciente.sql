create database paciente;
use paciente;

create table Medico (
   idMedico int primary key,
   nmMedico varchar(45),
   nmEspecialidade varchar(45),
   vlrSalario decimal(10,2)
   );
   
create table Paciente (
   idPaciente int primary key,
   nmPaciente varchar(45),
   nrTelefone char(15)
   );
create table Consulta (
	idConsulta int primary key,
    dtConsulta date,
    hrConsulta time,
    idMedico int,
    foreign key(idMedico) references Medico(idMedico),
    idPaciente int,
    foreign key(idPaciente) references Paciente(idPaciente)
 );
 insert into Medico values 
    (1, 'Roberto', 'cardiologista', '15000'),
    (2, 'Eliane', 'pediatra', '10000.50'),
    (3, 'Javascripta', 'psicanalista', '12000'),
    (4, 'Carlos', 'ortopedista', '13000');
select * from Medico;
insert into Paciente values
    (100, 'Mickey', '3456-1234'),
    (101, 'Donald', '5674-3456'),
    (102, 'Patinhas', '5576-8765'),
    (103, 'Pateta', '3445-1234');
select * from Paciente;    
insert into Consulta values
    (1, '2017-03-05','13:00', 1, 100),
    (2, '2017-10-20','11:00', 1, 101),
    (3, '2016-11-09','10:30', 2, 100),
    (4, '2016-10-07','09:00', 3, 101),
    (5, '2018-04-02','17:00', 4, 102),
    (6, '2018-10-01','18:30', 2, 102),
    (7, '2018-07-01','19:00', 3, 100),
    (8, '2018-06-03','09:30', 4, 103);
select * from Consulta;
select * from Medico,Paciente,Consulta 
     where Medico.idMedico = Consulta.idMedico and
           Paciente.idPaciente = Consulta.idPaciente;
           
select idMedico, nmMedico, nmEspecialidade, (select nmMedico from Medico) where idMedico = 4;

select sum(vlrSalario) from Medico;
select sum(vlrSalario) as Total from Medico;

select avg(vlrSalario) from Medico;
select avg(vlrSalario) as Media from Medico;

select max(vlrSalario) as MaiorSalario,
	   min(vlrSalario) as MenorSalario from Medico;
       
select count(vlrSalario) as QuanSalario from Medico;

insert into Medico values
	   (5, 'Python', 'oncologista', '12000');

select vlrSalario from Medico;

select distinct vlrSalario from Medico;

select count(vlrSalario) as QuantSalario,
	   count(distinct vlrSalario) as QuantSalDistintos from Medico;
       
update Medico set vlrSalario = vlrSalario * 1.10 where idMedico = 1;