import { motion } from 'framer-motion';
import { Building2, TrendingUp, ArrowRight, Briefcase, Target, ShieldCheck } from 'lucide-react';

const companies = [
  "Salesforce", "SAP", "RBS / Zero Hora", "Gerdau", "Tramontina"
];

const Authority = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden" id="quem-somos">
      <div className="container mx-auto relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-20 items-start">
          
          {/* Left Column: The Narrative */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/50 text-primary text-xs font-bold tracking-wide uppercase mb-6">
                <Briefcase className="w-3 h-3" />
                Quem Somos
              </div>
              
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                Ciência Aplicada à <span className="text-primary">Realidade</span>.
              </h2>
              
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Nossa metodologia não nasceu em livros. Foi forjada em <span className="font-bold text-slate-900">35+ anos de campo</span>, 
                fechando negócios onde a maioria desiste.
              </p>

              <div className="flex flex-col gap-4 mb-10">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-600">
                    Aprendemos com <strong>contas perdidas</strong> e negociações travadas.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-600">
                    Dominamos a <strong>política corporativa</strong> de grandes empresas.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Experiência em Grandes Contas</h4>
                <div className="flex flex-wrap gap-x-6 gap-y-3">
                  {companies.map((company, idx) => (
                    <span key={idx} className="text-sm font-medium text-slate-700 border-b border-slate-200 pb-0.5">
                      {company}
                    </span>
                  ))}
                </div>
              </div>

              <button 
                onClick={() => document.getElementById('methodology')?.scrollIntoView({ behavior: 'smooth' })}
                className="mt-8 md:mt-10 group flex items-center justify-center md:justify-start gap-2 text-primary font-bold hover:text-blue-700 transition-colors w-full md:w-auto"
              >
                Conheça Nossa Metodologia
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>

          {/* Right Column: The Partners */}
          <div className="lg:col-span-7 grid gap-6">
            
            {/* Alexandre Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 font-serif">Alexandre Goerl</h3>
                  <p className="text-primary font-medium text-sm">Especialista em Ciclos Longos</p>
                </div>
                <TrendingUp className="w-8 h-8 text-blue-100 group-hover:text-primary transition-colors" />
              </div>
              
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Expert em manter deals vivos. Transforma "nãos" em negociações de longo prazo através de mapeamento estratégico de stakeholders.
              </p>

              <p className="text-xs text-slate-400 italic border-l-2 border-blue-100 pl-3">
                "Vendas complexas não se vencem na força, mas na consistência."
              </p>
            </motion.div>

            {/* Fernando Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 font-serif">Fernando Waichel</h3>
                  <p className="text-primary font-medium text-sm">Arquitetura de Processos</p>
                </div>
                <Building2 className="w-8 h-8 text-blue-100 group-hover:text-primary transition-colors" />
              </div>
              
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Traduz o rigor de gigantes globais para a sua realidade. Implementa metodologias que transformam caos comercial em previsibilidade de receita.
              </p>

              <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                <Target className="w-3 h-3 text-blue-400" />
                <span>Foco em estruturação e escala</span>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Authority;
