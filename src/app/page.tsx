import Image from 'next/image';
import Menu from './components/Menu';
import Whatsapp from './components/Whatsapp';
import ItemWork from './components/ItemWork';
import { Mail, Phone } from 'lucide-react';

export default function Home() {
  return (
    <div className="text-white bg-black font-[family-name:var(--font-geist-sans)]">
      <main className="">
        <Menu />
        <section>
          <Image
            src={'/BannerPrincipal.jpg'}
            width={1440}
            height={811}
            alt="banner principal"
            aria-hidden
            className="w-full"
          />
        </section>
        <section id="quem_somos" className="bg-[#222222]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[1200px] mx-auto p-8">
            <div className="flex flex-col justify-center">
              <h2 className="bold text-xl md:text-5xl">CREATIVE BEAUTY: Elegância e modernidade e beleza</h2>
              <p className="py-8">
                No Creative Beauty, a beleza vai além do convencional. Nosso salão é um refúgio de elegância e inovação,
                onde cada detalhe é cuidadosamente pensado para proporcionar uma experiência única
              </p>
              <div className="max-w-[300px]">
                <Whatsapp title="Agendar um horário" />
              </div>
            </div>
            <div>
              <Image src={'/foto-salao.jpg'} width={585} height={387} alt="foto do salao" aria-hidden />
            </div>
          </div>
        </section>
        <section id="procedimentos" className="bg-[url('/background-procedimentos.jpg')] bg-cover bg-center py-10">
          <div className="flex flex-col justify-center items-center max-w-[1200px] mx-auto p-8">
            <h3 className="text-5xl bold">Procedimentos</h3>
            <p className="py-5 text-center">
              Descubra um Espaço de Sofisticação e Inovação, Onde a Beleza é Transformada em Arte. No Creative Beauty,
              Cada Detalhe é Pensado para Oferecer uma Experiência Única e personalizada.
            </p>
            <div className="flex flex-col md:flex-row gap-4 mt-8">
              <ItemWork title="Procedimento Cabelo" description="Saber mais" link="#" imageUrl="/servico-exemplo.jpg" />
              <ItemWork title="Procedimento Unha" description="Saber mais" link="#" imageUrl="/servico-exemplo.jpg" />
              <ItemWork title="Procedimento Pé" description="Saber mais" link="#" imageUrl="/servico-exemplo.jpg" />
              <ItemWork title="Procedimento Mais" description="Saber mais" link="#" imageUrl="/servico-exemplo.jpg" />
            </div>
          </div>
        </section>
        <section id="cursos">
          <div>
            <div className="flex flex-col justify-center items-center max-w-[1200px] mx-auto p-8">
              <Image src={'/logoExpertEmSalao.png'} width={200} height={71} alt="logo expert em salao" />
              <h4>
                O passo a passo para tornar-se especialista em mechas e faturar inicialmente de 7 a 10 mil em pouco
                tempo.
              </h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[1200px] mx-auto p-8">
              <div>
                <Image src={'/computer-expert.png'} width={533} height={410} alt="expert em salao curso" aria-hidden />
              </div>
              <div className="flex flex-col justify-center">
                <p className="py-8">
                  O Método Expert em Mechas é a profissionalização ideal para você sair da estagnação profissional e
                  conquistar o reconhecimento, a valorização e o lucro que você tanto merece.
                </p>
                <p className="py-8">
                  O Expert em Mechas foi desenvolvido para você dominar as maiores e mais avançadas técnicas: Fundo de
                  clareamento, Estrela de Oswald, Ação dos produtos nos cabelos, a diferença entre Coloração e
                  Tonalizante, Tratamentos e muitos outros assuntos.
                </p>
                <div className="flex flex-col md:flex-row gap-4">
                  <Whatsapp title="Quero saber mais!" />
                  <a href="#">
                    <div className="border-solid border-white border-2 rounded-full py-2 px-10 flex items-center gap-2 text-white font-bold text-lg justify-center">
                      Comprar o curso
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer id="contato" className="">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-[1200px] mx-auto p-2">
          <div>
            <Image src={'/logo-creative-beauty.png'} width={243} height={50} alt="logo creative beauty" />
          </div>
          <div>
            <p className="py-2">ABERTO DE TER. À SAB. DAS 9h ÀS 21h</p>
            <div className="flex flex-row gap-4 py-2">
              <Mail width={24} height={24} />
              <span>contato@creativebeaouty.com.br</span>
            </div>
            <div className="flex flex-row gap-4 py-2">
              <Phone width={24} height={24} />
              <span>(11) 9999-9999</span>
            </div>
          </div>
          <div>
            <h4 className="py-2 font-bold">UNIDADE CURITIBA</h4>
            <p className="py-2">Av. Sete de Setembro, 6460 Seminário, Curitiba - PR</p>
          </div>
          <div>
            <h4 className="py-2 font-bold">UNIDADE ALPHA VILLE</h4>
            <p className="py-2">Alameda Araguaia, 751 - loja 4 Alphaville, Barueri - SP</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
