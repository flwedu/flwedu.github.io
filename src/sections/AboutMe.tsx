import { ProfilePic } from "../components/ProfilePic";

export function AboutMe() {
  return (
    <section id="about" className="max-h-screen">
      <h1>Quem sou eu?</h1>
      <div className="justify-items-center grid grid-cols-1 p-2  items-center md:grid-cols-2">
        <ProfilePic />
        <p className="text-center sm:text-left max-w-prose">
          Olá, meu nome é Eduardo. Sou desenvolvedor de softwares, formado em
          Análise e Desenvolvimento de Sistemas e pós-graduando em
          Desenvolvimento Web Full-Stack. Fã de tecnologia, videogames e
          estética cyberpunk.
        </p>
      </div>
    </section>
  );
}
