export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-900">
    
      <h1 className="text-4xl font-bold text-white mb-4">Entre em Contato</h1>
      <p className="text-gray-400 mb-8 text-center max-w-xl">
        Me mande uma mensagem ou confira meus projetos e redes sociais abaixo!
      </p>
      <form className="w-full max-w-md space-y-4 mb-10">
        <input type="text" placeholder="Nome" className="w-full p-3 rounded-lg bg-gray-700 text-white" />
        <input type="email" placeholder="Email" className="w-full p-3 rounded-lg bg-gray-700 text-white" />
        <textarea placeholder="Mensagem" className="w-full p-3 rounded-lg bg-gray-700 text-white h-32" />
        <button type="submit" className="w-full p-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition">
          Enviar Mensagem
        </button>
      </form>
      <div className="flex flex-col items-center space-y-4">
        <img src="URL_DA_IMAGEM" alt="Avatar GitHub" className="w-24 h-24 rounded-full" />
        <h2 className="text-2xl text-white font-semibold">Seu Nome</h2>
        <p className="text-amber-400 text-center max-w-sm">Bio do GitHub puxada pela API</p>
        <div className="flex space-x-4 mt-4 text-gray-200">
          <a href="https://github.com/SEU_USUARIO" >GitHub</a>
          <a href="https://linkedin.com/in/SEU_LINKEDIN" >LinkedIn</a>
          <a href="mailto:SEU_EMAIL">Email</a>
        </div>
      </div>
    </div>

  )
}
