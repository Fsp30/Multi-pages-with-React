import React, { useState } from "react"
import { sendEmail } from "../services/mailService"
import { Mail, UsersRound, AtSign, MailCheck } from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion";

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")
    try {
      await sendEmail({
        to: form.email,
        subject: `Nova mensagem de ${form.name}`,
        body: form.message
      })
      setStatus("success")
      setForm({ name: "", email: "", message: "" })
      setTimeout(() => setStatus("idle"), 3000) 
    } catch (err) {
      setStatus("error")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4 mb-10">
      <div className="w-full p-3 gap-2 rounded-lg bg-gray-700 text-white flex">
        <UsersRound />
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Nome"
          className="w-full border-0 focus:ring-0 focus:outline-none bg-gray-700 text-zinc-400 rounded-lg"
        />
      </div>
      <div className="w-full p-3 gap-2 rounded-lg bg-gray-700 text-white flex">
        <AtSign />
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full border-0 focus:ring-0 focus:outline-none bg-gray-700 text-zinc-400 rounded-lg"
        />
      </div>
      <div className="w-full p-3 gap-2 rounded-lg bg-gray-700 text-white flex">
        <Mail />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Mensagem"
          className="w-full border-0 focus:ring-0 focus:outline-none bg-gray-700 text-zinc-400 rounded-lg"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full h-8 p-3 bg-zinc-500 hover:bg-gray-800 text-white rounded-lg transition relative overflow-hidden flex justify-center items-center"
      >
        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              key="icon"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute"
            >
              <MailCheck size={24} />
            </motion.div>
          ) : (
            <motion.span
              key="text"
              initial={{ y: 0, opacity: 1 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute"
            >
              {status === "sending" ? "Enviando..." : "Enviar"}
            </motion.span>
          )}
        </AnimatePresence>
      </button>

      {status === "success"}
      {status === "error" && <p className="text-red-400 text-center">Erro ao enviar.</p>}
    </form>
  )
}
