import { Footer, Header } from "../components";

export default function About() {
  return (
    <main className="container mx-auto mt-7 font-nunito">
      <Header />
      <div className="my-[130px] flex flex-col gap-[70px]">
        <div className="text-[44px] font-extrabold">О нас</div>
        <div className="flex flex-col gap-[50px] text-[#333]">
          <div className="flex flex-col gap-[32px]">
            <div className="text-[32px] font-semibold">Как мы работаем</div>
            <ul className="ml-[20px] flex max-w-[813px] list-outside list-disc flex-col gap-[16px] box-decoration-slice text-[20px]">
              <li>
                Быстрая доставка бизнес-ланчей в офис и на производства в
                Невском, Красногвардейском и в Калининском районах
              </li>
              <li>
                Доставка обедов в офисы и на объекты. Комплексные обеды, русская
                кухня, демократичные цены. Стоимость обеда от 300 руб с
                доставкой.
              </li>
              <li>
                В стоимость обеда входит: салат 100 гр , первое блюдо 300 гр ,
                гарнир 170 гр, горячее 100-120 гр, хлеб, приборы, салфетки.
              </li>
              <li>От 10 обедов - скидка 10%.</li>
              <li>
                Для заказа свяжитесь с нами по телефону +7-911-846-46-29 или
                через форму обратной связи.
              </li>
              <li>Собственное производство и кафе.</li>
              <li>Спасибо что выбираете нас!</li>
            </ul>
          </div>
          <div className="flex flex-col gap-[32px]">
            <div className="text-[32px] font-semibold">
              Банкеты и корпоративы
            </div>
            <ul className="ml-[20px] flex max-w-[813px] list-outside list-disc flex-col gap-[16px] box-decoration-slice text-[20px]">
              <li>
                В нашем кафе вы можете отметить Новый год, 8 марта, День
                Рождения Вашей Компании и не только!
              </li>
              <li>Праздничные столы всегда радуют наших клиентов!</li>
              <li>
                Уютный маленький зал свободно разместит до 20 человек без
                посторонних компаний и вы сможете наслаждаться любимой музыкой,
                танцами, конкурсами и, конечно, вкусной едой!
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
