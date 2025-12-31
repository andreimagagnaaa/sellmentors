import { motion, useScroll, useTransform } from 'framer-motion';
import { MessageSquare, UserCheck, Users2, ArrowRight, Check, Calendar } from 'lucide-react';
import { useRef } from 'react';

const steps = [
  {
    icon: MessageSquare,
    title: "Sessão Estratégica",
    subtitle: "30 min • Gratuita",
    description: "Análise objetiva da sua oportunidade atual. Sem compromisso. Se não houver fit, encerramos ali. Honestidade faz parte do processo.",
    details: ["Diagnóstico de Gaps", "Análise de Oportunidade", "Próximos Passos Claros"]
  },
  {
    icon: UserCheck,
    title: "Mentoria Individual",
    subtitle: "Para Vendedores",
    description: "Traga seus deals reais. Vamos eliminar o 'achismo' e definir ações concretas. 'O cliente gostou' não é métrica aqui.",
    details: ["Análise de Deals Reais", "Fim das Respostas Vagas", "Ações Semanais"]
  },
  {
    icon: Users2,
    title: "Consultoria de Times",
    subtitle: "Para Gestores",
    description: "Transformamos talento individual em processo replicável. Estruturação de processos e rituais para previsibilidade de receita.",
    details: ["Processo de Vendas", "Rituais de Gestão", "Gestão de Pipeline"]
  }
];

const Methodology = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="methodology" ref={containerRef}>
      <div className="container mx-auto relative z-10">
        
        <div className="max-w-3xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
                Como <span className="text-primary">Trabalhamos</span>
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              Não inventamos a roda. Sistematizamos o que funciona. <br className="hidden md:block" />
              Processo estruturado, sem improvisação.
            </p>
          </motion.div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line (Desktop) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-100 -translate-x-1/2 hidden md:block">
            <motion.div 
              style={{ height: lineHeight }}
              className="w-full bg-primary origin-top"
            />
          </div>

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Content Side */}
                <div className="flex-1 w-full md:w-1/2 p-6">
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
                    className={`bg-white p-8 rounded-2xl border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:border-blue-100 transition-all duration-300 group relative overflow-hidden ${index % 2 === 0 ? 'text-left' : 'text-left md:text-right'}`}
                  >
                    <div className={`absolute top-0 w-1 h-full bg-primary transition-all duration-300 group-hover:w-2 ${index % 2 === 0 ? 'left-0' : 'left-0 md:left-auto md:right-0'}`} />
                    
                    <div className={`flex flex-col ${index % 2 === 0 ? 'items-start' : 'items-start md:items-end'}`}>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-primary text-xs font-bold uppercase tracking-wider mb-4">
                        {step.subtitle}
                      </div>
                      
                      <h3 className="text-2xl font-bold text-slate-900 font-serif mb-4">
                        {step.title}
                      </h3>
                      
                      <p className="text-slate-600 leading-relaxed mb-6">
                        {step.description}
                      </p>

                      <div className={`flex flex-wrap gap-3 ${index % 2 === 0 ? 'justify-start' : 'justify-start md:justify-end'}`}>
                        {step.details.map((detail, idx) => (
                          <span key={idx} className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                            <Check className="w-3 h-3 text-primary" />
                            {detail}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Center Node */}
                <div className="relative z-10 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 my-4 md:my-0 shrink-0">
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full border-4 border-slate-50 shadow-sm flex items-center justify-center relative z-10"
                  >
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-primary rounded-full flex items-center justify-center text-white">
                      <step.icon className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                  </motion.div>
                </div>

                {/* Empty Side for Balance */}
                <div className="flex-1 w-full md:w-1/2 hidden md:block" />
                
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block p-1 rounded-full bg-gradient-to-r from-blue-600 to-blue-400"
          >
            <button className="flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-slate-50 transition-all duration-300 group">
              <Calendar className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
              Agendar Sessão Estratégica
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </button>
          </motion.div>
          <p className="mt-4 text-xs text-slate-400 font-medium uppercase tracking-wide">
            Sem compromisso • 100% Confidencial
          </p>
        </div>

      </div>
    </section>
  );
};

export default Methodology;
