export function NavHeader() {
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-1 rounded dark:bg-gray-800">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium">
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
            <a href="#links">Links</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
