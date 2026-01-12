

const IdentityPage = () => {
  const downloadPng = (svgUrl: string, filename: string) => {
    const img = new Image();
    img.src = svgUrl;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      // Set canvas size to match SVG or larger for better quality
      // For simplicity, we'll use a reasonable size or the natural size if available
      // SVGs might not have intrinsic size in pixels, so we might need to force one
      // But our SVGs have viewBox, so they should scale.
      // Let's set a standard high-res width
      const scale = 4; // High res
      canvas.width = (img.width || 500) * scale;
      canvas.height = (img.height || 500) * scale;
      
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        const pngUrl = canvas.toDataURL('image/png');
        const downloadLink = document.createElement('a');
        downloadLink.href = pngUrl;
        downloadLink.download = filename;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      }
    };
  };

  const LogoCard = ({ title, src, dark = false }: { title: string, src: string, dark?: boolean }) => (
    <div className={`border rounded-lg p-6 flex flex-col items-center ${dark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50'}`}>
      <div className="h-32 flex items-center justify-center mb-4 w-full">
        <img src={src} alt={title} className={`max-h-24 max-w-full ${dark ? '' : ''}`} />
      </div>
      <h3 className={`font-bold mb-4 ${dark ? 'text-white' : 'text-slate-900'}`}>{title}</h3>
      <div className="flex gap-2">
        <a 
          href={src} 
          download 
          className="px-3 py-2 text-sm bg-primary text-white rounded hover:bg-blue-700 transition"
        >
          SVG
        </a>
        <button 
          onClick={() => downloadPng(src, src.split('/').pop()?.replace('.svg', '.png') || 'logo.png')}
          className={`px-3 py-2 text-sm border rounded transition ${
            dark 
              ? 'border-slate-700 text-white hover:bg-slate-800' 
              : 'border-slate-300 text-slate-700 hover:bg-slate-100'
          }`}
        >
          PNG
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold font-serif text-primary mb-4">Identidade Visual</h1>
          <p className="text-lg text-slate-600">Recursos oficiais da marca SellMentors para download.</p>
        </header>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-6 text-slate-800 border-b pb-2">Versão Padrão (Fundo Claro)</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <LogoCard title="Ícone" src="/identidade/sm-icon.svg" />
              <LogoCard title="Logo Horizontal" src="/identidade/sm-logo-horizontal.svg" />
              <LogoCard title="Logo Vertical" src="/identidade/sm-logo-vertical.svg" />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-slate-800 border-b pb-2">Versão Clara (Fundo Escuro)</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <LogoCard title="Ícone Light" src="/identidade/sm-icon-light.svg" dark />
              <LogoCard title="Logo Horizontal Light" src="/identidade/sm-logo-horizontal-light.svg" dark />
              <LogoCard title="Logo Vertical Light" src="/identidade/sm-logo-vertical-light.svg" dark />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-slate-800 border-b pb-2">Redes Sociais</h2>
            <div className="grid md:grid-cols-1 gap-8">
              <div className="border rounded-lg p-6 flex flex-col items-center bg-slate-50">
                <div className="w-full flex items-center justify-center mb-4 bg-slate-200 rounded overflow-hidden">
                  <img src="/identidade/linkedin-cover-horizontal-right.svg" alt="Capa LinkedIn" className="w-full h-auto" />
                </div>
                <h3 className="font-bold mb-4 text-slate-900">Capa LinkedIn (Logo à Direita)</h3>
                <div className="flex gap-2">
                  <a 
                    href="/identidade/linkedin-cover-horizontal-right.svg" 
                    download 
                    className="px-3 py-2 text-sm bg-primary text-white rounded hover:bg-blue-700 transition"
                  >
                    SVG
                  </a>
                  <button 
                    onClick={() => downloadPng('/identidade/linkedin-cover-horizontal-right.svg', 'linkedin-cover.png')}
                    className="px-3 py-2 text-sm border border-slate-300 text-slate-700 rounded hover:bg-slate-100 transition"
                  >
                    PNG
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
        
        <div className="mt-12 text-center">
          <a href="/" className="text-primary hover:underline">← Voltar para o site</a>
        </div>
      </div>
    </div>
  );
};

export default IdentityPage;
