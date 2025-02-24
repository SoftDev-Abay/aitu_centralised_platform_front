import Wrapper from "@/app/pages/Wrappers/RootWrapper/Wrapper";
import PostCard from "@/app/pages/Post/PostCard";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import UpcomingEvent from "@/app/pages/Post/UpcomingEvent";
import Card from "@/app/components/Card/Card";
import InfoCard from "@/app/components/InfoCard";
import Button from "@/app/components/Button/Button";

const infoData = {
  eventInfo: [
    { key: "Area", value: "Big Data and Analytics" },
    { key: "Region", value: "Almaty" },
  ],
  locationInfo: [
    { key: "Format", value: "Online" },
    { key: "Address", value: "ул.Розыбакиева, 227, университет AlmaU" },
    { key: "Start date", value: "Feb. 22, 2025, 1 p.m." },
    { key: "End date", value: "Feb. 22, 2025, 6 p.m." },
  ],
};
const Page = () => {
  return (
    <Wrapper>
      <h2 className="text-heading2-bold mb-6">Data Community Birthday 2025</h2>
      <div className="flex justify-center mb-4">
        <img
          src="https://astanahub.com/media/%D0%91%D0%B0%D0%BD%D0%BD%D0%B5%D1%80_Data_Community-99f7e4c17f31-thumbnail-800.png"
          alt=""
        />
      </div>

      <Card className="mb-3 content">
        <h3>
          Ярмарка IT-вакансий, инсайты от лидеров области и полезные знакомства
        </h3>
        <p>
          22 февраля Data Community Kazakhstan празднует свой шестой юбилей,
          объединив специалистов в сфере data-аналитики на масштабном
          мероприятии.
        </p>
        <p>
          На этот раз в программе: карьерные возможности, живое общение с
          лидерами индустрии и глубокие инсайты от экспертов.
        </p>

        <h4>Крупнейшая ярмарка IT-вакансий</h4>
        <p>
          В центре внимания — крупнейшая ярмарка вакансий для data-аналитиков с
          участием международных компаний.
        </p>
        <p>
          Среди участников: Kolesa Group, Beeline, inDrive, Halyk Bank, LG,
          Technodom, DataArt, Philip Morris и другие.
        </p>

        <h4>Выступления спикеров, интерактивные сессии и нетворкинг</h4>
        <p>Слушайте выступления аналитиков данных ведущих IT-компаний:</p>
        <ul>
          <li>
            Светлана Мельникова (Centras) — о трансформации бизнес-решений с
            помощью данных.
          </li>
          <li>
            Малика Кунсеитова (Kolesa Group) — о Discovery-процессе в аналитике.
          </li>
          <li>
            Дина Жунусова (Bereke Bank) — о принятии решений в банках на основе
            анализа данных.
          </li>
        </ul>

        <h4>Интерактивные сессии:</h4>
        <ul>
          <li>
            Панельная дискуссия: обсуждение актуальных трендов и вызовов в
            data-сфере.
          </li>
          <li>Fuckup Night: реальные истории неудач и извлеченные уроки.</li>
        </ul>

        <p>
          Мероприятие объединит более 200 специалистов в области данных,
          аналитики и ИИ.
        </p>
        <p>День завершится розыгрышем призов.</p>

        <h4>Когда и где?</h4>
        <ul>
          <li>
            <strong>Дата:</strong> 22 февраля, 13:00 – 18:00
          </li>
          <li>
            <strong>Место:</strong> AlmaU, Алматы
          </li>
        </ul>

        <p>
          Подробнее и регистрация:{" "}
          <a href="https://rekhert.com/data6" target="_blank">
            https://rekhert.com/data6
          </a>
        </p>
        <p>Откройте новые возможности с Data Community Kazakhstan!</p>
      </Card>

      <InfoCard className="mb-3" data={infoData.eventInfo} />
      <InfoCard className="mb-3" data={infoData.locationInfo} />

      <Button>Participate</Button>
    </Wrapper>
  );
};

export default Page;
