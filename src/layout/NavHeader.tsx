export function NavHeader() {
  return (
    <nav>
      <ul>
        <li>
          <a href="#about">Home</a>
        </li>
        <li>
          <a href="#technologies">Tecnologias</a>
        </li>
        <li>
          <a href="#projects">Projetos</a>
        </li>
        <li>
          <a href="#">Links &dtrif;</a>
          <ul className="dropdown">
            <li>
              <a href="https://github.com/flwedu" target="_blank">
                GitHub{" "}
              </a>
            </li>
            <li>
              <a href="https://twitter.com/emprestavel" target="_blank">
                Twitter
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/edu-aquino/" target="_blank">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://www.codewars.com/users/flwedu" target="_blank">
                Codewars
              </a>
            </li>
            <li>
              <a href="https://www.hackerrank.com/edutraquino" target="_blank">
                HackerRank
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
