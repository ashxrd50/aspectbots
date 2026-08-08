import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";

export default function Commands() {
  const commands = [
    { cmd: "/yardım", desc: "Tüm komutları listeler" },
    { cmd: "/davet", desc: "Botu sunucuna davet et" },
    { cmd: "/sözler", desc: "Çalan şarkının sözlerini gösterir" },
    { cmd: "/ping", desc: "Bot gecikmesini gösterir" },
    { cmd: "/istatistik", desc: "Bot istatistiklerini gösterir" },
    { cmd: "/setdj", desc: "DJ rolünü ayarlar" },
    { cmd: "/çal", desc: "Müzik çalmaya başlar" },
    { cmd: "/ara", desc: "Şarkı arar" },
    { cmd: "/durdur", desc: "Müziği durdurur ve kanaldan ayrılır" },
    { cmd: "/atla", desc: "Sonraki şarkıya geçer" },
    { cmd: "/geri", desc: "Önceki şarkıya döner" },
    { cmd: "/temizle", desc: "Kuyruğu temizler" },
    { cmd: "/süre", desc: "Çalan şarkının süresini gösterir" },
    { cmd: "/kuyruk", desc: "Şarkı kuyruğunu gösterir" },
    { cmd: "/duraklat", desc: "Müziği duraklatır" },
    { cmd: "/devam", desc: "Müziği devam ettirir" },
    { cmd: "/ses", desc: "Ses seviyesini ayarlar" },
    { cmd: "/şuanki", desc: "Şu an çalan şarkıyı gösterir" },
    { cmd: "/kaydet", desc: "Şarkıyı DM ile kaydeder" },
    { cmd: "/döngü", desc: "Döngü modunu ayarlar" },
    { cmd: "/filtre", desc: "Ses filtrelerini ayarlar" },
  ];

  return (
    <>
      <div>
        <div className="flex w-full justify-center mb-6">
          <img width="120" src="/img/aspectlogo.png" className="rounded-3xl shadow-2xl shadow-amber-600/40 ring-4 ring-amber-500/30" />
        </div>
        <p className="text-3xl font-extrabold text-white text-center mb-1">
          <i className="fal fa-terminal text-amber-400 mr-2" />
          Bot Komutları
        </p>
        <p className="text-white/50 text-sm text-center mb-8">
          Aspect Bot'un tüm komutlarını aşağıdan inceleyebilirsin.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">
          {commands.map((item, i) => (
            <div key={i} className="flex items-center gap-3 bg-white/5 hover:bg-white/10 transition duration-200 rounded-2xl px-5 py-4 border border-white/10">
              <div className="w-8 h-8 rounded-xl bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                <i className="fa fa-terminal text-amber-400 text-xs" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">{item.cmd}</p>
                <p className="text-white/40 text-xs">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="animateHeader mt-6 flex flex-wrap items-center justify-center gap-4">
          <Link href={"https://discord.com/oauth2/authorize?client_id=1254412049883332659&permissions=8&integration_type=0&scope=bot+applications.commands"}>
            <a className="flex items-center px-6 justify-center gap-x-2 shadow-lg shadow-amber-600/20 rounded-2xl py-4 font-semibold bg-gradient-to-bl from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white">
              <i className="fab fa-discord mr-1" /> Aspect'i Ekle
            </a>
          </Link>
          <Link href={"https://discord.gg/nfW4s343z6"}>
            <a className="px-6 flex items-center justify-center gap-x-2 shadow-lg shadow-amber-600/20 rounded-2xl py-4 font-semibold border border-amber-500/40 hover:bg-amber-500/10 transition duration-200 text-white">
              <i className="fab fa-discord mr-1" /> Destek Sunucusu
            </a>
          </Link>
          <Link href={"https://top.gg/bot/1254412049883332659/vote"}>
            <a className="px-6 flex items-center justify-center gap-x-2 shadow-lg shadow-amber-600/20 rounded-2xl py-4 font-semibold border border-amber-500/40 hover:bg-amber-500/10 transition duration-200 text-white">
              <i className="fa fa-star mr-1" /> Oy Ver
            </a>
          </Link>
        </div>
      </div>
      <div className="py-20"></div>
    </>
  );
}
