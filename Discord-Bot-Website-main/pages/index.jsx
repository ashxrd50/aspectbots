import Link from "next/link";
import Image from "next/image";

export default function Index() {
	
  return (
    <>
      {/* Hero Section */}
      <div className="py-20 mb-30 max-w-3xl mx-auto text-center">
        <div className="flex w-full justify-center mb-6">
          <img width="160" height="160" src="/img/aspectlogo.png" className="rounded-3xl shadow-2xl shadow-amber-600/40 ring-4 ring-amber-500/30 animate-pulse" style={{animationDuration:'3s'}} />
        </div>
        <p className="animateHeader text-5xl font-extrabold text-center text-white tracking-tight">
          Aspect <span className="text-amber-400">Bot</span>
        </p>
        <p className="animateHeader text-white text-opacity-50 text-center mt-4 text-lg max-w-xl mx-auto">
          Kendi sunucunu Aspect Bot ile yönetmeye ne dersin? Ücretsiz dünyani oluştur, kendi çalma listeni yap ve en iyi seslerle bu zevki yaşa.
        </p>
        <div className="animateHeader mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link href={"https://discord.com/oauth2/authorize?client_id=1254412049883332659&permissions=8&integration_type=0&scope=bot+applications.commands"}>
            <a className="flex items-center px-8 justify-center gap-x-2 shadow-lg shadow-amber-600/30 rounded-2xl py-4 font-semibold bg-gradient-to-bl from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white text-lg">
              <i className="fab fa-discord mr-2" /> Aspect'i Ekle
            </a>
          </Link>
          <Link href={"https://top.gg/bot/1254412049883332659/vote"}>
            <a className="flex items-center px-8 justify-center gap-x-2 shadow-lg shadow-amber-600/30 rounded-2xl py-4 font-semibold border border-amber-500/40 hover:bg-amber-500/10 transition duration-200 text-white text-lg">
              <i className="fa fa-star mr-2" /> Oy Ver
            </a>
          </Link>
        </div>

        <div style={{ zIndex: '-1' }} className="hidden xl:block undrag pointer-events-none opacity-10 -left-[10vw] absolute top-[8vw] h-[35vw] flex-shrink-0 grayscale rotate-[1deg]">
          <Image width="600" height="600" src="/img/gift-left.png" />
        </div>
        <div style={{ zIndex: '-1' }} className="hidden xl:block undrag opacity-10 pointer-events-none -right-[15vw] absolute top-[13vw] h-[90vw] grayscale -rotate-9">
          <Image width="600" height="600" src="/img/gift-right.png" />
        </div>
      </div>

      {/* Stats / İkon Bar */}
      <div className="flex flex-wrap justify-center gap-6 py-10 border-y border-white/10 my-4">
        <div className="flex items-center gap-3 bg-white/5 rounded-2xl px-6 py-3">
          <img src="/img/86637-diamond.png" width="36" className="rounded-lg" />
          <span className="text-white font-semibold">Premium Kalite</span>
        </div>
        <div className="flex items-center gap-3 bg-white/5 rounded-2xl px-6 py-3">
          <img src="/img/2470-na-emeraldicon.png" width="36" className="rounded-lg" />
          <span className="text-white font-semibold">Çevrimiçi & Stabil</span>
        </div>
        <div className="flex items-center gap-3 bg-white/5 rounded-2xl px-6 py-3">
          <img src="/img/9692-greed-guard.png" width="36" className="rounded-lg" />
          <span className="text-white font-semibold">Güvenli & Korumalı</span>
        </div>
        <div className="flex items-center gap-3 bg-white/5 rounded-2xl px-6 py-3">
          <img src="/img/3945-info.png" width="36" className="rounded-lg" />
          <span className="text-white font-semibold">7/24 Destek</span>
        </div>
      </div>

      {/* Özellikler */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-y-0 lg:gap-x-12 py-24">
        <div className="col-span-4">
          <div className="flex items-center gap-4 mb-4">
            <img src="/img/aspectlogo.png" width="56" className="rounded-2xl shadow-lg shadow-amber-500/20" />
            <p className="text-white text-4xl font-bold">Aspect <span className="text-amber-400">Bot</span></p>
          </div>
          <p className="text-gray-500/75 text-md font-medium">Kendi duygularınla rahatlamak için en iyi ortamı yaratmaya ne dersin?</p>
          <a href="https://discord.com/oauth2/authorize?client_id=1254412049883332659&permissions=8&integration_type=0&scope=bot+applications.commands" className="mt-8 flex items-center px-4 justify-center gap-x-2 shadow-lg shadow-amber-600/20 cursor-pointer rounded-2xl py-4 font-semibold bg-gradient-to-r from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white">
            <i className="fab fa-discord mr-2" /> Aspect'i Ekle
          </a>
        </div>

        <div className="col-span-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white/5 rounded-2xl p-5 hover:bg-white/10 transition duration-200">
            <div className="text-white">
              <div className="flex items-center gap-3 mb-2">
                <img src="/img/29561-settings.png" width="36" className="rounded-xl" />
                <p className="text-xl font-semibold">Optimizasyon</p>
              </div>
              <p className="text-gray-500 line-clamp-4">Sunucuna özel hızlı ve özelleştirilebilir ayarlarla Aspect, sana müzikal zevki en üst düzeyde sunar.</p>
            </div>
          </div>
          <div className="bg-white/5 rounded-2xl p-5 hover:bg-white/10 transition duration-200">
            <div className="text-white">
              <div className="flex items-center gap-3 mb-2">
                <img src="/img/2470-na-emeraldicon.png" width="36" className="rounded-xl" />
                <p className="text-xl font-semibold">Evrensel</p>
              </div>
              <p className="text-gray-500 line-clamp-4">Çoklu platform müzik desteği sunan bir bot. (Spotify, SoundCloud, YouTube) | Tüm telif hakkı ve lisanslara uygundur.</p>
            </div>
          </div>
          <div className="bg-white/5 rounded-2xl p-5 hover:bg-white/10 transition duration-200">
            <div className="text-white">
              <div className="flex items-center gap-3 mb-2">
                <img src="/img/9692-greed-guard.png" width="36" className="rounded-xl" />
                <p className="text-xl font-semibold">Güvenlik</p>
              </div>
              <p className="text-gray-500 line-clamp-4">Açık kaynaklı ve güvenli bir bot, kodlarına göz atabilir ve geliştirmemize yardım edebilirsin.</p>
            </div>
          </div>
          <div className="bg-white/5 rounded-2xl p-5 hover:bg-white/10 transition duration-200">
            <div className="text-white">
              <div className="flex items-center gap-3 mb-2">
                <img src="/img/3945-info.png" width="36" className="rounded-xl" />
                <p className="text-xl font-semibold">Destek</p>
              </div>
              <p className="text-gray-500 line-clamp-4">En iyi ekip arkadaşlarımızla, yardıma ihtiyacı olan herkese en hızlı yanıtı veriyoruz.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="flex flex-row w-full h-auto lg:h-56 my-14 lg:my-40 bg-gradient-to-br lg:px-30 from-neutral-900/90 flex items-center justify-start to-neutral-900/50 rounded-2xl p-1 shadow-md border border-white/10">
        <>
          <div className="lg:mx-4 lg:p-8 py-4 lg:py-16 flex items-center justify-center flex-col text-center w-full lg:w-auto lg:text-left lg:flex-none">
            <img src="/img/aspectlogo.png" width="120" className="lg:hidden rounded-2xl mb-5 shadow-xl shadow-black" />
            <p className="text-3xl text-white font-bold">En İyi Botun <span className="text-amber-400">Tadını Çıkar</span></p>
            <p className="text-md text-gray-500 line-clamp-5 mt-2">Aspect ile en iyi partileri yapmaya hazır mısın? En güncel ve kaliteli müzik deneyimi seni bekliyor.</p>
            <a href="https://discord.com/oauth2/authorize?client_id=1254412049883332659&permissions=8&integration_type=0&scope=bot+applications.commands" className="mt-6 inline-flex items-center px-6 py-3 rounded-2xl font-semibold bg-gradient-to-r from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white shadow-lg shadow-amber-600/30">
              <i className="fab fa-discord mr-2" /> Hemen Ekle
            </a>
          </div>
          <img src="/img/aspectlogo.png" className="hidden lg:block rounded-2xl perspective-right shadow-xl shadow-black ml-auto mr-8" width="180" />
        </>
      </div>
    </>
  )
}
