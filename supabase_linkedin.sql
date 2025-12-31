-- Create a table for storing LinkedIn Ads strategy sections
create table if not exists linkedin_sections (
  key text primary key,
  data jsonb not null
);

-- Enable RLS
alter table linkedin_sections enable row level security;

-- Drop existing policies to avoid errors when recreating them
drop policy if exists "Enable read access for all users" on linkedin_sections;
drop policy if exists "Enable update access for all users" on linkedin_sections;
drop policy if exists "Enable insert access for all users" on linkedin_sections;

-- Create policies to allow public access (since this is an internal tool without auth for now)
create policy "Enable read access for all users" on linkedin_sections for select using (true);
create policy "Enable update access for all users" on linkedin_sections for update using (true);
create policy "Enable insert access for all users" on linkedin_sections for insert with check (true);

-- Insert initial data (Upsert - updates if exists)
insert into linkedin_sections (key, data) values
('overview', '{"objective": "Gerar leads qualificados para sessões estratégicas gratuitas (30 min), focando em gestores e vendedores B2B que enfrentam desafios reais de performance comercial.", "budget": "Mês 1: R$ 1.000 (investimento inicial)\nMês 2: R$ 0 (crédito do LinkedIn)\nMês 3+: R$ 1.000/mês"}'::jsonb),
('audience', '{"roles": ["Diretor Comercial", "VP de Vendas", "Head de Vendas", "Gerente de Vendas", "Gerente Comercial", "Chief Revenue Officer (CRO)", "Account Executive", "Sales Executive", "Executivo de Contas", "Vendedor B2B"], "sectors": ["SaaS e Tecnologia", "Serviços B2B", "Indústria", "Consultorias"], "locations": ["São Paulo (capital e região metropolitana)", "Porto Alegre"], "company_size": ["51-200 funcionários", "201-500 funcionários"], "experience": "5+ anos na função"}'::jsonb),
('message_ads', '{"ads": [
  {"title": "Copy - 01", "content": "[Nome],\n\nVocê confia nos seus números de vendas?\n\nPorque eu aposto que:\n→ 30% está \"quase fechando\" há mais de 60 dias\n→ 20% nunca teve budget validado\n→ 10% do seu pipeline não tem decisor real mapeado\n\nNão é culpa do seu time. É falta de método.\n\nPosso te mostrar o framework que uso há 35 anos para evitar isso.\n\n30 minutos. Zero enrolação.\n\n👉 Clique em Saiba Mais"},
  {"title": "Copy - 02", "content": "[Nome],\n\n\"O mercado está difícil.\"\n\"Os clientes não têm budget.\"\n\"A concorrência está jogando o preço lá embaixo.\"\n\nOuço isso toda semana.\n\nSabe o que descobri em 35 anos?\n\nAs empresas que continuam vendendo bem não estão em outro mercado.\nElas só pararam de achar e começaram a saber.\n\n→ Sabem exatamente onde estão no processo\n→ Sabem qual pergunta fazer em cada etapa\n→ Sabem quando desqualificar (sim, é um superpoder)\n\nQuer saber a diferença entre \"achar\" e \"saber\"?\n\nTe mostro em 30 minutos.\n\n👉 Clique em Saiba Mais"},
  {"title": "Copy - 03", "content": "[Nome],\n\nCliente não responde há 15 dias.\n\nVocê não sabe se insiste ou se desiste. Tem medo de parecer desesperado.\n\nAí fica naquele limbo: não avança, não descarta.\n\nEsse é um dos problemas mais comuns em vendas B2B. E tem solução estruturada.\n\nVamos olhar isso juntos? 30 minutos. Gratuito. Sem compromisso.\n\n👉 Clique em Saiba Mais"},
  {"title": "Copy - 04", "content": "[Nome],\n\n\"O cliente adorou a apresentação.\"\n\"Ele vai levar pro time.\"\n\"Disse que me retorna semana que vem.\"\n\nJá ouviu (ou falou) isso?\n\nPois é. Eu também. Centenas de vezes.\n\nE perdi centenas de deals acreditando nisso.\n\nPorque \"gostar\" não é métrica. \"Levar pro time\" não é compromisso.\n\nAprendi (do jeito difícil) quais perguntas fazer para saber se o interesse é real ou só educação.\n\nPosso te ensinar. 30 minutos. Gratuito.\n\n👉 Clique em Saiba Mais"},
  {"title": "Copy - 05", "content": "[Nome],\n\nPergunta rápida: suas vendas dependem de sorte ou de método?\n\nSe você não sabe responder com certeza... provavelmente é sorte.\n\nE sorte não escala. Não se replica. Não se ensina.\n\nMétodo sim.\n\nEm 35 anos estruturando vendas B2B, transformei \"arte\" em ciência:\n\n→ Qualificação que separa oportunidade de perda de tempo\n→ Perguntas que revelam a verdade (não o que você quer ouvir)\n→ Follow-up que avança, não que amola\n\nQuer ver como? 30 minutos. Gratuito.\n\n👉 Clique em Saiba Mais"}
 ]}'::jsonb),
('native_forms', '{"forms": [
  {"title": "Mentoria Comercial B2B", "subtitle": "Inscreva-se para uma sessão estratégica gratuita de 30 minutos."},
  {"title": "Diagnóstico de Vendas", "subtitle": "Receba uma análise completa do seu processo comercial."}
]}'::jsonb)
on conflict (key) do update set data = excluded.data;
