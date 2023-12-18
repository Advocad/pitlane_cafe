import * as React from "react";

export default function ContactForm() {
  return (
    <div className="flex justify-end items-center flex-col">
      <div className="self-stretch text-zinc-800 text-xl font-bold w-full">
        Свяжитесь с нами для заказа
      </div>
      <div className="justify-end items-center self-stretch flex grow flex-col mt-6 max-md:max-w-full">
        <input
          className="text-stone-300 text-lg font-semibold self-stretch items-center bg-stone-50 pt-4 pb-4 px-5 rounded-2xl max-md:max-w-full"
          type="text"
          id="name"
          name="name"
          placeholder="Имя"
        />
        <input
          className="text-stone-300 text-lg font-semibold self-stretch items-center bg-stone-50 mt-4 pt-4 pb-4 px-5 rounded-2xl max-md:max-w-full"
          type="tel"
          id="phone"
          name="phone"
          placeholder="+7(xxx) xxx-xx-xx"
        />
        <form
          className="justify-center items-center shadow-[0px_18px_34px_0px_rgba(236,161,57,0.25)] bg-orange-400 self-stretch flex grow flex-col mt-4 px-5 py-4 rounded-2xl max-md:max-w-full"
          action="/submit"
          method="post"
        >
          <button type="submit" className="text-white text-lg font-semibold self-center -mb-px">
            Заказать звонок
          </button>
        </form>
      </div>
    </div>
  );
}