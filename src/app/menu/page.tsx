import { Card, Footer, Header } from "../components";

export default function Menu() {
  return (
    <main className="container mx-auto mt-7 font-nunito">
      <Header />
      <div className="mt-[130px] flex flex-row gap-[104px]">
        <div className="flex basis-80 flex-col gap-[45px]">
          <div className="text-[44px] font-extrabold">Меню</div>
          <ul className="flex flex-col gap-[15px] text-[18px]">
            <li className="cursor-pointer rounded-[15px] bg-[#F9F9F9] px-[24px] py-[14px] hover:text-[#F0BD75]">
              Комплексные обеды
            </li>
            <li className="cursor-pointer rounded-[15px] bg-[#F9F9F9] px-[24px] py-[14px] hover:text-[#F0BD75]">
              Салаты
            </li>
            <li className="cursor-pointer rounded-[15px] bg-[#F9F9F9] px-[24px] py-[14px] hover:text-[#F0BD75]">
              Первые блюда
            </li>
            <li className="cursor-pointer rounded-[15px] bg-[#F9F9F9] px-[24px] py-[14px] hover:text-[#F0BD75]">
              Вторые блюда
            </li>
            <li className="cursor-pointer rounded-[15px] bg-[#F9F9F9] px-[24px] py-[14px] hover:text-[#F0BD75]">
              Гарниры
            </li>
            <li className="cursor-pointer rounded-[15px] bg-[#F9F9F9] px-[24px] py-[14px] hover:text-[#F0BD75]">
              Напитки
            </li>
          </ul>
        </div>
        <div className="flex flex-1 flex-col gap-[70px]">
          <div className="flex flex-col gap-[50px]">
            <div className="text-[32px]">Комплексные обеды</div>
            <div className="flex flex-wrap gap-x-[16px] gap-y-[24px]">
              <Card />
              <Card />
              <Card />
            </div>
          </div>
          <div className="flex  flex-col gap-[50px]">
            <div className="text-[32px]">Комплексные обеды</div>
            <div className="flex flex-wrap gap-x-[16px] gap-y-[24px]">
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
