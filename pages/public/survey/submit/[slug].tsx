import Wrapper from "@/app/pages/Wrappers/RootWrapper/Wrapper";

import DynamicSurveyForm from "@/app/pages/Survey/DynamicSurveyForm";

import React from "react";
import { Survey } from "@/app/pages/Survey/DynamicSurveyForm";

const surveyData: Survey = {
  title: "Form of the year",
  description: "a huge descrioption of the normal form",
  questions: [
    {
      id: "7b0e859a-ef9c-4b5f-8f36-9b389b584a0a",
      text: "Name",
      type: "text",
      answers: ["Option 1"],
      starRating: 5,
    },
    {
      id: "f51d498b-f894-49aa-9dd8-ba1df61790aa",
      text: "Gender",
      type: "multipulechoice",
      answers: ["Option 1", "Option 2", "Option 3"],
      starRating: 5,
    },
    {
      id: "16e78e16-5bc7-445c-a36a-b979c5143dc5",
      text: "Coutry",
      type: "multipulechoice",
      answers: ["Option 1", "Option 2"],
      starRating: 5,
    },
    {
      id: "f519b27e-b0ce-42ab-935d-3aec29edbdbd",
      text: "Reasons of move",
      type: "checkbox",
      answers: ["Option 1", "Option 2", "Option 3"],
      starRating: 5,
    },
    {
      id: "54083438-84c3-4669-ad99-7cab341793ff",
      text: "How do you rate your coutry",
      type: "stars",
      answers: ["Option 1"],
      starRating: 5,
    },
  ],
};

const surveyAnswers = {
  surveyTitle: "Form of the year",
  surveyDescription: "a huge descrioption of the normal form",
  responses: {
    "f413d98e-942d-4567-aa5f-8f7d0abf16d3": "",
    "8e14ed4f-a286-4e1f-ad59-b7d569f0eda6": "Option 3",
    "a9125137-8798-4f01-adbf-58fe02bbe9e2": [
      "Option 1",
      "Option 2",
      "Option 3",
    ],
    "54083438-84c3-4669-ad99-7cab341793ff": 8,
    "f519b27e-b0ce-42ab-935d-3aec29edbdbd": ["Option 2", "Option 1"],
    "f51d498b-f894-49aa-9dd8-ba1df61790aa": "Option 2",
    "16e78e16-5bc7-445c-a36a-b979c5143dc5": "Option 1",
    "7b0e859a-ef9c-4b5f-8f36-9b389b584a0a": "Abay",
  },
};

const Page = () => {
  return (
    <Wrapper>
      <DynamicSurveyForm
        survey={surveyData}
        initialResponses={surveyAnswers.responses}
      />
    </Wrapper>
  );
};

export default Page;
