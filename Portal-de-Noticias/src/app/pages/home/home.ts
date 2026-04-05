import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  requisicao = [
  {
    tecnologia: 'Inteligência Artificial',
    descricao: 'IA continua evoluindo e sendo aplicada em diversas áreas como saúde e educação.'
  },
  {
    tecnologia: 'Computação em Nuvem',
    descricao: 'Serviços em nuvem crescem e facilitam o armazenamento e processamento de dados.'
  },
  {
    tecnologia: '5G',
    descricao: 'A tecnologia 5G promete conexões mais rápidas e menor latência.'
  },
  {
    tecnologia: 'Realidade Virtual',
    descricao: 'VR está sendo usada em jogos, treinamentos e experiências imersivas.'
  },
  {
    tecnologia: 'Realidade Aumentada',
    descricao: 'AR integra elementos digitais ao mundo real em tempo real.'
  },
  {
    tecnologia: 'Blockchain',
    descricao: 'Blockchain vai além das criptomoedas e é usado em segurança e contratos digitais.'
  },
  {
    tecnologia: 'Cibersegurança',
    descricao: 'A proteção de dados se torna cada vez mais importante no mundo digital.'
  },
  {
    tecnologia: 'Internet das Coisas',
    descricao: 'Dispositivos conectados tornam casas e cidades mais inteligentes.'
  },
  {
    tecnologia: 'Big Data',
    descricao: 'Análise de grandes volumes de dados ajuda empresas a tomarem decisões melhores.'
  },
  {
    tecnologia: 'Machine Learning',
    descricao: 'Máquinas aprendem padrões e melhoram suas respostas automaticamente.'
  },
  {
    tecnologia: 'Desenvolvimento Web',
    descricao: 'Tecnologias web evoluem com frameworks modernos e mais rápidos.'
  },
  {
    tecnologia: 'Aplicativos Mobile',
    descricao: 'Apps continuam dominando o acesso à internet em dispositivos móveis.'
  },
  {
    tecnologia: 'Computação Quântica',
    descricao: 'Computadores quânticos prometem resolver problemas extremamente complexos.'
  },
  {
    tecnologia: 'Automação',
    descricao: 'Processos automatizados aumentam produtividade e reduzem erros.'
  },
  {
    tecnologia: 'Robótica',
    descricao: 'Robôs são cada vez mais usados na indústria e em tarefas do dia a dia.'
  },
  {
    tecnologia: 'Games e eSports',
    descricao: 'O mercado de jogos cresce e movimenta bilhões globalmente.'
  }
];
}
