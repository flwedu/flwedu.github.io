export function Technologies() {
  return (
    <section id="technologies">
      <h1>Tecnologias</h1>
      <p>
        Aprendi Java e Orientação a Objetos durante a faculdade, mas me
        apaixonei pelo ecossistema Javascript. Gosto de estudar e aplicar
        algumas metodologias em meus projetos para deixá-los ainda mais
        organizados e fácil de manter, como Clean Code, Clean Architecture, DDD
        e TDD. Tecnologias de interesse:
      </p>
      <div className="grid text-center mt-2 text-base sm:grid-cols-2 md:text-xl text-mainPurple dark:text-slate-300">
        <ul>
          <li>Javascript</li>
          <li>Node.js</li>
          <li>Typescript</li>
          <li>React.js</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
        <ul>
          <li>Java & Spring</li>
          <li>GIT & Github</li>
          <li>Maven & Gradle</li>
          <li>JUnit</li>
          <li>GraphQL</li>
          <li>API Rest</li>
        </ul>
      </div>
    </section>
  );
}
