import { motion } from 'framer-motion';
import { ScanSearch, Target, ListChecks, Briefcase, CheckCircle2 } from 'lucide-react';

const reasons = [
  {
    icon: ScanSearch,
    title: "Diagnóstico Preciso",
    description: "Identificamos onde realmente estava o gargalo no processo antes de qualquer ação."
  },
  {
    icon: Target,
    title: "Qualificação Rigorosa",
    description: "Ensinamos a diferenciar oportunidade real de conversa simpática."
  },
  {
    icon: ListChecks,
    title: "Perguntas de Validação",
    description: "Implementamos processos de discovery que evitam surpresas tardias."
  },
  {
    icon: Briefcase,
    title: "Acompanhamento Real",
    description: "Trabalhamos em cima de situações concretas, não cenários hipotéticos."
  }
];

const WhyItWorks = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
              Por Que Esses Projetos <span className="text-primary">Funcionaram</span>?
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              Todos os casos de sucesso tiveram estes 4 pilares em comum:
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-20">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-6 p-6 rounded-2xl hover:bg-white hover:shadow-xl hover:shadow-blue-100/50 border border-transparent hover:border-blue-50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                <reason.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 font-serif mb-2 group-hover:text-primary transition-colors">
                  {reason.title}
                </h3>
                <p className="text-slate-600 leading-relaxed group-hover:text-slate-700">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Conclusion Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-4xl mx-auto bg-slate-900 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          {/* Background Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-blue-900/20 to-transparent pointer-events-none" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 text-blue-200 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <CheckCircle2 className="w-4 h-4" />
              O Resultado
            </div>
            
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-white leading-relaxed">
              Equipes que param de <span className="text-blue-400">"achar que está caminhando"</span> e passam a saber exatamente onde estão no processo de venda.
            </h3>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default WhyItWorks;
