import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Loader2, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useBooking } from '../contexts/BookingContext';
import { supabase } from '../lib/supabase';

const BookingModal = () => {
  const { isBookingModalOpen, closeBookingModal } = useBooking();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const { error: supabaseError } = await supabase
        .from('leads')
        .insert([
          {
            name: formData.name,
            company: formData.company,
            email: formData.email,
            phone: formData.phone
          }
        ]);

      if (supabaseError) throw supabaseError;

      setIsSuccess(true);
      setTimeout(() => {
        closeBookingModal();
        setIsSuccess(false);
        setFormData({ name: '', company: '', email: '', phone: '' });
      }, 3000);
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Ocorreu um erro ao enviar. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isBookingModalOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeBookingModal}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: "-50%", y: "-40%" }}
            animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
            exit={{ opacity: 0, scale: 0.95, x: "-50%", y: "-40%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed left-1/2 top-1/2 w-[90%] md:w-full max-w-md bg-white rounded-2xl shadow-2xl z-[70] p-6 md:p-8 max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={closeBookingModal}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {isSuccess ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">
                  Solicitação Recebida!
                </h3>
                <p className="text-slate-600">
                  Entraremos em contato em breve para agendar sua sessão estratégica.
                </p>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <h2 className="text-2xl font-serif font-bold text-slate-900 mb-2">
                    Agendar Sessão Estratégica
                  </h2>
                  <p className="text-slate-600">
                    Preencha seus dados abaixo para solicitarmos o agendamento.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-700">
                      Nome Completo
                    </label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Seu nome"
                      required
                      className="w-full"
                      disabled={isLoading}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-slate-700">
                      Empresa
                    </label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Nome da sua empresa"
                      required
                      className="w-full"
                      disabled={isLoading}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-700">
                      E-mail Corporativo
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      required
                      className="w-full"
                      disabled={isLoading}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-slate-700">
                      Telefone / WhatsApp
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(11) 99999-9999"
                      required
                      className="w-full"
                      disabled={isLoading}
                    />
                  </div>

                  {error && (
                    <p className="text-sm text-red-500 text-center">{error}</p>
                  )}

                  <Button type="submit" className="w-full h-12 text-base mt-6" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      'Solicitar Agendamento'
                    )}
                  </Button>
                </form>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
