import Image from "next/image";

export const Card = () => {
  return (
    <div className="max-w-[400px]">
      <Image src={"/images/lunch-1.png"} width={400} height={260} alt="lunch" />
      <div className="mb-[12px] mt-[16px] flex items-center justify-between">
        <div className="flex-1 text-[20px] font-bold">Комплексный обед №1</div>
        <div className="mr-[16px] text-[14px] font-semibold">350г</div>
        <div className="text-[20px] font-bold">299₽</div>
      </div>
      <div className="mb-[12px] text-[16px] font-medium">
        Борщ, Жаркое с курой, Салат морковь с чесноком
      </div>
      <div className="text-[16px] font-semibold">В корзину</div>
    </div>
  );
};
