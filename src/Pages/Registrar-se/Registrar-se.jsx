import Logo from '../../img/foxie logo (1).png';

function Register() {
    return (
        <main className="flex flex-col items-center justify-center">
            {/* Header */}
            <header className="border-b-2 shadow-lg shadow-slate-300 w-full bg-slate-200">
                <div className="flex items-center justify-between p-4">
                    <img
                        src={Logo}
                        alt="Logo"
                        className="w-16 h-auto"
                    />
                    <div className="flex space-x-4">
                        <button className="px-4 py-2 bg-purple-800 text-white rounded hover:bg-purple-700">
                            Voltar
                        </button>
                        <button className="px-4 py-2 bg-purple-800 text-white rounded hover:bg-purple-700">
                            Login
                        </button>
                    </div>
                </div>
            </header>
            {/* Formulario */}
            <div className="bg-gradient-to-b from-purple-700 to-fuchsia-600 w-full h-[663px]">
                <div className="flex flex-col items-center justify-center py-8">
                    <div className="w-full bg-white rounded-lg dark:border md:mt-0 sm:max-w-md xl:p-0 shadow-2xl shadow-slate-800">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl dark:text-white text-center">
                                Registrar-se
                            </h1>
                            <form className="grid grid-cols-2 space-y-4 md:space-y-6" action="#">
                                <div className='col-span-2'>
                                    <label htmlFor="nome" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Digite seu nome" required />
                                </div>
                                <div className='col-span-2'>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                    <input type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="nome@example.com" required />
                                </div>
                                <div className='col-span-2'>
                                    <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Senha</label>
                                    <input type="password" name="confirm-password" id="confirm-password" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="••••••••" required />
                                </div>
                                <div className='col-span-2'>
                                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">CPF</label>
                                    <input type="cpf" name="phone" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="000.000.000-00" required />
                                </div>
                                <div className="flex items-center justify-between col-span-2">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:bg-purple-800 dark:bg-gray-700 dark:border-gray-600 dark:focus:bg-purple-800" required />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Lembre-me</label>
                                        </div>
                                    </div>
                                    <a href="" className="text-sm font-medium text-purple-700 hover:underline dark:bg-purple-800 ml-4">Logar conta</a>
                                </div>
                                <button type="submit" className="w-full text-white bg-purple-800 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center col-span-2">Registrar-se</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </main>
    );
}

export default Register;
