import { motion, useScroll, useTransform } from 'framer-motion';
import { X, Check, ShieldAlert, ShieldCheck } from 'lucide-react';
import { useRef } from 'react';

const negatives = [
  "Discurso motivacional vazio",
  "\"Mindset de tubarão\" sem técnica",
  "Promessas de resultado em 7 dias",
  "Fórmulas mágicas de gurus"
];

const positives = [
  {
    title: "35+ Anos de Trincheira",
    description: "Não somos teóricos. Somos praticantes que conhecem o cheiro do asfalto."
  },
  {
    title: "Abordagem Consultiva Real",
    description: "Mergulhamos nas suas contas. Auditamos seu pipeline como se fosse nosso dinheiro na mesa."
  },
  {
    title: "Realidade Brasil",
    description: "Sabemos que vender aqui não é como no Vale do Silício. Adaptamos o jogo para o nosso terreno."
  },
  {
    title: "Honestidade Brutal",
    description: "Se não houver fit, falamos em 30 minutos. Não vendemos o que não entregamos."
  },
  {
    title: "Método, Não Sorte",
    description: "Transformamos 'arte' em processo. Previsibilidade acima de heroísmo."
  }
];

const Differentials = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden" id="diferenciais" ref={containerRef}>
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/4" 
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-800/20 rounded-full blur-[120px] -translate-x-1/3 translate-y-1/4" 
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
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Por Que <span className="text-blue-400">Nós?</span>
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              A diferença entre promessa e entrega.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* The "NO" Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -left-4 -top-4 text-slate-800/50">
              <ShieldAlert className="w-32 h-32" />
            </div>
            
            <h3 className="text-2xl font-serif font-bold text-slate-300 mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
                <X className="w-4 h-4 text-slate-400" />
              </span>
              O que você <span className="text-slate-400 underline decoration-slate-400/30 underline-offset-4">NÃO</span> vai encontrar:
            </h3>

            <div className="space-y-6">
              {negatives.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-slate-800 hover:border-slate-700 transition-colors group"
                >
                  <X className="w-5 h-5 text-slate-600 group-hover:text-slate-400 transition-colors shrink-0" />
                  <span className="text-slate-400 group-hover:text-slate-300 transition-colors font-medium">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* The "YES" Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
             <div className="absolute -right-4 -top-4 text-blue-900/20">
              <ShieldCheck className="w-32 h-32" />
            </div>

            <h3 className="text-2xl font-serif font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                <Check className="w-4 h-4 text-blue-400" />
              </span>
              O que você <span className="text-blue-400 underline decoration-blue-400/30 underline-offset-4">VAI</span> encontrar:
            </h3>

            <div className="space-y-6">
              {positives.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 mt-1">
                    <Check className="w-3.5 h-3.5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">
                      {item.title}
                    </h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Differentials;
