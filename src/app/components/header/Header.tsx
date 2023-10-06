import Image from "next/image";
import { Logo } from "../logo";

export const Header = () => {
  return (
    <header className="grid grid-cols-2">
      <div className="flex items-center">
        <Logo />
        <div className="ml-[69px] flex items-center text-sm">
          <Image src="/icons/map.svg" alt={"Map"} width={19} height={10} />
          <span className="ml-1 font-bold">Санкт-Петербург</span>
        </div>
      </div>
      <div className="flex items-center justify-around">
        <nav className="flex gap-[60px] font-bold">
          <a>Главная</a>
          <a>Меню</a>
          <a>О нас</a>
          <a>Контакты</a>
        </nav>
        <div>
          <Image src="/icons/shop.svg" alt={"Shop"} width={23} height={2} />
        </div>
        <div className="font-bold">+7 (911) 846-46-29</div>
      </div>
    </header>
  );
};
