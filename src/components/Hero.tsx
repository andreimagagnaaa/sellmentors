import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowRight, TrendingUp, Target, Activity } from 'lucide-react';
import { useBooking } from '../contexts/BookingContext';

const Hero = () => {
  const { openBookingModal } = useBooking();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden" ref={containerRef}>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <motion.div 
          style={{ y: y1 }}
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-400/20 rounded-full blur-[120px]" 
        />
        <motion.div 
          style={{ y: y2 }}
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" 
        />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-2 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-mono text-primary tracking-wider uppercase font-semibold">Metodologia Comprovada</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium leading-[1.1] mb-8 text-slate-900">
              A Ciência de Fechar <br />
              <span className="text-transparent bg-clip-text bg-gradient-primary">Grandes Negócios.</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 max-w-xl mb-10 leading-relaxed">
              Enquanto você cultiva relacionamentos sem direção, nós ensinamos você a estruturar um processo que leva ao fechamento.
            </p>

            <div className="flex flex-col gap-4">
              <Button onClick={openBookingModal} className="group h-14 px-8 text-base w-fit shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all">
                AGENDAR SESSÃO ESTRATÉGICA GRATUITA (30 minutos)
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <p className="text-xs text-slate-500 font-medium tracking-wide pl-1">
                Primeira sessão gratuita • Diagnóstico objetivo do seu cenário • Sem compromisso
              </p>
            </div>
          </motion.div>

          {/* Right Content - Sales Pipeline Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[500px] flex items-center justify-center"
          >
            {/* Abstract Pipeline Background */}
            <div className="absolute inset-0 flex items-center justify-center">
               {/* Concentric Circles (Target) */}
               {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="absolute border border-blue-100 rounded-full"
                  style={{
                    width: `${i * 35}%`,
                    height: `${i * 35}%`,
                  }}
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeInOut"
                  }}
                />
              ))}
              
              {/* Rising Graph Lines */}
              <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
                <motion.path 
                  d="M0,100 Q50,50 100,0" 
                  fill="none" 
                  stroke="url(#gradient-line)" 
                  strokeWidth="0.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
                <defs>
                  <linearGradient id="gradient-line" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#2563eb" stopOpacity="0" />
                    <stop offset="100%" stopColor="#2563eb" stopOpacity="1" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Central Core - Sales Target */}
            <div className="relative z-10 w-32 h-32 bg-white rounded-full border-4 border-blue-50 flex items-center justify-center shadow-2xl shadow-blue-500/20">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white">
                <Target className="w-10 h-10" />
              </div>
            </div>

            {/* Floating Deal Cards */}
            <motion.div 
              className="absolute top-[15%] right-[5%] bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-4 animate-float"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="p-3 bg-blue-50 rounded-lg">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Taxa de Fechamento</p>
                <p className="text-xl font-bold text-slate-900">+35%</p>
              </div>
            </motion.div>

            <motion.div 
              className="absolute bottom-[20%] left-[0%] bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-4 animate-float"
              style={{ animationDelay: "1.5s" }}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <div className="p-3 bg-blue-50 rounded-lg">
                <Activity className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Ciclo de Vendas</p>
                <p className="text-xl font-bold text-slate-900">-40%</p>
              </div>
            </motion.div>

            {/* New Card: Pipeline Value */}
             <motion.div 
              className="absolute top-[60%] right-[-5%] bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-4 animate-float"
              style={{ animationDelay: "2.5s" }}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold text-xs">
                ROI
              </div>
              <div>
                <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Retorno</p>
                <p className="text-lg font-bold text-slate-900">8.5x</p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
