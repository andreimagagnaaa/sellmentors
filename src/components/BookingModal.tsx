import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useBooking } from '../contexts/BookingContext';

const BookingModal = () => {
  const { isBookingModalOpen, closeBookingModal } = useBooking();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
    closeBookingModal();
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
                  placeholder="Seu nome"
                  required
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium text-slate-700">
                  Empresa
                </label>
                <Input
                  id="company"
                  placeholder="Nome da sua empresa"
                  required
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-700">
                  E-mail Corporativo
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  required
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-slate-700">
                  Telefone / WhatsApp
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(11) 99999-9999"
                  required
                  className="w-full"
                />
              </div>

              <Button type="submit" className="w-full h-12 text-base mt-6">
                Solicitar Agendamento
              </Button>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
