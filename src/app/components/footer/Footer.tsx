import { Logo } from "../logo";

export const Footer = () => {
  return (
    <footer className="flex justify-between pb-[50px] pt-[36px]" id="footer">
      <Logo />
      <div>
        <div>Свяжитесь с нами для заказа</div>
        <input placeholder="Имя" className="block" />
        <input placeholder="Имя" className="block" />
        <button className="rounded-[15px] bg-orange px-[100px] py-[14px] text-[18px] font-semibold text-[#fff] shadow-button-call">
          Заказать звонок
        </button>
      </div>
      <div className="w-[450px]">
        <div>Контакты</div>
        <div>+7 (911) 846-46-29</div>
        <div>
          Кафе PitLane, Россия, Санкт-Петербург, пр. Большевиков д. 60 к.{" "}
        </div>
        <div>pitLane-cafe@yandex.ru</div>
      </div>
    </footer>
  );
};
