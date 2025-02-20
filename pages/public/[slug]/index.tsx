import Wrapper from "@/app/pages/Wrappers/PublicWrapper/Wrapper";
import PostCard from "@/app/pages/Feed/PostCard";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const PostCardFull = () => {
  return (
    <div className="bg-white rounded-xl px-5 py-7 border-2 border-gray-100">
      <h3 className="text-heading3-bold mb-3">
        Startup Garage: открыт прием заявок – преврати идею в tech-стартап
      </h3>
      <p className="mb-5">
        Astana Hub сообщает о приеме заявок на четвертый поток инкубационной
        программы Startup Garage, направленной на поддержку начинающих
        стартапов. Программа ориентирована на IT-проекты на стадиях идеи (MCI)
        или создания продукта (MVP). Подать заявку могут основатели старше 18
        лет из Казахстана и соседних стран.
      </p>
      <img
        src="https://astanahub.com/media/5305308818982431722-e97d99e1928e-thumbnail-1500.png"
        className="w-full object-fill mb-6"
        alt=""
      />

      <p className="mb-5">Заявки принимаются до 1 марта 2025 года по ссылке.</p>

      <p className="mb-5">
        Для участия требуется сертификат об окончании образовательного курса
        Startup Academy, ИИН и ключ ЭЦП. Отбор кандидатов пройдет в два этапа:
        скрининг – проверка соответствия проекта критериям; диагностика –
        экспертная оценка проекта на основе интервью.
      </p>

      <p className="mb-5">
        В рамках программы стартапы не только осваивают теорию, но и применяют
        знания на практике. Еженедельно проходят воркшопы и лекции, где
        инвесторы и основатели IT-компаний делятся инсайтами о рынке. Трекеры
        помогают участникам тестировать гипотезы, внедрять стратегические
        решения и масштабировать проекты. Регулярные трекшн-встречи,
        борд-митинги и мастермайнд-сессии дают возможность анализировать
        прогресс, обмениваться опытом и находить перспективных партнеров.
      </p>

      <p className="mb-5">
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

      <p className="mb-5">
        За предыдущие потоки 2023–2024 годов в Startup Garage было отобрано 493
        стартапа, из которых 182 успешно завершили обучение. Совокупный объем
        продаж выпускников достиг 366 млн тенге.
      </p>

      <p className="mb-5">
        Чтобы получить дополнительную информацию о программе и подать заявку на
        участие, перейдите по ссылке.
      </p>

      <div className="flex justify-between mb-6 items-center">
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
    </div>
  );
};

const CommentItem = () => {
  return (
    <div className="flex gap-3">
      <img
        src="https://astanahub.com/media/5305308818982431722-e97d99e1928e-thumbnail-1500.png"
        className="rounded-full h-[28px] w-[28px]"
        alt=""
      />
      <div className="mt-1">
        <div className="flex gap-2 mb-2">
          <Link className="text-black font-medium" href={""}>
            Astana Hub
          </Link>
          <span className="text-gray-600 ">Feb. 19, 2025 10:04</span>
        </div>
        <p className="mb-4">Супер</p>
        <div className="flex gap-5">
          <Link className="text-gray-400 font-medium" href={""}>
            Reply
          </Link>
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
      </div>
    </div>
  );
};

const CommentsCard = () => {
  return (
    <div className="bg-white rounded-xl px-6 pt-6 pb-9 border-2 border-gray-100">
      <h3 className="text-heading3-bold mb-5">Comments</h3>

      <div className="flex gap-6 flex-col">
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
      </div>
    </div>
  );
};
const Page = () => {
  return (
    <Wrapper>
      <div className="mb-8">
        <PostCardFull />
      </div>
      <CommentsCard />
    </Wrapper>
  );
};

export default Page;
