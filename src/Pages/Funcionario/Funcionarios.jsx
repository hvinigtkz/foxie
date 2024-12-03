import Logo from '../../img/foxie logo (1).png';
function Funcionarios() {
    return (
        <>
            <header className="h-full border-b-2 border-slate-200">
                <div className="flex items-center justify-between p-4">
                    <img
                        src={Logo}
                        alt="Logo"
                        className="w-16 h-auto"
                    />
                    <div className="flex space-x-4">
                        <button className="px-4 py-2 bg-purple-800 text-white rounded hover:bg-purple-700">
                            Sair da conta
                        </button>
                    </div>
                </div>
            </header>
            <main className=" w-full h-[663px]">
                <div className='grid grid-cols-12 h-full'>
                    <div className="col-span-2 flex justify-start items-start bg-white  p-4">
                        <ul className="space-y-7 mt-7 font-[Roboto]">
                            <li className='font-bold hover:text-purple-700'>Gerenciar conta</li>
                            <li className='font-bold hover:text-purple-700'>Funcionarios</li>
                            <li className='font-bold hover:text-purple-700'>Categorias</li>
                            <li className='font-bold hover:text-purple-700'>Produtos</li>
                        </ul>
                    </div>

                    <div className="col-span-10 bg-gradient-to-b from-purple-700 to-fuchsia-600">
                        {/* adicione informação */}
                        <div className="text-white m-10 font-[Roboto]">
                            <div className="flex items-center space-x-4">
                                <p className="text-2xl">Lista de Funcionarios</p>

                                {/* Campo de pesquisa */}
                                <input
                                    type="text"
                                    placeholder="Pesquisar Funcionários"
                                    className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-purple-600 text-black"
                                />

                                <button className="px-4 py-2 bg-purple-800 text-white rounded hover:bg-purple-700">
                                    Adicionar Funcionario
                                </button>
                            </div>
                        </div>

                        {/* lista de funcionarios */}
                        <div className='grid grid-cols-10 border-b-2 border-t-2 text-white'>
                            <div className="col-span-2 text-center mb-2 mt-2">
                                <p>Nome</p>
                            </div>
                            <div className="col-span-2 text-center mb-2  mt-2">
                                <p>Email</p>
                            </div>
                            <div className="col-span-2 text-center mb-2  mt-2">
                                <p>Senha</p>
                            </div>
                            <div className="col-span-2 text-center mb-2  mt-2">
                                <p>Telefone</p>
                            </div>
                            <div className="col-span-1 flex justify-center mb-2 mt-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 hover:text-slate-400">
                                    <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                                    <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                                </svg>


                            </div>
                            <div className="col-span-1 flex justify-center mb-2  mt-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 hover:text-slate-400">
                                    <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
                                </svg>

                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </>
    )
}
export default Funcionarios