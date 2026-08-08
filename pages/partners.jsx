
export default function Partners() {

    return (
        <>
            <div className="w-full my-10 text-center">
              <div className="flex w-full justify-center mb-6">
                <img width="120" src="/img/aspectlogo.png" className="rounded-3xl shadow-2xl shadow-amber-600/40 ring-4 ring-amber-500/30" />
              </div>
                <h1 className="py-4 animateHeader text-4xl font-extrabold text-center text-white">
                    <i className="fal fa-handshake text-amber-400 mr-2" />
                    Ortaklar
                </h1>
                <p className="text-white/50 text-sm">Aspect Bot'un gururlu ortakları</p>
            </div>

            <div className="lg:max-w-screen-lg mt-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">

            <div className="flex flex-col justify-center text-white rounded">
            <a href="https://discord.gg/6XGqdgE">
                        <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 p-4 rounded-2xl border border-white/10 hover:border-amber-500/30 transition duration-200">
                            <img className="rounded-2xl h-20 w-20 shadow-lg shadow-black/50" src="https://cdn.discordapp.com/icons/676124992919830548/68ef946cf7cc39e4063eed4d446f6dda.webp" />
                            <div>
                                <h1 className="leading-none text-2xl font-bold text-white">Code Share</h1>
                                <div className="flex items-center mt-2">
                                    <p className="font-normal text-sm text-white/60">
                                        Kodlarını paylaş, projelerini sonsuza dek aktif tut. Discord arayüzüyle dünyanın en büyük kod paylaşım sitesi!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </a>
                    </div>

                    <div className="flex flex-col justify-center text-white rounded">
                        <a href="https://discord.gg/Fy4WmSThRZ">
                            <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 p-4 rounded-2xl border border-white/10 hover:border-amber-500/30 transition duration-200">
                            <img className="rounded-2xl h-20 w-20 shadow-lg shadow-black/50" src="https://cdn.discordapp.com/icons/924312493537509407/721de16575a9048c9c6980613ebb99f0.webp" />
                            <div>
                                <h1 className="leading-none text-2xl font-bold text-white">The Developers</h1>
                                <div className="flex items-center mt-2">
                                    <p className="font-normal text-sm text-white/60">
                                    Yazılım ve benzeri konularda yardım alabilir ya da sohbet edebilirsin. Harika bir geliştirici olmaya ne dersin?
                                    </p>
                                </div>
                            </div>
                        </div>
                        </a>
                        </div>

                </div>
                <div className="py-10"></div>
        </>
    );
};