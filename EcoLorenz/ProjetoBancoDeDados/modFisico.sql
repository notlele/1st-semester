create table usuario (
	CPF int primary key,
	nmUsuario varchar(),
    nrTelefone char(11),
    email varchar(40),
    senha nvarchar()
	);

create table casa (
    idCasa int primary key,
    dono int,
    foreign key (dono) references usuario(CPF),
    CEP char(8),
    nrCasa int
    );

create table sensor (
    idSensor int primary key,
    idCasa int,
    foreign key (idCasa) references casa(idCasa),
    localizacao varchar(20),
    temperatura float not null,
    umidade float not null,
    horario datetime not null
    );