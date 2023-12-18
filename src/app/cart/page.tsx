import { Footer, Header, Table } from "../components";

const cart = [
  {
    image: <div>123</div>,
    name: "Комплексный обед №1",
    prise: 290,
    quantity: 2,
    total: 400,
  },
];

export default function Cart() {
  return (
    <main className="container mx-auto mt-7 font-nunito">
      <Header />
      <div className="my-[130px] flex flex-col gap-[70px]">
        <div className="text-[44px] font-extrabold">Корзина</div>
        <div>
          <Table rows={cart} />
        </div>
        <div className="flex max-w-[450px] flex-col gap-[16px]">
          <div className="text-[20px] font-bold">
            Сумма заказа: <span className="text-[#ECA139]">7320₽</span>
          </div>
          <div className="text-[#BFBFBF]">
            Заполните форму и мы вам перезвоним для уточнения заказа
          </div>
          <form className="flex max-w-[450px] flex-col gap-[16px]">
            <input placeholder="Имя" className="block" />
            <input placeholder="Имя" className="block" />
            <button className="rounded-[15px] bg-orange px-[100px] py-[14px] text-[18px] font-semibold text-[#fff] shadow-button-call">
              Оформить заказ
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </main>
  );
}
