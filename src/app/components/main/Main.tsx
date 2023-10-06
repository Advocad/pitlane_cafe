import Image from "next/image";
export const Main = () => {
  return (
    <>
      <div className="mt-[94px] flex items-center justify-between">
        <div className="basis-[580px]">
          <h1 className="mb-[18px] text-[44px] font-extrabold">
            Доставка <span>бизнес-ланчей</span> <br />в офис и на производство
          </h1>
          <h2 className="mb-8 text-[20px] font-medium">
            Комплексные обеды, русская кухня, демократичные цены в Невском,
            Красногвардейском и в Калининском районах
          </h2>
          <button className="shadow-button-call bg-orange rounded-[15px] px-[100px] py-[14px] text-[18px] font-semibold text-[#fff]">
            Заказать звонок
          </button>
        </div>
        <div className="relative flex basis-2/5 items-center">
          <div className="main-dish-ellipse">
            <Image
              src="/images/main-dish.png"
              width={427}
              height={417}
              alt="Блюдо"
            />
          </div>
          <div className="ml-6">
            <Image
              src="/images/main-small-dish-1.png"
              width={67}
              height={67}
              alt="Блюдо"
              className="main-small-dish-one "
            />
            <Image
              src="/images/main-small-dish-2.png"
              width={67}
              height={67}
              alt="Блюдо"
              className="main-small-dish-two"
            />
            <Image
              src="/images/main-small-dish-3.png"
              width={67}
              height={67}
              alt="Блюдо"
              className="main-small-dish-three"
            />
          </div>
        </div>
      </div>
      <div className="mb-[88px] inline-flex items-start gap-[40px] text-[20px] font-bold">
        <div className="flex items-center gap-[10px]">
          <Image
            src="/icons/delivery.svg"
            width={54}
            height={54}
            alt="delivery"
          />
          Бесплатная <br /> доставка от 600Р
        </div>
        <div className="flex items-center gap-[10px]">
          <Image
            src="/icons/experience.svg"
            width={54}
            height={54}
            alt="experience"
          />
          17 лет вкусно <br /> кормим
        </div>
        <div className="flex items-center gap-[10px]">
          <Image
            src="/icons/production.svg"
            width={54}
            height={54}
            alt="production"
          />
          Собственное <br /> производство
        </div>
        <div className="flex items-center gap-[10px]">
          <Image src="/icons/price.svg" width={54} height={54} alt="price" />
          Демократичные <br /> цены
        </div>
      </div>
    </>
  );
};
