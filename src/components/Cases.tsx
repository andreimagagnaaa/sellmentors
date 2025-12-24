import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const companies = [
  { name: "Salesforce", logo: "https://logo.clearbit.com/salesforce.com" },
  { name: "SAP", logo: "https://logo.clearbit.com/sap.com" },
  { name: "Arezzo", logo: "https://logo.clearbit.com/arezzo.com.br" },
  { name: "Gerdau", logo: "https://logo.clearbit.com/gerdau.com.br" },
  { name: "Tramontina", logo: "https://logo.clearbit.com/tramontina.com.br" },
  { name: "Vipal", logo: "https://logo.clearbit.com/vipal.com" },
  { name: "Stara", logo: "https://logo.clearbit.com/stara.com.br" },
  { name: "RBS", logo: "https://logo.clearbit.com/gruporbs.com.br" },
  { name: "FCC", logo: "https://logo.clearbit.com/fcc.com.br" }
];

const Cases = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden" id="cases">
      <div className="container mx-auto relative z-10">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
              Empresas com as Quais <span className="text-primary">Já Trabalhamos</span>
            </h2>
          </motion.div>
        </div>

        {/* Logo Marquee */}
        <div className="relative w-full overflow-hidden mb-24 py-10">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-10" />
          
          <motion.div
            className="flex gap-4 md:gap-8 w-max"
            animate={{ x: "-33.33%" }}
            transition={{ 
              duration: 60, 
              ease: "linear", 
              repeat: Infinity 
            }}
          >
            {[...companies, ...companies, ...companies].map((company, index) => (
              <div 
                key={index}
                className="w-40 h-20 md:w-60 md:h-32 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer group px-4"
              >
                <img 
                  src={company.logo} 
                  alt={`${company.name} logo`} 
                  className="max-w-full max-h-12 md:max-h-16 object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      target.parentElement.innerHTML = `<span class="text-slate-600 font-bold text-5xl font-serif group-hover:text-primary transition-colors">${company.name.charAt(0)}</span><span class="text-slate-700 font-bold text-3xl ml-1 group-hover:text-slate-900 transition-colors">${company.name.slice(1)}</span>`;
                    }
                  }}
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Featured Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-white p-10 md:p-16 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30">
              <Quote className="w-6 h-6 fill-current" />
            </div>

            <blockquote className="text-xl md:text-2xl font-medium text-slate-800 leading-relaxed mb-10 tracking-tight">
              "Tive a oportunidade de trabalhar com o Alexandre em um momento desafiador da minha carreira. Mais do que um excelente executivo de vendas, ele é alguém que sabe ouvir, entende o jogo e contribui com inteligência e sensibilidade."
            </blockquote>

            <div className="flex flex-col items-center">
              <div className="w-16 h-1 bg-blue-600 rounded-full mb-6" />
              <cite className="not-italic font-bold text-slate-900 text-lg">Diretor Executivo</cite>
              <span className="text-base text-slate-600 font-medium mt-1">Arezzo & Co</span>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-blue-600 mt-3 font-semibold bg-blue-50 px-4 py-1.5 rounded-full hover:bg-blue-100 transition-colors"
              >
                Ver no LinkedIn
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Cases;
