import React, { useState } from 'react';
import { ChevronDownIcon } from './icons/ChevronDownIcon';

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-white/10 last:border-b-0">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left py-5 px-6"
        aria-expanded={isOpen}
      >
        <span className={`text-lg font-medium transition-colors duration-300 ${isOpen ? 'text-[#F79824]' : 'text-white'}`}>{question}</span>
        <ChevronDownIcon className={`w-5 h-5 transform transition-all duration-300 ${isOpen ? 'rotate-180 text-[#F79824]' : 'text-gray-400'}`} />
      </button>
      <div
        className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
            <div className="pb-5 px-6 text-gray-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: answer }} />
        </div>
      </div>
    </div>
  );
};

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData = [
    {
      question: 'Como funciona a comunidade completa?',
      answer: `A comunidade FPM funciona no Whatsapp e é formada, atualmente, por 5 grupos:<br/><br/>
        <ul class="list-disc list-inside space-y-2 pl-2">
          <li><b>Avisos:</b> por onde são postados os conteúdos comuns a todos os grupos, como promoções bonificadas, transferências com bônus e compra de pontos com desconto, e demais avisos dos administradores;</li>
          <li><b>Grupo “Alertas – BSB”:</b> aqui são postadas somente as passagens em promoção saindo de Brasília;</li>
          <li><b>Grupo “Alertas SP – Internacional”:</b> aqui são postadas somente as passagens em promoção saindo de São Paulo para destinos internacionais;</li>
          <li><b>Grupo “Networking – BSB”:</b> espaço destinado à interação entre os participantes para trocas de experiências, dicas de viagens e compartilhamento de muitas informações e conteúdos do universo das milhas e viagens.</li>
          <li><b>Grupo “Balcão de milhas”:</b> grupo destinado aos membros que querem vender ou comprar milhas de outros membros.</li>
        </ul>`
    },
    {
      question: 'São só destinos nacionais?',
      answer: 'Nãooooo! Tanto na comunidade completa quanto no Plano Brasília nós enviamos promoções para destinos nacionais e internacionais, diariamente!'
    },
    {
        question: 'Tem alertas para alta temporada e feriados?',
        answer: 'Sim! Nós temos alertas temáticos, de férias (dezembro, janeiro e julho), de diversos feriados e também de finais de semana. Você vai querer viajar todo mês, escreve aí!'
    },
    {
      question: 'Vocês vendem passagens? Fazem cotações?',
      answer: `Não fazemos cotações e nem vendemos passagens.<br/><br/>
        Porém, se você quiser uma passagem específica ou não tiver as milhas para emitir alguma passagem, pode solicitar no nosso Balcão de Milhas (acesso exclusivo dos membros da comunidade completa): lá, outro participante emite sua passagem e você faz o pagamento após a emissão, por pix ou cartão*.<br/><br/>
        <em class="text-sm text-gray-400">*Alguns membros aceitam cartão de crédito.</em>`
    },
    {
        question: 'Vocês fazem buscas individuais?',
        answer: 'Não fazemos buscas individuais (com destino e data). Mas todo dia 1º de cada mês, os membros da comunidade completa (não do Plano BSB) podem nos dizer qual seu destino e mês de interesse para reforçarmos nas nossas buscas (sem data específica).'
    },
    {
        question: 'Não tenho muita flexibilidade de datas, será que é pra mim?',
        answer: 'A maioria dos nossos membros também tem rotina apertada, trabalho e filhos. Mesmo assim, conseguem aproveitar bastante porque recebem muitos alertas ao longo do ano, então é bem provável que algum se encaixe pra você! E mesmo quando a data não bate, vale testar na sua data porque pode estar em promoção também!'
    },
    {
      question: 'E o Plano Brasília, como funciona?',
      answer: 'O Plano Brasília dá acesso somente ao grupo de alertas com saídas de BSB, sem acesso ao balcão, networking, SP internacional, grupo de avisos da comunidade e guia colaborativo de viagens.'
    },
    {
        question: 'E se eu não tiver as milhas, consigo aproveitar tmb? Vocês mandam alertas de passagens em dinheiro?',
        answer: 'Consegue aproveitar demais também! No alerta, junto com o print da promoção, nós encaminhamos várias informações, e uma delas é o valor em R$ para emissão no balcão. Então, se você não tiver as milhas, pode comprar a passagem em dinheiro com outro membro da comunidade.'
    },
    {
        question: 'Como funciona o Balcão de milhas?',
        answer: `O Balcão de Milhas* é um dos grandes diferenciais da Comunidade Flores pelo Mundo.<br/><br/>Ele existe pra facilitar a vida de quem quer viajar pagando bem mais barato, em dinheiro — e também pra quem tem milhas sobrando e quer negociá-las de forma segura.<br/><br/>O participante que tem milhas disponíveis vai fazer a emissão da sua passagem com as milhas dele. Depois da emissão, você paga o valor combinado, que geralmente fica bem abaixo do preço do site da cia aérea, e recebe o bilhete emitido diretamente no seu nome — com segurança, rapidez e economia.<br/><br/>Assim, você viaja com milhas sem precisar ter milhas.<br/><br/><em class="text-sm text-gray-400">*O Balcão é restrito aos membros da comunidade completa e o acesso é liberado somente após verificação de perfil.</em>`
    },
    {
        question: 'Depois de fazer a assinatura, como vou ter acesso ao grupo?',
        answer: 'Assim que finalizar o pagamento da sua assinatura, você será direcionado(a) para a comunidade Flores pelo Mundo ou para o Plano BSB, se for o caso. Basta clicar no link que vai aparecer na sua tela, ao final do pagamento.<br/><br/>Porém, se o link não abrir, é só chamar a gente aqui!'
    },
    {
        question: 'Em quais cias aéreas/programas de fidelidade são feitas as pesquisas?',
        answer: 'Fazemos as pesquisas no LATAM Pass, Smiles, Azul, AAdvantage e Iberia Plus.'
    },
    {
        question: 'Tem fidelização?',
        answer: 'Em qualquer um dos planos você tem até 7 dias para solicitar reembolso, se entender que nosso conteúdo não vai te ajudar a viajar mais barato. Os planos semestral e anual vão seguir a periodicidade de cada um, sem renovação automática, e não têm reembolso após o prazo de 7 dias.'
    },
    {
        question: 'Humm ainda tô na dúvida... E se for golpe?',
        answer: 'Então eu te convido para dar uma olhadinha nisso aqui! Mas leia com muita atenção!'
    },
    {
        question: 'E se eu não viajar com frequência, ainda vale?',
        answer: 'Mesmo que você viaje pouco, vale muito a pena! As promoções da comunidade aparecem o tempo todo, e só UMA boa passagem já pode compensar todo o valor da assinatura (e você vai receber mais de 3600 boas oportunidades!).<br/><br/>Além disso, você vai aprendendo aos poucos e se preparando cada vez melhor pra quando surgir a oportunidade de viajar.'
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  const middleIndex = Math.ceil(faqData.length / 2);
  const firstColumn = faqData.slice(0, middleIndex);
  const secondColumn = faqData.slice(middleIndex);

  return (
    <section id="faq" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Perguntas Frequentes</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-400 mt-4">
            Tire aqui suas principais dúvidas sobre a nossa comunidade!
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-8">
            <div className="bg-[#1C1C1E] rounded-2xl h-fit">
                {firstColumn.map((item, index) => (
                    <FaqItem
                    key={index}
                    question={item.question}
                    answer={item.answer}
                    isOpen={openIndex === index}
                    onClick={() => handleToggle(index)}
                    />
                ))}
            </div>
            <div className="bg-[#1C1C1E] rounded-2xl h-fit">
                 {secondColumn.map((item, index) => {
                    const originalIndex = index + middleIndex;
                    return (
                        <FaqItem
                            key={originalIndex}
                            question={item.question}
                            answer={item.answer}
                            isOpen={openIndex === originalIndex}
                            onClick={() => handleToggle(originalIndex)}
                        />
                    );
                })}
            </div>
        </div>
         <div className="text-center mt-12 text-gray-400">
            Não encontrou o que procurava? Contate nossa{' '}
            <a href="https://wa.me/5561998936193" target="_blank" rel="noopener noreferrer" className="font-semibold text-white hover:underline">
                equipe de suporte
            </a>.
        </div>
      </div>
    </section>
  );
};

export default Faq;