import { motion } from 'framer-motion';
import { Check, X, ArrowRight, Clock, Video, ShieldCheck } from 'lucide-react';
import { useBooking } from '../contexts/BookingContext';

const FinalCTA = () => {
  const { openBookingModal } = useBooking();

  return (
    <section className="py-32 bg-white relative overflow-hidden" id="contato">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-slate-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-50 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />
      </div>

      <div className="container mx-auto px-8 md:px-24 lg:px-32 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: The Context & Comparison */}
          <div className="lg:col-span-7 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                Sessão Estratégica <span className="text-primary">Gratuita</span>
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                Se não identificarmos valor mútuo, encerramos ali. <br/>
                <span className="font-semibold text-slate-900">Honestidade é parte do processo.</span>
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* What it is NOT */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-slate-50 rounded-2xl p-8 border border-slate-100"
              >
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-6 flex items-center gap-2">
                  <X className="w-4 h-4" />
                  O que NÃO é
                </h3>
                <ul className="space-y-4">
                  {[
                    "Pitch de vendas disfarçado",
                    "Apresentação genérica",
                    "Sessão motivacional"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600">
                      <div className="mt-1 w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                      <span className="text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* What it IS */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-2xl p-8 border border-blue-100 shadow-lg shadow-blue-100/50"
              >
                <h3 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-6 flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  O que É
                </h3>
                <ul className="space-y-4">
                  {[
                    "Análise estruturada atual",
                    "Identificação de gaps",
                    "Recomendações práticas"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-800">
                      <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                      <span className="text-sm font-semibold">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Right Column: The CTA Card */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-slate-900 rounded-3xl p-8 md:p-10 text-white relative overflow-hidden shadow-2xl shadow-slate-900/20"
            >
              {/* Decorative Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold font-serif mb-2">Agendar Sessão</h3>
                  <p className="text-slate-400 text-sm">Escolha o melhor horário para o seu diagnóstico.</p>
                </div>

                <div className="space-y-6 mb-10">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                    <Clock className="w-5 h-5 text-blue-400" />
                    <div>
                      <p className="font-semibold text-sm">30 Minutos</p>
                      <p className="text-xs text-slate-400">Duração estimada</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                    <Video className="w-5 h-5 text-blue-400" />
                    <div>
                      <p className="font-semibold text-sm">Online</p>
                      <p className="text-xs text-slate-400">Via Google Meet</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                    <ShieldCheck className="w-5 h-5 text-blue-400" />
                    <div>
                      <p className="font-semibold text-sm">Sem Compromisso</p>
                      <p className="text-xs text-slate-400">Diagnóstico gratuito</p>
                    </div>
                  </div>
                </div>

                <button onClick={openBookingModal} className="w-full bg-white text-slate-900 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 group">
                  AGENDAR AGORA
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <p className="text-center text-xs text-slate-500 mt-6">
                  Poucas vagas disponíveis para esta semana.
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
