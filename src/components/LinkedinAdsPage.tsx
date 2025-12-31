import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Loader2, Save, Plus, Trash2, ArrowLeft } from 'lucide-react';

interface OverviewData {
  objective: string;
  budget: string;
}

interface AudienceData {
  roles: string[];
  sectors: string[];
  locations: string[];
  company_size: string[];
  experience: string;
}

interface MessageAd {
  title: string;
  content: string;
}

interface MessageAdsData {
  ads: MessageAd[];
}

interface NativeForm {
  title: string;
  subtitle: string;
}

interface NativeFormsData {
  forms: NativeForm[];
}

const LinkedinAdsPage = () => {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  
  const [overview, setOverview] = useState<OverviewData>({ objective: '', budget: '' });
  const [audience, setAudience] = useState<AudienceData>({ 
    roles: [], sectors: [], locations: [], company_size: [], experience: '' 
  });
  const [messageAds, setMessageAds] = useState<MessageAdsData>({ ads: [] });
  const [nativeForms, setNativeForms] = useState<NativeFormsData>({ forms: [] });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    const { data, error } = await supabase.from('linkedin_sections').select('*');
    
    if (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
      return;
    }

    if (data) {
      data.forEach(row => {
        if (row.key === 'overview') setOverview(row.data);
        if (row.key === 'audience') setAudience(row.data);
        if (row.key === 'message_ads') setMessageAds(row.data);
        if (row.key === 'native_forms') setNativeForms(row.data);
      });
    }
    setLoading(false);
  };

  const handleSave = async () => {
    setSaving(true);
    
    const updates = [
      { key: 'overview', data: overview },
      { key: 'audience', data: audience },
      { key: 'message_ads', data: messageAds },
      { key: 'native_forms', data: nativeForms }
    ];

    for (const update of updates) {
      const { error } = await supabase
        .from('linkedin_sections')
        .upsert(update);
        
      if (error) console.error(`Error saving ${update.key}:`, error);
    }
    
    setSaving(false);
    alert('Dados salvos com sucesso!');
  };

  const handleArrayChange = (
    _section: 'audience', 
    field: keyof AudienceData, 
    value: string
  ) => {
    const arrayValue = value.split('\n').filter(line => line.trim() !== '');
    setAudience(prev => ({ ...prev, [field]: arrayValue }));
  };

  const getArrayString = (arr: string[] | string) => {
    if (typeof arr === 'string') return arr;
    return Array.isArray(arr) ? arr.join('\n') : '';
  };

  const addAd = () => {
    setMessageAds(prev => ({
      ads: [...prev.ads, { title: `Copy - 0${prev.ads.length + 1}`, content: '' }]
    }));
  };

  const removeAd = (index: number) => {
    setMessageAds(prev => ({
      ads: prev.ads.filter((_, i) => i !== index)
    }));
  };

  const updateAd = (index: number, field: keyof MessageAd, value: string) => {
    setMessageAds(prev => {
      const newAds = [...prev.ads];
      newAds[index] = { ...newAds[index], [field]: value };
      return { ads: newAds };
    });
  };

  const addForm = () => {
    setNativeForms(prev => ({
      forms: [...prev.forms, { title: '', subtitle: '' }]
    }));
  };

  const removeForm = (index: number) => {
    setNativeForms(prev => ({
      forms: prev.forms.filter((_, i) => i !== index)
    }));
  };

  const updateForm = (index: number, field: keyof NativeForm, value: string) => {
    setNativeForms(prev => {
      const newForms = [...prev.forms];
      newForms[index] = { ...newForms[index], [field]: value };
      return { forms: newForms };
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="/" className="text-slate-500 hover:text-primary transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </a>
            <h1 className="text-xl font-bold text-slate-900">Estratégia LinkedIn Ads</h1>
          </div>
          <Button onClick={handleSave} disabled={saving}>
            {saving ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Save className="w-4 h-4 mr-2" />}
            Salvar Alterações
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl space-y-8">
        
        {/* Overview Section */}
        <section className="bg-white rounded-xl shadow-sm border p-6">
          <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            📊 Visão Geral da Estratégia
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Objetivo Principal</label>
              <textarea
                className="w-full min-h-[80px] p-3 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
                value={overview.objective}
                onChange={(e) => setOverview(prev => ({ ...prev, objective: e.target.value }))}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Budget Mensal</label>
              <textarea
                className="w-full min-h-[80px] p-3 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
                value={overview.budget}
                onChange={(e) => setOverview(prev => ({ ...prev, budget: e.target.value }))}
              />
            </div>
          </div>
        </section>

        {/* Audience Section */}
        <section className="bg-white rounded-xl shadow-sm border p-6">
          <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            🎯 Público-Alvo
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Cargos (um por linha)</label>
              <textarea
                className="w-full min-h-[150px] p-3 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
                value={getArrayString(audience.roles)}
                onChange={(e) => handleArrayChange('audience', 'roles', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Setores (um por linha)</label>
              <textarea
                className="w-full min-h-[150px] p-3 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
                value={getArrayString(audience.sectors)}
                onChange={(e) => handleArrayChange('audience', 'sectors', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Localidades (um por linha)</label>
              <textarea
                className="w-full min-h-[100px] p-3 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
                value={getArrayString(audience.locations)}
                onChange={(e) => handleArrayChange('audience', 'locations', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Tamanho da Empresa (um por linha)</label>
              <textarea
                className="w-full min-h-[100px] p-3 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
                value={getArrayString(audience.company_size)}
                onChange={(e) => handleArrayChange('audience', 'company_size', e.target.value)}
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-1">Anos de Experiência</label>
              <Input
                value={audience.experience}
                onChange={(e) => setAudience(prev => ({ ...prev, experience: e.target.value }))}
              />
            </div>
          </div>
        </section>

        {/* Message Ads Section */}
        <section className="bg-white rounded-xl shadow-sm border p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              💬 Message Ads
            </h2>
            <Button onClick={addAd} variant="outline" className="h-8 px-3 text-xs">
              <Plus className="w-4 h-4 mr-2" /> Adicionar Copy
            </Button>
          </div>
          
          <div className="space-y-6">
            {messageAds.ads.map((ad, index) => (
              <div key={index} className="border rounded-lg p-4 bg-slate-50/50 relative group">
                <button 
                  onClick={() => removeAd(index)}
                  className="absolute top-4 right-4 text-slate-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
                
                <div className="space-y-4">
                  

        {/* Native Forms Section */}
        <section className="bg-white rounded-xl shadow-sm border p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              📝 Native Forms (Lead Gen)
            </h2>
            <Button onClick={addForm} variant="outline" className="h-8 px-3 text-xs">
              <Plus className="w-4 h-4 mr-2" /> Adicionar Formulário
            </Button>
          </div>
          
          <div className="space-y-6">
            {nativeForms.forms.map((form, index) => (
              <div key={index} className="border rounded-lg p-4 bg-slate-50/50 relative group">
                <button 
                  onClick={() => removeForm(index)}
                  className="absolute top-4 right-4 text-slate-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-500 mb-1 uppercase tracking-wider">Título do Formulário (Headline)</label>
                    <Input
                      value={form.title}
                      onChange={(e) => updateForm(index, 'title', e.target.value)}
                      className="bg-white"
                      placeholder="Ex: Sessão Estratégica de Vendas B2B"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-500 mb-1 uppercase tracking-wider">Subtítulo / Detalhes (Offer Details)</label>
                    <Input
                      value={form.subtitle}
                      onChange={(e) => updateForm(index, 'subtitle', e.target.value)}
                      className="bg-white"
                      placeholder="Ex: Agende seu diagnóstico gratuito (30 min)."
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section><div>
                    <label className="block text-xs font-medium text-slate-500 mb-1 uppercase tracking-wider">Título / Identificador</label>
                    <Input
                      value={ad.title}
                      onChange={(e) => updateAd(index, 'title', e.target.value)}
                      className="bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-500 mb-1 uppercase tracking-wider">Conteúdo da Mensagem</label>
                    <textarea
                      className="w-full min-h-[200px] p-3 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 bg-white font-mono text-sm"
                      value={ad.content}
                      onChange={(e) => updateAd(index, 'content', e.target.value)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
};

export default LinkedinAdsPage;
