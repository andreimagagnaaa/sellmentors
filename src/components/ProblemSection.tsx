import { motion, useScroll, useTransform } from 'framer-motion';
import { AlertCircle, Users, Search, DollarSign, MapPin } from 'lucide-react';
import { useRef } from 'react';

const problems = [
  {
    icon: Search,
    title: "Ilusão de Oportunidade",
    description: "Confundir simpatia com intenção de compra. Seu time gasta energia em contas sem fit real."
  },
  {
    icon: Users,
    title: "Miopia de Decisão",
    description: "Construir relacionamentos com quem não decide. Ignorar a complexidade da mesa de decisão trava negociações."
  },
  {
    icon: AlertCircle,
    title: "Pipeline de Esperança",
    description: "Avançar sem validar Budget e Timeline. Surpresas tardias são sintomas de qualificação superficial."
  },
  {
    icon: DollarSign,
    title: "Tabu Financeiro",
    description: "Medo de discutir investimento cedo. Resulta em previsões infladas com oportunidades que nunca fecham."
  },
  {
    icon: MapPin,
    title: "Cegueira de Contexto",
    description: "Replicar playbooks sem adaptação regional. Ignorar como cada setor compra derruba a conversão."
  }
];

const ProblemSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="solutions" ref={containerRef}>
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          style={{ y }}
          className="absolute top-0 right-0 w-[800px] h-[800px] bg-slate-50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" 
        />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
              Onde está o <span className="text-primary">Gargalo</span>?
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
              Identificamos os padrões que drenam a receita de operações comerciais maduras.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-slate-50 hover:bg-white border border-transparent hover:border-blue-100 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300 border border-slate-100 group-hover:border-blue-100 group-hover:shadow-blue-100">
                  <problem.icon className="w-5 h-5 text-slate-700 group-hover:text-primary transition-colors duration-300" />
                </div>
                
                <h3 className="text-lg font-bold text-slate-900 mb-3 font-serif group-hover:text-primary transition-colors">
                  {problem.title}
                </h3>
                
                <p className="text-slate-500 leading-relaxed text-sm group-hover:text-slate-600">
                  {problem.description}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Call to Action Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: problems.length * 0.1 }}
            className="bg-primary p-8 rounded-2xl shadow-xl shadow-blue-500/20 flex flex-col justify-center items-center text-center text-white relative overflow-hidden group cursor-pointer hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-3 font-serif">
                Reconheceu algum padrão?
              </h3>
              <p className="text-blue-100 mb-6 text-sm">
                Vamos corrigir isso juntos.
              </p>
              <span className="inline-flex items-center font-semibold text-sm bg-white/10 px-4 py-2 rounded-full hover:bg-white hover:text-primary transition-all">
                Agendar Diagnóstico
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
