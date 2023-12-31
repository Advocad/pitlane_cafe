export const SaleBlock = () => {
  return (
    <div className=" py-[65px] text-[#fff]">
      <div className="saleBlock relative  rounded-[15px] py-[67px] pl-[104px]">
        <div className="mb-[16px] text-[44px] font-extrabold">Скидка 10%</div>
        <ul className="mb-[16px] ml-[24px] max-w-[422px] list-disc text-[20px] font-medium">
          <li className="mb-[16px]">На первый заказ</li>
          <li>При заключении договора на постоянное питание от 10 человек </li>
        </ul>
        <button className="rounded-[15px] bg-[#fff] px-[100px] py-[14px] text-[18px] font-semibold text-[#000] shadow-button-call">
          Заказать звонок
        </button>
      </div>
    </div>
  );
};
