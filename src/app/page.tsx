import Image from "next/image";
import { Card, Header, Logo, Main, SaleBlock } from "./components";
import Link from "next/link";

export default function Home() {
  return (
    <main className="font-nunito main-bg container mx-auto mt-7">
      <Main />
      <div className="py-[65px]">
        <div className="mb-[70px] text-[32px] font-semibold">Что на обед?</div>
        <div className="flex gap-[16px]">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div className="py-[65px]">
        <div className="mb-[70px] text-[32px] font-semibold">Хиты</div>
        <div className="flex gap-[16px]">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <SaleBlock />
      <div className="py-[65px]">
        <div className="mb-[70px] text-[32px] font-semibold">
          Как мы работаем
        </div>
        <div className="grid grid-cols-[auto_auto_auto] grid-rows-2 justify-between gap-[31px]">
          <div className="max-w-[296px] text-center">
            <div className="stages arrow-right min-h-[84px]  rounded-[15px] border-2 border-[#ECA139] px-[69px] py-[15px] text-[20px] font-semibold">
              Сделать заказ <br /> на сайте
            </div>
            <div>
              Нажмите на кнопку «Заказать звонок» или добавьте в корзину и
              введите данные
            </div>
          </div>
          <div className=" stages arrow-right max-w-[296px] text-center">
            <div className="min-h-[84px] rounded-[15px] border-2 border-[#ECA139] px-[69px] py-[15px] text-[20px] font-semibold">
              Звонок <br /> от оператора
            </div>
            <div>
              Нажмите на кнопку «Заказать звонок» или добавьте в корзину и
              введите данные
            </div>
          </div>
          <div className="max-w-[296px] text-center">
            <div className="min-h-[84px] rounded-[15px] border-2 border-[#ECA139] px-[69px] py-[15px] text-[20px] font-semibold">
              Готовим
            </div>
            <div>
              Нажмите на кнопку «Заказать звонок» или добавьте в корзину и
              введите данные
            </div>
          </div>
          <div>
            <Image
              src={"/images/imgs-food.png"}
              width={300}
              height={141}
              alt="food"
            />
          </div>
          <div className="max-w-[296px] text-center">
            <div className="min-h-[84px] rounded-[15px] border-2 border-[#ECA139] px-[69px] py-[15px] text-[20px] font-semibold">
              Доставка
            </div>
            <div>
              Нажмите на кнопку «Заказать звонок» или добавьте в корзину и
              введите данные
            </div>
          </div>
        </div>
        <div className="mt-[32px] flex items-center justify-between">
          <div className="max-w-[764px] rounded-[15px] bg-[#F9F9F9] px-[50px] py-[28px]">
            <div className="mb-[16px] flex gap-[12px]">
              <Image
                src="/icons/attention.svg"
                width={25}
                height={25}
                alt="attention"
              />
              <span className="text-[20px]">Важная информация:</span>
            </div>
            <div className="text-[#BFBFBF]">
              Просим Вас оформлять заказ до 10 часов. Это поможет нам рассчитать
              необходимое количество обедов. Доставка осуществляется от 5
              комплексных обедов на адрес. Вы можете сделать заказ на следующий
              рабочий день, на всю предстоящую рабочую неделю или же на целый
              месяц
              <br /> Спасибо за понимание!
            </div>
          </div>
          <div>
            <Image
              src="/images/decor-food-2.png"
              width={344}
              height={151}
              alt="decor-food"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#F9F9F9] py-[130px]">
        <div className="mb-[70px] text-[32px] font-semibold">Наши услуги</div>
        <div className="flex flex-wrap gap-[16px]">
          <div className="max-w-[608px] rounded-[15px] bg-[#fff] px-[40px] py-[40px]">
            <Image
              src="/icons/service-1.svg"
              width={70}
              height={70}
              alt="service-1"
            />
            <div>Комплексное меню</div>
            <div>
              Вы можете больше не тратить время на приготовление обедов — мы это
              сделаем за вас! Наши опытные повара приготовят комплексный обед из
              свежих продуктов и доставят в указанное время по выгодной цене
            </div>
            <div>Перейти в раздел</div>
          </div>
          <div className="max-w-[608px] rounded-[15px] bg-[#fff] px-[40px] py-[40px]">
            <Image
              src="/icons/service-1.svg"
              width={70}
              height={70}
              alt="service-1"
            />
            <div>Комплексное меню</div>
            <div>
              Вы можете больше не тратить время на приготовление обедов — мы это
              сделаем за вас! Наши опытные повара приготовят комплексный обед из
              свежих продуктов и доставят в указанное время по выгодной цене
            </div>
            <div>Перейти в раздел</div>
          </div>
          <div className="max-w-[608px] rounded-[15px] bg-[#fff] px-[40px] py-[40px]">
            <Image
              src="/icons/service-1.svg"
              width={70}
              height={70}
              alt="service-1"
            />
            <div>Комплексное меню</div>
            <div>
              Вы можете больше не тратить время на приготовление обедов — мы это
              сделаем за вас! Наши опытные повара приготовят комплексный обед из
              свежих продуктов и доставят в указанное время по выгодной цене
            </div>
            <div>Перейти в раздел</div>
          </div>
        </div>
      </div>
      <div className="py-[130px]">
        <div className="mb-[70px] text-[32px] font-semibold">
          Наши постоянные клиенты
        </div>
        <div className="flex items-center justify-between gap-[70px]">
          <Image
            src="/images/hoffmann-group.png"
            width={247}
            height={36}
            alt="hoffmann"
          />
          <Image src="/images/gotak.png" width={140} height={59} alt="gotak" />
          <Image
            src="/images/medikum.png"
            width={200}
            height={51}
            alt="medikum"
          />
          <Image
            src="/images/total-terminal.png"
            width={199}
            height={45}
            alt="hoffmann"
          />
          <Image
            src="/images/jonas.png"
            width={166}
            height={117}
            alt="hoffmann"
          />
        </div>
      </div>
      
    </main>
  );
}
