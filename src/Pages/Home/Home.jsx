import Logo from '../../img/foxie logo (1).png';

function Home() {
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
            <main className="w-full h-[663px]">
                <div className="grid grid-cols-12 h-full">
                    <div className="col-span-2 flex justify-start items-start bg-white p-4">
                        <ul className="space-y-7 mt-7 font-[Roboto]">
                            <li className='font-bold hover:text-purple-700'>Gerenciar conta</li>
                            <li className='font-bold hover:text-purple-700'>Funcionarios</li>
                            <li className='font-bold hover:text-purple-700'>Categorias</li>
                            <li className='font-bold hover:text-purple-700'>Produtos</li>
                        </ul>
                    </div>

                    <div className="col-span-10 bg-gradient-to-b from-purple-700 to-fuchsia-600">
                        {/* adicione informação */}
                        <div className='m-10'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8 text-white">
                                <path fillRule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className='flex justify-center font-[Reboto] border-b-2'>
                            <p className='text-white text-4xl text-center mb-5'>Gerenciar Conta</p>
                        </div>
                        <div>
                            <div className="grid grid-cols-2 px-16 gap-5 mt-10">
                                <div className='col-span-2'>
                                    <label htmlFor="nome" className="block mb-2 text-sm font-bold text-white">Nome</label>
                                    <p className='text-white text-md'>Luciano de Souza </p>
                                </div>
                                <div className='col-span-2'>
                                    <label htmlFor="Email" className="block mb-2 text-sm font-bold text-white">Email</label>
                                    <p className='text-white text-md'>nome@example.com</p>
                                </div>
                                <div className='col-span-2'>
                                    <label htmlFor="senha" className="block mb-2 text-sm font-bold text-white">Senha</label>
                                    <p className='text-white text-md'>********</p>
                                </div>
                                <div className='col-span-2'>
                                    <label htmlFor="telefone" className="block mb-2 text-sm font-bold text-white">Telefone:</label>
                                    <p className='text-white text-md'>(xx)xxxxx-xxxx</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Botões de Editar e Deletar */}
                <div className="absolute bottom-10 right-10 flex space-x-4">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-white hover:text-slate-400">
        <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
        <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
    </svg>
</div>

            </main>
        </>
    )
}

export default Home;
