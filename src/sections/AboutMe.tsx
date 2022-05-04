import { ProfilePic } from "../components/ProfilePic";

export function AboutMe() {
  return (
    <section>
      <h1>Quem sou eu?</h1>
      <div className="flex-col sm:flex-row">
        <p className="text-center sm:text-left">
          Olá, meu nome é Eduardo. Sou desenvolvedor de softwares, formado em
          Análise e Desenvolvimento de Sistemas e pós-graduando em
          Desenvolvimento Web Full-Stack. Fã de tecnologia, videogames e
          estética cyberpunk.
        </p>
        <ProfilePic />
      </div>
    </section>
  );
}
