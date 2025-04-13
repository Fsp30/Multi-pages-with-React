import axios from 'axios'
import { useEffect, useState } from 'react'
import { Mail, UsersRound } from 'lucide-react'

interface GitUser {
  avatar_url: string
  name: string
  bio: string
  public_repos: number
  html_url: string
}

export default function Contact() {
  const [gitData, setGitData] = useState<GitUser | null>(null);

  useEffect(() => {
    axios.get<GitUser>("https://api.github.com/users/Fsp30")
      .then((response) => {
        setGitData(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados do GitHub:", error);
      });
  }, []);

  return (
    <div className="h-screen overflow-y-auto p-6 bg-gray-900 text-white flex flex-col items-center">
      <div className="max-w-4xl w-full flex flex-col items-center">

        <h1 className="text-4xl font-bold mb-4">Entre em Contato</h1>
        <p className="text-gray-400 mb-8 text-center max-w-xl">
          Me mande uma mensagem ou confira meus projetos e redes sociais abaixo!
        </p>

        <form className="w-full max-w-md space-y-4 mb-10">
          <div className="w-full p-3 gap-2 rounded-lg bg-gray-700 text-white flex ">
            <UsersRound />
            <input
              type="text"
              placeholder="Nome"
              className='w-full border-0 focus:ring-0 focus:outline-none bg-gray-700 text-zinc-400 rounded-lg'
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-gray-700 text-white"
          />
          <textarea
            placeholder="Mensagem"
            className="w-full p-3 rounded-lg bg-gray-700 text-white h-32"
          />
          <button
            type="submit"
            className="w-full p-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition"
          >
            Enviar Mensagem
          </button>
        </form>

        {gitData ? (
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center mb-10">
            <img
              src={gitData.avatar_url}
              alt="Avatar"
              className="w-24 h-24 rounded-full mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">{gitData.name}</h2>
            <p className="text-gray-300 mb-4 text-center">{gitData.bio}</p>
            <p className="text-sm text-gray-400 mb-4">
              Repositórios públicos: {gitData.public_repos}
            </p>
            <a
              href={gitData.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Ver GitHub
            </a>
          </div>
        ) : (
          <p>Carregando informações...</p>
        )}

      </div>
    </div>
  )
}
