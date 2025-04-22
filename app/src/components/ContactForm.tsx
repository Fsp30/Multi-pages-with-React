import React, { useState } from "react"
import { sendEmail } from "../services/mailService"

export function ContactForm() {
        const [form, setForm] = useState({ name: "", email: "", message: "" })
        const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">('idle')

        const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
                setForm({ ...form, [e.target.name]: e.target.value })
        }
        const handleSubmit = async (e: React.FormEvent) => {
                e.preventDefault()

                if (!form.name || !form.email || form.message) {
                        alert("Preencha os campos")
                        return
                }
                setStatus("sending")
                try {
                        await sendEmail({
                                to: form.email,
                                subject: `Nova mensagem de ${form.name}`,
                                body: form.message
                        })
                        setStatus("success")
                        setForm({ name: "", email: "", message: "" })
                } catch (err) {
                        setStatus("error")
                }

        }

        return (
                <form onSubmit={handleSubmit} className="space-y-4 max-w-md w-full">
                        <input
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Nome"
                                className="w-full p-3 bg-gray-700 text-white rounded-lg"
                        />
                        <input
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Email"
                                className="w-full p-3 bg-gray-700 text-white rounded-lg"
                        />
                        <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Mensagem"
                                className="w-full p-3 bg-gray-700 text-white rounded-lg h-32"
                        />
                        <button
                                type="submit"
                                disabled={status === "sending"}
                                className="w-full p-3 bg-emerald-500 hover:bg-emerald-600 rounded-lg text-white"
                        >
                                {status === "sending" ? "Enviando..." : "Enviar"}
                        </button>
                        {status === "success" && <p className="text-green-400 text-center">Enviado com sucesso!</p>}
                        {status === "error" && <p className="text-red-400 text-center">Erro ao enviar.</p>}
                </form>
        )
}