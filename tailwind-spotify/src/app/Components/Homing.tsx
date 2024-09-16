import Image from "next/image";

export function Homing() {
    return(
        <div className="mt-6 p-6 bg-gradient-to-b from-white/10 to-black/20 flex items-center gap-6">
            <Image src={"/Musica1.png"} alt="Musica" width={180} height={180}/>
            <div>
                <h1 className="text-7xl font-bold">Pop Internacional 2024 | As Melhores...</h1>
                <p className="text-lg font-medium text-white mt-4">As mais tocadas do pop internacional estão aqui! 🔥 LISA, Beyoncé, Miley Cyrus, Harry Styles e muitos mais!</p>
                <div className="flex items-center gap-4 mt-6">
                    <button className="w-24 h-14 text-lg rounded-full bg-green-500 text-black font-semibold">Play</button>
                    <button className="w-24 h-14 text-lg rounded-full bg-green-500/0 border-[1px] border-white font-semibold">Follow</button>
                    <a className="text-2xl ml-3">...</a>
                </div>
            </div>
        </div>
    )
}