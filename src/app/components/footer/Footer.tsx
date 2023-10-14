import ContactForm from "../contactForm/contactForm"
import { Logo } from "../logo"

export const Footer = () => {
    return (
        <footer className="flex justify-between pb-[50px] pt-[36px]">
        <Logo />
        <div>
          <ContactForm />
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
    )
}