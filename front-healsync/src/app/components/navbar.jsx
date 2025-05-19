

export default function NavBar(){
    return (
        <>
            <nav className="flex flex-row justify-between items-center w-[100%] ml-3 mr-5 text-white">
                <div className="flex flex-row gap-4">
                    <div>
                        <a href="/" className="hover:underline transition">
                            <p>início</p>
                        </a>
                    </div>
                    <div>
                        <a href="/pages/pagamentos" className="hover:underline transition">
                            <p>pagamentos</p>
                        </a>
                    </div>
                </div>
                <div>
                    <a href="/pages/config">
                        <img className="w-11" src="/icon-config.png" alt="logo" />
                    </a>
                </div>
            </nav>
        </>
    )
}