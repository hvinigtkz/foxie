import Logo from '../../img/foxie logo (1).png';
import Banner from '..//../img/Order food-amico.svg'
function TelaInicial() {
    return (
        <>
            <header className="border-b-2 h-full">
                <div className="flex items-center justify-between p-4">
                    <img
                        src={Logo}
                        alt="Logo"
                        className="w-16 h-auto"
                    />
                    <div className="flex space-x-4">
                        <button className="px-4 py-2 bg-purple-800 text-white rounded hover:bg-purple-700">
                            Registrar-se
                        </button>
                        <button className="px-4 py-2 bg-purple-800 text-white rounded hover:bg-purple-700">
                            Logar
                        </button>
                    </div>
                </div>
            </header>
            <main className="bg-gradient-to-b from-purple-700 to-fuchsia-600 w-full h-[663px]">
                <div className='grid grid-cols-2 '>
                    <div className="col-span-1 flex justify-center items-center mt-5 h-full w-full">
                        <img src={Banner} alt=""
                            className=' w-4/5 h-5/6 ' />
                    </div>
                    <div className="col-span-1 flex justify-center items-center mt-5">

                        <p className="text-white text-7xl font-['Inter']">
                            Bem-vindo ao Foxie! Poder de gerenciar sua operação de forma simples e eficiente
                        </p>



                    </div>
                </div>
            </main>
        </>
    )
}
export default TelaInicial