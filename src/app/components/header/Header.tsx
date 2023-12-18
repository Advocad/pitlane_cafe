import Image from "next/image";
import Link from "next/link";
import { Logo } from "../logo";

export const Header = () => {
  return (
    <header className="flex justify-between">
      <div className="flex items-center">
        <Logo />
        <div className="ml-[69px] flex items-center text-sm">
          <Image src="/icons/map.svg" alt={"Map"} width={19} height={10} />
          <span className="ml-1 font-bold text-[#BFBFBF]">Санкт-Петербург</span>
        </div>
      </div>
      <div className="flex items-center justify-between gap-[75px]">
        <nav className="flex gap-[60px] font-bold">
          <Link href="/">Главная</Link>
          <Link href="/menu">Меню</Link>
          <Link href="/about">О нас</Link>
          <Link href="#footer" scroll={false}>
            Контакты
          </Link>
        </nav>
        <div>
          <Image src="/icons/shop.svg" alt={"Shop"} width={23} height={2} />
        </div>
        <div className="font-bold">+7 (911) 846-46-29</div>
      </div>
    </header>
  );
};
