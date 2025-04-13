import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="p-6 min-h-screen md:h-screen flex flex-col md:flex-row gap-6 bg-gray-700 justify-center items-center overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="h-auto md:h-[85vh] w-full md:w-2/5 bg-gray-950 rounded-2xl p-8 text-zinc-300 overflow-y-auto shadow-lg shadow-blue-500/50"
      > 
      
        <h2 className="text-3xl font-bold mb-6">Sobre o Blog</h2>
        <p className="mb-4">
          Bem-vindo ao nosso espaço dedicado à tecnologia! Este blog foi criado para ser uma fonte
          de inspiração e aprendizado para todos que amam inovação. Aqui, reunimos conteúdos que vão
          desde dicas práticas para programadores iniciantes até análises sobre tendências de ponta.
        </p>
        <p>
          Nosso objetivo é construir uma comunidade apaixonada por desenvolvimento, design, IA, e muito
          mais. Publicamos artigos semanais, tutoriais completos e entrevistas com profissionais da área,
          para que você esteja sempre atualizado e motivado a evoluir na sua jornada tecnológica.
        </p>
     
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="h-auto md:h-[85vh] w-full md:flex-1 bg-gray-800 rounded-2xl p-8 overflow-y-auto text-emerald-200 shadow-lg shadow-purple-500/50"
      >
        <h2 className="text-3xl font-bold mb-6">O Que Você Vai Encontrar Aqui</h2>
        <p className="mb-4">
          No nosso blog, você encontra guias completos sobre linguagens como JavaScript, TypeScript, e Python,
          além de tutoriais de frameworks modernos como React, Next.js e NestJS. Também falamos sobre melhores
          práticas, dicas de produtividade e ferramentas que ajudam no dia a dia do desenvolvedor.
        </p>
        <p>
          Gostamos de explorar novos horizontes: Inteligência Artificial, segurança cibernética, DevOps e
          empreendedorismo digital são apenas alguns dos temas que tratamos. Se você busca conteúdo de qualidade,
          didático e direto ao ponto, está no lugar certo. Nossa missão é te ajudar a crescer no mundo da tecnologia,
          um post de cada vez.
        </p>
      </motion.div>
    </div>
  );
}
