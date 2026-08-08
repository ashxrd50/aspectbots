import Link from "next/link";
import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';

export default function Footer() {

    return (
        <>
            <footer className="py-10">
                <div className="pt-10 mx-auto">
                    <div className="lg:grid lg:grid-cols-6 gap-20">
                        <div className="col-span-3">
                            <div className="flex items-center space-x-5">
                                <img src="/img/aspectlogo.png" className="rounded-2xl w-12 shadow-lg shadow-amber-500/20" />
                                <p className="font-semibold text-xl text-white">Aspect Bot</p>
                            </div>
                            <Menu as="div" className="relative mt-3 inline-block text-left">
                                <div>
                                    <Menu.Button className="flex z-1 items-center w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                                        <img
                                            src={`https://flagcdn.com/w80/gb.png`}
                                            width="24"
                                            height="18"
                                            className="mr-2 h-4 rounded-sm"
                                        />
                                        English
                                        <ChevronDownIcon
                                            className="w-5 h-5 ml-2 -mr-1 transform rotate-180 text-violet-200 hover:text-violet-100"
                                            aria-hidden="true"
                                        />
                                    </Menu.Button>
<div className="py-1"></div>
<a href="https://top.gg/bot/1254412049883332659">
  <img src={"https://top.gg/api/widget/servers/1254412049883332659.svg"}/>
</a>
<div className="py-1"></div>
<a href="https://top.gg/bot/1254412049883332659">
  <img src={"https://top.gg/api/widget/upvotes/1254412049883332659.svg"}/>
</a>
<div className="py-1"></div>
<a href="https://top.gg/bot/1254412049883332659">
  <img src={"https://top.gg/api/widget/owner/1254412049883332659.svg"}/>
</a>
                                </div>
                            </Menu>
                        
                        </div>
                        <div className="col-span-1">
                            <p className="text-white font-medium mt-3 sm:mt-0 sm:mb-3">Bağlantılar</p>
                            <div>
                                <Link href="https://top.gg/bot/1254412049883332659/vote">
                                    <a className="text-white/50 hover:text-white hover:underline transform duration-200">
                                        <i className="fa fa-star mr-1 text-amber-400" /> Bota Oy Ver
                                    </a>
                                </Link>
                            </div>
                            <div>
                                <a href="https://discord.gg/nfW4s343z6" target="_blank" className="text-white/50 hover:text-white hover:underline transform duration-200">
                                    <i className="fab fa-discord mr-1 text-amber-400" /> Destek Sunucusu
                                </a>
                            </div>
                            <div>
                                <a href="https://discord.com/oauth2/authorize?client_id=1254412049883332659&permissions=8&integration_type=0&scope=bot+applications.commands" target="_blank" className="text-white/50 hover:text-white hover:underline transform duration-200">
                                    <i className="fa fa-robot mr-1 text-amber-400" /> Botu Ekle
                                </a>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <p className="text-white font-medium mt-3 sm:mt-0 sm:mb-3">Sosyal</p>
                            <div>
                                <Link href="https://discord.gg/nfW4s343z6">
                                    <a className="text-white/50 hover:text-white hover:underline transform duration-200">
                                    <i className={`fa-brands fa-discord`} /> Discord
                                    </a>
                                </Link>
                            </div>
                            <div>
                                <Link href="https://github.com/1umutda/MusicBot">
                                    <a className="text-white/50 hover:text-white hover:underline transform duration-200">
                                    <i className={`fa-brands fa-github`} /> GitHub
                                    </a>
                                </Link>
                            </div>
                            <div>
                                <Link href="https://youtube.com/UmutBayraktarYT">
                                    <a className="text-white/50 hover:text-white hover:underline transform duration-200">
                                    <i className={`fa-brands fa-youtube`} /> YouTube
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <p className="text-white font-medium mt-3 sm:mt-0 sm:mb-3">Önemli</p>
                            <div>
                                <Link href="/tos">
                                    <a className="text-white/50 hover:text-white hover:underline transform duration-200">
                                        Kullanım Koşulları
                                    </a>
                                </Link>
                            </div>
                            <div>
                                <Link href="/privacy">
                                    <a className="text-white/50 hover:text-white hover:underline transform duration-200">
                                        Gizlilik Politikası
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 grid content-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                        <p className="text-white text-center sm:text-left text-opacity-50">
                            {new Date().getFullYear()} &copy; Aspect Bot
                        </p>
                        <div className="hidden md:flex items-center justify-center">
                                <p className={"text-xs text-green-400"}>
                                    🟢 Bot Çevrimiçi
                                </p>
                        </div>
                        <p className="text-white text-center sm:text-right text-opacity-50">
                            {"Aspect Bot ile sevgiyle yapıldı ❤️"}
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
};
