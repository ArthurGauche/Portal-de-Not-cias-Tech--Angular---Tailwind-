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
      tecnologia: 'Celular que lê pensamentos',
      descricao: 'Uma startup lançou um smartphone capaz de enviar mensagens apenas com o pensamento. O aparelho usa um chip cerebral experimental que transforma ideias em texto automaticamente. Usuários relataram problemas após enviar mensagens sem querer enquanto pensavam em comida.'
    },
    {
      tecnologia: 'Wi-Fi que funciona sem internet',
      descricao: 'Cientistas afirmam ter criado um Wi-Fi que funciona mesmo sem conexão com a internet. A tecnologia misteriosa teria acesso direto a “dados do universo”, mas ninguém conseguiu explicar como isso realmente funciona.'
    },
    {
      tecnologia: 'Notebook que nunca descarrega',
      descricao: 'Uma empresa revelou um notebook com bateria infinita que se alimenta da energia do vento gerado pelo próprio ventilador interno. Especialistas estão confusos, mas o produto já esgotou em pré-venda.'
    },
    {
      tecnologia: 'IA que prevê o futuro',
      descricao: 'Uma nova inteligência artificial consegue prever acontecimentos com até 3 dias de antecedência. O problema é que ela começou a prever coisas estranhas, como o usuário tropeçando sozinho sem motivo.'
    },
    {
      tecnologia: 'Mouse que funciona no ar',
      descricao: 'Foi lançado um mouse invisível que funciona sem superfície. Basta mover a mão no ar e ele interpreta os movimentos. Alguns usuários perderam o cursor e nunca mais encontraram.'
    },
    {
      tecnologia: 'Tela que dá cheiro',
      descricao: 'Uma nova tecnologia de telas permite sentir cheiros vindos do celular. Ao ver comida, você sente o aroma real. O problema é que anúncios começaram a liberar cheiro de propaganda.'
    },
    {
      tecnologia: 'Teclado que digita sozinho',
      descricao: 'Um teclado com IA avançada consegue terminar frases antes mesmo do usuário pensar nelas. Em testes, ele escreveu um TCC inteiro sem ninguém pedir.'
    },
    {
      tecnologia: 'Carro que anda sozinho… e decide o destino',
      descricao: 'Um carro autônomo foi lançado com uma função inédita: escolher para onde ir. Alguns usuários foram parar em cidades aleatórias sem explicação.'
    },
    {
      tecnologia: 'Fone que traduz pensamentos de animais',
      descricao: 'Um fone promete traduzir o que seu pet está pensando. Testes mostraram que 90% dos pensamentos de gatos são sobre dominar o mundo.'
    },
    {
      tecnologia: 'Computador feito de água',
      descricao: 'Pesquisadores criaram um computador líquido que funciona dentro de um recipiente com água. Ele é rápido, ecológico… mas trava sempre que alguém encosta.'
    },
    {
      tecnologia: 'Impressora que imprime comida real',
      descricao: 'Uma nova impressora 3D promete criar comidas completas em minutos. Em testes, ela conseguiu fazer pizzas perfeitas, mas também começou a imprimir pratos aleatórios sem ninguém pedir, incluindo um hambúrguer às 3 da manhã.'
    },
    {
      tecnologia: 'Relógio que controla o tempo… quase',
      descricao: 'Uma empresa lançou um smartwatch capaz de “voltar alguns segundos no tempo”. Usuários disseram que conseguiram evitar pequenos erros, mas o relógio às vezes volta sozinho sem aviso, causando confusão e déjà vu constantes.'
    }
  ];
}
