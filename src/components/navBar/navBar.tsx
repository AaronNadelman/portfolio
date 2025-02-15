function NavBar() {
    return (
        <header className="text-black-700 font-open_sans">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-black-900 mb-4 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.3541 3.64593C18.5085 1.8004 13.2722 4.04455 8.65837 8.65837C4.04455 13.2722 1.8004 18.5085 3.64593 20.3541C5.49146 22.1996 10.7278 19.9555 15.3416 15.3416C19.9555 10.7278 22.1996 5.49146 20.3541 3.64593Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.64593 3.64593C1.8004 5.49146 4.04455 10.7278 8.65837 15.3416C13.2722 19.9555 18.5085 22.1996 20.3541 20.3541C22.1996 18.5085 19.9555 13.2722 15.3416 8.65837C10.7278 4.04455 5.49146 1.8004 3.64593 3.64593Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12.009 12H12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <span className="ml-3 text-xl">Portfolio ADN</span>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-black-700 justify-center">
                    <a className="mr-5 text-black-700 hover:text-gray-900">Mis capacitaciones</a>
                    <a className="mr-5 text-black-700 hover:text-gray-900">Contacto</a>
                    <a className="mr-5 text-black-700 hover:text-gray-900">Sobre mi</a>
                    <a className="mr-5 text-black-700 hover:text-gray-900">Recursos para aprender dearrollo web</a>
                </nav>
            </div>
        </header>
    );
}

export default NavBar;