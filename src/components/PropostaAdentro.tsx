import { motion } from 'framer-motion';
import { Logo } from './Logo';
import {
  Building2,
  Users,
  AlertTriangle,
  Target,
  ClipboardList,
  GraduationCap,
  Search,
  UserCheck,
  GitBranch,
  CalendarCheck,
  ChevronDown,
  MapPin,
  Calendar,
} from 'lucide-react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fadeUp: any = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' as const, delay: i * 0.1 },
  }),
};

const SectionLabel = ({ icon: Icon, label }: { icon: React.ElementType; label: string }) => (
  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-primary text-xs font-bold tracking-widest uppercase mb-6">
    <Icon className="w-3 h-3" />
    {label}
  </div>
);

const Divider = () => (
  <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-blue-300 mb-6 rounded-full" />
);

const BulletItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-3 text-slate-700 text-base leading-relaxed">
    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
    <span>{children}</span>
  </li>
);

const NumberedItem = ({ n, children }: { n: number; children: React.ReactNode }) => (
  <li className="flex items-start gap-4 text-slate-700 text-base leading-relaxed">
    <span className="shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold font-mono flex items-center justify-center mt-0.5">
      {n}
    </span>
    <span>{children}</span>
  </li>
);

const Card = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-white border border-black/[0.06] rounded-2xl p-8 shadow-sm ${className}`}>
    {children}
  </div>
);

const DarkCard = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-slate-900 border border-slate-800 rounded-2xl p-8 ${className}`}>
    {children}
  </div>
);

// ─── Slide 1: Cover ──────────────────────────────────────────────────────────
const Cover = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-400/10 rounded-full blur-[140px] pointer-events-none" />
    <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

    <div className="relative z-10 container mx-auto max-w-3xl px-6">
      <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-primary text-xs font-bold tracking-widest uppercase mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Proposta Comercial Confidencial
        </div>
      </motion.div>

      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={1}
        className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-[1.1] text-slate-900 mb-6"
      >
        Proposta de Apoio à{' '}
        <span className="text-transparent bg-clip-text bg-gradient-primary">
          Gestão Comercial
        </span>
      </motion.h1>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={2}
        className="text-xl md:text-2xl font-serif text-slate-500 italic mb-14"
      >
        Adentro – Soluções de Infraestrutura de TI em Nuvem
      </motion.p>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={3}
        className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-slate-500 font-mono"
      >
        <span className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-primary" /> Porto Alegre – RS
        </span>
        <span className="hidden sm:block text-slate-300">|</span>
        <span className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-primary" /> Abril 2026
        </span>
        <span className="hidden sm:block text-slate-300">|</span>
        <span className="font-bold text-slate-700">SellMentors</span>
      </motion.div>
    </div>

    {/* Scroll hint */}
    <motion.div
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-400"
      animate={{ y: [0, 8, 0] }}
      transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
    >
      <span className="text-xs font-mono tracking-widest uppercase">role para baixo</span>
      <ChevronDown className="w-4 h-4" />
    </motion.div>
  </section>
);

// ─── Slide 2: Visão Geral ─────────────────────────────────────────────────────
const VisionGeneral = () => (
  <section className="py-24 bg-slate-50 relative overflow-hidden">
    <div className="container mx-auto max-w-5xl">
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <SectionLabel icon={Building2} label="Slide 2 · Contexto da Empresa" />
        <Divider />
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
          Visão Geral da <span className="text-primary">Adentro</span>
        </h2>
        <p className="text-slate-500 text-lg mb-12 max-w-xl">
          Empresa com histórico sólido e infraestrutura comercial estabelecida.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {[
          { value: '15 anos', label: 'de atuação no mercado' },
          { value: 'RS + SP', label: 'Sede em Porto Alegre com operação em São Paulo' },
          { value: 'Salesforce', label: 'CRM consolidado em uso pela equipe comercial' },
        ].map((stat, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i + 1}
          >
            <Card>
              <div className="text-3xl font-serif font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-slate-600 text-sm leading-relaxed">{stat.label}</div>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={4}
        className="mt-8"
      >
        <Card>
          <h3 className="text-lg font-serif font-bold text-slate-900 mb-5">Diferenciais do Ambiente</h3>
          <ul className="space-y-3">
            <BulletItem>Processos comerciais estruturados e documentados</BulletItem>
            <BulletItem>Área de Marketing estruturada + parceiro para geração de leads</BulletItem>
          </ul>
        </Card>
      </motion.div>
    </div>
  </section>
);

// ─── Slide 3: Maturidade Comercial ───────────────────────────────────────────
const CommercialMaturity = () => (
  <section className="py-24 bg-white relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-radial-top pointer-events-none" />
    <div className="container mx-auto max-w-5xl relative z-10">
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <SectionLabel icon={Users} label="Slide 3 · Estrutura Comercial Atual" />
        <Divider />
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-12">
          Maturidade <span className="text-primary">Comercial</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>
          <Card>
            <h3 className="text-base font-bold text-slate-400 uppercase tracking-wider font-mono mb-6">Equipe de Vendas</h3>
            <ul className="space-y-3">
              <BulletItem>1 Gerente de Vendas</BulletItem>
              <BulletItem>09 Vendedores: 07 RS e 02 SP</BulletItem>
              <BulletItem>05 Sênior · 03 Pleno · 01 Júnior</BulletItem>
            </ul>
          </Card>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}>
          <Card>
            <h3 className="text-base font-bold text-slate-400 uppercase tracking-wider font-mono mb-6">Infraestrutura Comercial</h3>
            <ul className="space-y-3">
              <BulletItem>Processo de vendas formalizado</BulletItem>
              <BulletItem>CRM consolidado (Salesforce)</BulletItem>
              <BulletItem>Geração de leads ativa (Inbound + apoio externo)</BulletItem>
              <BulletItem>Estrutura organizacional definida (Vendas + Marketing)</BulletItem>
            </ul>
          </Card>
        </motion.div>
      </div>
    </div>
  </section>
);

// ─── Slide 4: Dores Assumidas ─────────────────────────────────────────────────
const AssumedPains = () => (
  <section className="py-24 bg-slate-950 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
    <div className="container mx-auto max-w-5xl relative z-10">
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/40 border border-blue-800/50 text-blue-300 text-xs font-bold tracking-widest uppercase mb-6">
          <AlertTriangle className="w-3 h-3" />
          Slide 4 · Principais Dores
        </div>
        <div className="w-12 h-0.5 bg-gradient-to-r from-blue-400 to-blue-700 mb-6 rounded-full" />
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
          Desafios Operacionais do{' '}
          <span className="text-transparent bg-clip-text bg-gradient-primary">Time de Vendas</span>
        </h2>
        <p className="text-slate-400 text-lg mb-12">Pontos reconhecidos pela própria liderança comercial.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-5">
        {[
          'Baixa adesão à atualização do CRM (Salesforce)',
          'Dificuldade na gestão do funil de vendas',
          'Baixa previsibilidade de resultados comerciais',
          'Falta de disciplina na execução do processo de vendas',
        ].map((pain, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i + 1}
          >
            <DarkCard className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-600/30 flex items-center justify-center shrink-0">
                <span className="text-blue-400 font-mono text-xs font-bold">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <p className="text-slate-300 leading-relaxed">{pain}</p>
            </DarkCard>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ─── Slide 5: Dores Identificadas ────────────────────────────────────────────
const DiagnosedPains = () => (
  <section className="py-24 bg-slate-950 border-t border-slate-900 relative overflow-hidden">
    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
    <div className="container mx-auto max-w-5xl relative z-10">
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-900/30 border border-red-800/40 text-red-300 text-xs font-bold tracking-widest uppercase mb-6">
          <AlertTriangle className="w-3 h-3" />
          Slide 5 · Diagnóstico
        </div>
        <div className="w-12 h-0.5 bg-gradient-to-r from-red-500 to-red-800 mb-6 rounded-full" />
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
          Pontos Críticos de <span className="text-red-400">Gestão</span>
        </h2>
        <p className="text-slate-400 text-lg mb-12">Pontos identificados durante o processo de diagnóstico.</p>
      </motion.div>

      <div className="space-y-4">
        {[
          'Baixa gestão ativa do time de vendas',
          'Falta de pressão consistente por metas',
          'Baixa accountability comercial — cultura de compromisso com metas em formação',
          'Falta de clareza e alinhamento sobre o processo de vendas',
          'Alta tolerância com ausência de resultados',
        ].map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i + 1}
            className="flex items-start gap-4 bg-slate-900/60 border border-slate-800 rounded-xl px-6 py-5"
          >
            <span className="w-2 h-2 rounded-full bg-red-500 shrink-0 mt-2" />
            <p className="text-slate-300 leading-relaxed">{item}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ─── Slide 6: Pontos de Atenção ───────────────────────────────────────────────
const StrategicPoints = () => (
  <section className="py-24 bg-white relative overflow-hidden">
    <div className="absolute inset-0 bg-dot-pattern opacity-50 pointer-events-none" />
    <div className="container mx-auto max-w-5xl relative z-10">
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <SectionLabel icon={Target} label="Slide 6 · Oportunidades" />
        <Divider />
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
          Oportunidades de <span className="text-primary">Estruturação</span>
        </h2>
        <p className="text-slate-500 text-lg mb-12 max-w-xl">
          Alavancas identificadas para ganho de previsibilidade e controle comercial.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>
          <Card className="h-full">
            <h3 className="font-serif font-bold text-slate-900 text-xl mb-4">Reuniões de Forecast</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Revisão da mecânica das reuniões para aumentar rigor, cadência e accountability dos resultados esperados.
            </p>
          </Card>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}>
          <Card className="h-full">
            <h3 className="font-serif font-bold text-slate-900 text-xl mb-4">Dashboards Gerenciais</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <BulletItem>Margem por negócio e por vendedor</BulletItem>
              <BulletItem>Performance de prospecção: Inbound / MKT vs. Outbound</BulletItem>
            </ul>
          </Card>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={3}
          className="md:col-span-2"
        >
          <Card>
            <h3 className="font-serif font-bold text-slate-900 text-xl mb-4">Visibilidade de Indicadores</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Aumento da visibilidade dos indicadores comerciais para gestão e diretoria, permitindo tomada de decisão baseada em dados confiáveis e atualizados.
            </p>
          </Card>
        </motion.div>
      </div>
    </div>
  </section>
);

// ─── Slide 7: Plano de Ação ────────────────────────────────────────────────────
const ActionPlan = () => (
  <section className="py-24 bg-slate-50 relative overflow-hidden">
    <div className="container mx-auto max-w-5xl">
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <SectionLabel icon={ClipboardList} label="Slide 7 · Plano de Ação" />
        <Divider />
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-12">
          Estrutura de <span className="text-primary">Atuação</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>
          <Card className="h-full">
            <h3 className="font-serif font-bold text-slate-900 text-xl mb-5">Gestão Semanal</h3>
            <ul className="space-y-3">
              <BulletItem>Acompanhamento de reunião semanal de forecast</BulletItem>
            </ul>
          </Card>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}>
          <Card className="h-full">
            <h3 className="font-serif font-bold text-slate-900 text-xl mb-5">Treinamento do Time</h3>
            <ul className="space-y-3">
              <BulletItem>Processo comercial</BulletItem>
              <BulletItem>Conhecimento técnico do portfólio</BulletItem>
              <BulletItem>Análise de concorrência</BulletItem>
              <BulletItem>Tratamento de objeções</BulletItem>
              <BulletItem>Casos de uso relevantes</BulletItem>
              <BulletItem>Abordagem comercial estruturada</BulletItem>
            </ul>
          </Card>
        </motion.div>
      </div>
    </div>
  </section>
);

// ─── Slide 8: Capacitação Comercial ──────────────────────────────────────────
const CommercialTraining = () => (
  <section className="py-24 bg-white relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-radial-center pointer-events-none" />
    <div className="container mx-auto max-w-5xl relative z-10">
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <SectionLabel icon={GraduationCap} label="Slide 8 · Desenvolvimento do Time" />
        <Divider />
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-12">
          Capacitação <span className="text-primary">Comercial</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            title: 'Abordagem',
            items: ['Como conduzir abordagens comerciais', 'Padronização do discurso de vendas'],
          },
          {
            title: 'Diagnóstico',
            items: ['Perguntas-chave para diagnóstico de clientes', 'Identificação de oportunidades reais'],
          },
          {
            title: 'Evolução',
            items: ['Maturidade consultiva do time', 'Desenvolvimento contínuo de competências'],
          },
        ].map((block, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i + 1}
          >
            <Card className="h-full">
              <div className="w-8 h-1 bg-primary rounded-full mb-4" />
              <h3 className="font-serif font-bold text-slate-900 text-xl mb-5">{block.title}</h3>
              <ul className="space-y-3">
                {block.items.map((item, j) => (
                  <BulletItem key={j}>{item}</BulletItem>
                ))}
              </ul>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ─── Slide 9: Escopo da SellMentors ──────────────────────────────────────────
const Scope = () => (
  <section className="py-24 bg-primary relative overflow-hidden">
    <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />
    <div className="container mx-auto max-w-5xl relative z-10">
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/20 text-white text-xs font-bold tracking-widest uppercase mb-6">
          <Search className="w-3 h-3" />
          Slide 9 · Escopo da SellMentors
        </div>
        <div className="w-12 h-0.5 bg-white/40 mb-6 rounded-full" />
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
          Atuação Proposta
        </h2>
        <p className="text-blue-100 text-lg mb-12 max-w-xl">
          Entendimento profundo do ambiente antes de qualquer prescrição.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-5">
        {[
          'Reuniões com diretoria, gerência e marketing',
          'Revisão completa do processo de vendas',
          'Revisão dos KPIs comerciais',
          'Entrevistas individuais com vendedores',
          'Avaliação de competências e gaps',
          'Alinhamento com liderança comercial',
        ].map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i + 1}
            className="flex items-start gap-3 bg-white/10 border border-white/15 rounded-xl px-5 py-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0 mt-2" />
            <p className="text-white text-sm leading-relaxed">{item}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ─── Slide 10: Diagnóstico Individual ────────────────────────────────────────
const IndividualDiagnosis = () => (
  <section className="py-24 bg-slate-50 relative overflow-hidden">
    <div className="container mx-auto max-w-5xl">
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <SectionLabel icon={UserCheck} label="Slide 10 · Diagnóstico Individual" />
        <Divider />
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
          Análise do Time <span className="text-primary">Comercial</span>
        </h2>
        <p className="text-slate-500 text-lg mb-12 max-w-xl">
          Avaliação individual para mapear gaps, potencial e oportunidades de desenvolvimento.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {[
          { title: 'Desempenho', desc: 'Avaliação individual de performance com base em dados históricos' },
          { title: 'Pontos Fortes', desc: 'Identificação de competências desenvolvidas e diferenciais' },
          { title: 'Carteiras', desc: 'Revisão das carteiras de clientes de cada vendedor' },
          { title: 'Metas', desc: 'Avaliação das metas individuais e sua aderência à realidade' },
          { title: 'Alinhamento', desc: 'Alinhamento com o gestor direto sobre expectativas e gaps' },
        ].map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i + 1}
          >
            <Card className="h-full">
              <div className="text-primary font-mono text-xs font-bold mb-2">{String(i + 1).padStart(2, '0')}</div>
              <h3 className="font-serif font-bold text-slate-900 text-lg mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ─── Slide 11: Metodologia de Trabalho ───────────────────────────────────────
const WorkMethodology = () => (
  <section className="py-24 bg-white relative overflow-hidden">
    <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />
    <div className="container mx-auto max-w-5xl relative z-10">
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <SectionLabel icon={GitBranch} label="Slide 11 · Metodologia de Trabalho" />
        <Divider />
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-12">
          Etapas do <span className="text-primary">Projeto</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>
          <Card className="h-full">
            <h3 className="font-serif font-bold text-slate-900 text-xl mb-6">Fases de Revisão</h3>
            <ol className="space-y-4">
              <NumberedItem n={1}>Revisão do processo de vendas e metodologia</NumberedItem>
              <NumberedItem n={2}>Entrevistas com liderança e equipe comercial</NumberedItem>
              <NumberedItem n={3}>Revisão de KPIs e dashboards no Salesforce</NumberedItem>
              <NumberedItem n={4}>Revisão de metas e carteiras</NumberedItem>
            </ol>
          </Card>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}>
          <Card className="h-full">
            <h3 className="font-serif font-bold text-slate-900 text-xl mb-6">Alinhamento Geral com a Equipe</h3>
            <ul className="space-y-3">
              <BulletItem>Processo de vendas unificado</BulletItem>
              <BulletItem>Dashboards e painéis de controle</BulletItem>
              <BulletItem>Campos obrigatórios no CRM</BulletItem>
              <BulletItem>Rotina de reuniões e forecast</BulletItem>
            </ul>
          </Card>
        </motion.div>
      </div>
    </div>
  </section>
);

// ─── Slide 12: Governança e Execução ─────────────────────────────────────────
const Governance = () => (
  <section className="py-24 bg-slate-950 relative overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />
    <div className="container mx-auto max-w-5xl relative z-10">
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/40 border border-blue-800/50 text-blue-300 text-xs font-bold tracking-widest uppercase mb-6">
          <CalendarCheck className="w-3 h-3" />
          Slide 12 · Acompanhamento e Sustentação
        </div>
        <div className="w-12 h-0.5 bg-gradient-to-r from-blue-400 to-blue-700 mb-6 rounded-full" />
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
          Governança e <span className="text-transparent bg-clip-text bg-gradient-primary">Execução</span>
        </h2>
        <p className="text-slate-400 text-lg mb-14 max-w-xl">
          Presença contínua para garantir que as mudanças se tornem rotina.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-5 mb-10">
        {[
          {
            label: 'Mínimo',
            value: '30 dias',
            desc: 'Período mínimo de acompanhamento para validar mudanças',
          },
          {
            label: 'Ideal',
            value: '90 dias',
            desc: 'Período ideal para consolidar cultura e processo',
          },
          {
            label: 'Frequência',
            value: 'Semanal',
            desc: 'Reuniões semanais de acompanhamento comercial',
          },
        ].map((block, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i + 1}
          >
            <DarkCard className="text-center">
              <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest mb-2">{block.label}</div>
              <div className="text-4xl font-serif font-bold text-white mb-3">{block.value}</div>
              <p className="text-slate-400 text-sm leading-relaxed">{block.desc}</p>
            </DarkCard>
          </motion.div>
        ))}
      </div>

      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={4}>
        <DarkCard>
          <h3 className="font-serif font-bold text-white text-xl mb-4">Suporte na Implementação</h3>
          <p className="text-slate-400 leading-relaxed">
            Durante todo o período de acompanhamento, a SellMentors atuará no suporte direto à implementação das melhorias identificadas, garantindo aderência ao processo e sustentação dos resultados.
          </p>
        </DarkCard>
      </motion.div>
    </div>
  </section>
);

// ─── Footer ────────────────────────────────────────────────────────────────────
const PropostaFooter = () => (
  <footer className="bg-slate-950 border-t border-slate-900 py-14">
    <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="flex flex-col items-center md:items-start gap-3">
        <Logo variant="light" orientation="horizontal" />
        <p className="text-slate-500 text-sm">Mentoria e Consultoria em Vendas Complexas</p>
      </div>
      <div className="text-center md:text-right space-y-1">
        <p className="text-slate-400 text-sm font-mono">fernando@sellmentors.com.br</p>
        <p className="text-slate-600 text-xs">Documento confidencial · Adentro · Abril 2026</p>
      </div>
    </div>
  </footer>
);

// ─── Main Page ─────────────────────────────────────────────────────────────────
const PropostaAdentro = () => (
  <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
    <div className="noise-overlay" />

    {/* Minimal header */}
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-black/5">
      <div className="container mx-auto max-w-5xl flex items-center justify-between h-16">
        <a href="/" className="block">
          <Logo orientation="horizontal" />
        </a>
        <span className="hidden sm:block text-xs font-mono text-slate-400 tracking-wider uppercase">
          Proposta · Adentro
        </span>
      </div>
    </header>

    <main className="pt-16">
      <Cover />
      <VisionGeneral />
      <CommercialMaturity />
      <AssumedPains />
      <DiagnosedPains />
      <StrategicPoints />
      <ActionPlan />
      <CommercialTraining />
      <Scope />
      <IndividualDiagnosis />
      <WorkMethodology />
      <Governance />
    </main>

    <PropostaFooter />
  </div>
);

export default PropostaAdentro;
