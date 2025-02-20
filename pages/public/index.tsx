import Wrapper from "@/app/pages/Wrappers/PublicWrapper/Wrapper";
import PostCard from "@/app/pages/Feed/PostCard";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import UpcomingEvent from "@/app/pages/Feed/UpcomingEvent";
const PostCardFull = () => {
  <div className="bg-white rounded-xl p-4 border-2 border-gray-100">
    <p className="text-heading3-bold mb-3">
      Startup Garage: открыт прием заявок – преврати идею в tech-стартап
    </p>
    <p>
      Astana Hub сообщает о приеме заявок на четвертый поток инкубационной
      программы Startup Garage, направленной на поддержку начинающих
    </p>
    <img
      src="https://astanahub.com/media/5305308818982431722-e97d99e1928e-thumbnail-1500.png"
      className="rounded-md w-full object-fill max-w-[264px] max-h-[120px]"
      alt=""
    />

    <p>Заявки принимаются до 1 марта 2025 года по ссылке.</p>

    <p>
      Для участия требуется сертификат об окончании образовательного курса
      Startup Academy, ИИН и ключ ЭЦП. Отбор кандидатов пройдет в два этапа:
      скрининг – проверка соответствия проекта критериям; диагностика –
      экспертная оценка проекта на основе интервью.
    </p>

    <p>
      В рамках программы стартапы не только осваивают теорию, но и применяют
      знания на практике. Еженедельно проходят воркшопы и лекции, где инвесторы
      и основатели IT-компаний делятся инсайтами о рынке. Трекеры помогают
      участникам тестировать гипотезы, внедрять стратегические решения и
      масштабировать проекты. Регулярные трекшн-встречи, борд-митинги и
      мастермайнд-сессии дают возможность анализировать прогресс, обмениваться
      опытом и находить перспективных партнеров.
    </p>

    <p>
      В течение трех месяцев участники изучат ключевые аспекты создания и
      развития технологического бизнеса. Получат практические навыки по
      валидации идей, изучат методологии Lean Startup, HADI и SMART, освоят
      принципы анализа рынка, NoCode-разработки, эффективной презентации
      продукта, разберутся в основах регистрации бизнеса, финансового
      планирования и работы с инвесторами. По завершении программы они будут
      обладать полным пониманием основ ведения tech-стартапа, а также готовым
      продуктом или прототипом и стратегией продаж. Также лучшие проекты
      получают PR-поддержку.
    </p>

    <p>
      За предыдущие потоки 2023–2024 годов в Startup Garage было отобрано 493
      стартапа, из которых 182 успешно завершили обучение. Совокупный объем
      продаж выпускников достиг 366 млн тенге.
    </p>

    <p>
      Чтобы получить дополнительную информацию о программе и подать заявку на
      участие, перейдите по ссылке.
    </p>

    <div className="flex justify-between mb-5">
      <div className="flex gap-5">
        <div className="flex gap-1">
          <Image
            src="/assets/reply.svg"
            className="rounded-full"
            height={24}
            width={24}
            alt=""
          />
          <span>0</span>
        </div>
        <div className="flex gap-1">
          <Image
            src="/assets/reply.svg"
            className="rounded-full"
            height={24}
            width={24}
            alt=""
          />
          <span>0</span>
        </div>
      </div>
      <div className="flex gap-5">
        <div className="flex gap-1">
          <Image
            src="/assets/reply.svg"
            className="rounded-full"
            height={24}
            width={24}
            alt=""
          />
          <span>0</span>
        </div>
        <div className="flex gap-1">
          <Image
            src="/assets/reply.svg"
            className="rounded-full"
            height={24}
            width={24}
            alt=""
          />
          <span>0</span>
        </div>
      </div>
    </div>
    <div className="flex gap-3 items-center">
      <img
        src="https://astanahub.com/media/5305308818982431722-e97d99e1928e-thumbnail-1500.png"
        className="rounded-full h-[28px] w-[28px]"
        alt=""
      />
      <Link className="text-black font-medium" href={""}>
        Astana Hub
      </Link>
      <span className="text-gray-600 ">Feb. 19, 2025 10:04</span>
    </div>
  </div>;
};

const Page = () => {
  return (
    <Wrapper>
      <div className="flex flex-col gap-10 mb-8 ">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>

      <div>
        <div className="flex justify-between mb-2">
          <p>Upcoming events</p>
          <div className="flex gap-2 items-center">
            <span>See all</span>
            <Image
              src="/assets/reply.svg"
              className="rounded-full"
              height={24}
              width={24}
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <UpcomingEvent />
          <UpcomingEvent />
        </div>
      </div>
    </Wrapper>
  );
};

export default Page;
