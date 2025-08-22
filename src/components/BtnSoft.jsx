

function BtnSoft({herramienta, uso}) {
    return(
        <div className="w-full flex flex-col items-center p-3 bg-gray-100 rounded-xl hover:bg-linear-to-r from-cyan-500 to-violet-500 hover:text-white hover:scale-110 transform-transition duration-300 ease-in-out">
            <p className="text-md font-bold">{herramienta}</p>
            <p className="text-[10px]">{uso}</p>
        </div>
    )
}

export default BtnSoft;