
import { Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Logo } from './Logo';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-20 border-t border-slate-900">
      <div className="container mx-auto px-8 md:px-24 lg:px-32">
        
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="md:col-span-5 lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <Logo variant="light" orientation="horizontal" className="scale-90 origin-left" />
            </div>
            <p className="text-slate-500 leading-relaxed max-w-sm">
              Mentoria e Consultoria em Vendas Complexas.
              Transformamos intuição em processos previsíveis de receita.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              35 anos de experiência prática
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden md:block md:col-span-1 lg:col-span-2" />

          {/* Contact Column */}
          <div className="md:col-span-6 lg:col-span-6 grid sm:grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-serif font-bold mb-6">Contato</h4>
              <ul className="space-y-4">
                <li>
                  <a href="mailto:contato@sellmentors.com.br" className="group flex items-center gap-3 hover:text-white transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center group-hover:bg-slate-800 transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span className="text-sm">contato@sellmentors.com.br</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="group flex items-center gap-3 hover:text-white transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center group-hover:bg-slate-800 transition-colors">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span className="text-sm">(11) 99999-9999</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="group flex items-center gap-3 hover:text-white transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center group-hover:bg-slate-800 transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <span className="text-sm">LinkedIn</span>
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-serif font-bold mb-6">Localização</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="text-sm">
                    <p className="text-white">Rio Grande do Sul, Brasil</p>
                    <p className="text-xs text-slate-600 mt-1">Atendimento Global (Remoto)</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex justify-center items-center text-xs text-slate-600">
          <p>© {new Date().getFullYear()} SellMentors. Todos os direitos reservados.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
