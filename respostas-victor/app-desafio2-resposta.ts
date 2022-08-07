interface pessoa{
    nome: String,
    idade: Number,
    profissao: String

};

interface pessoas extends Array<pessoa>{}

var result: pessoa[]=[
    {nome: 'Maria', idade: 29, profissao: 'Atriz'},
    {nome: 'Roberto', idade: 19, profissao: 'Padeiro'},
    {nome: 'Laura', idade: 32, profissao: 'Atriz'},
    {nome: 'Carlos', idade: 19, profissao: 'Padeiro'}

];
