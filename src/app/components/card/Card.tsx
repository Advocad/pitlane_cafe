import Image from "next/image";

export const Card = () => {
  return (
    <div className="max-w-[400px]">
      <Image src={"/images/lunch-1.png"} width={400} height={260} alt="lunch" />
      <div className="mb-[12px] mt-[16px] flex items-center justify-between">
        <div className="flex-1 text-[20px] font-bold text-[#333]">
          Комплексный обед №1
        </div>
        <div className="mr-[16px] text-[14px] font-semibold text-[#BFBFBF]">
          350г
        </div>
        <div className="text-[20px] font-bold text-[#ECA139]">299₽</div>
      </div>
      <div className="mb-[12px] text-[16px] font-medium text-[#BFBFBF]">
        Борщ, Жаркое с курой, Салат морковь с чесноком
      </div>
      <div className="cursor-pointer text-[16px] font-medium font-semibold text-[#ECA139] ">
        В корзину
      </div>
    </div>
  );
};
