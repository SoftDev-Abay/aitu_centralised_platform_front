"use client";

import React, { useEffect, useState } from "react";
import Wrapper from "@/app/pages/Wrappers/RootWrapper/Wrapper";
import DynamicSurveyForm, {
  Survey,
} from "@/app/pages/Survey/DynamicSurveyForm";
import { useRouter } from "next/router";
import { useAxios } from "@/app/context/AxiosContext";

// const surveyAnswers = {
//   surveyTitle: "Form of the year",
//   surveyDescription: "a huge descrioption of the normal form",
//   responses: {
//     "f413d98e-942d-4567-aa5f-8f7d0abf16d3": "",
//     "8e14ed4f-a286-4e1f-ad59-b7d569f0eda6": "Option 3",
//     "a9125137-8798-4f01-adbf-58fe02bbe9e2": [
//       "Option 1",
//       "Option 2",
//       "Option 3",
//     ],
//     "54083438-84c3-4669-ad99-7cab341793ff": 8,
//     "f519b27e-b0ce-42ab-935d-3aec29edbdbd": ["Option 2", "Option 1"],
//     "f51d498b-f894-49aa-9dd8-ba1df61790aa": "Option 2",
//     "16e78e16-5bc7-445c-a36a-b979c5143dc5": "Option 1",
//     "7b0e859a-ef9c-4b5f-8f36-9b389b584a0a": "Abay",
//   },
// };

const Page = () => {
  const axios = useAxios();
  const router = useRouter();
  const { slug: surveyId } = router.query;
  const [surveyData, setSurveyData] = useState<Survey | null>(null);

  const fetchData = async () => {
    try {
      const res = await axios.get(`/applications/form/${surveyId}`);

      const { templateContent, ...rest } = res.data;
      // Parse the template content (if not already parsed).
      const parsedTemplate =
        typeof templateContent === "string"
          ? JSON.parse(templateContent)
          : templateContent;
      // Create a survey object that matches the expected Survey type.
      const fullSurvey: Survey = {
        title: parsedTemplate.title,
        description: parsedTemplate.description,
        questions: parsedTemplate.questions,
      };
      setSurveyData(fullSurvey);
    } catch (error) {
      console.error("Error fetching survey data", error);
    }
  };

  useEffect(() => {
    if (surveyId) {
      fetchData();
    }
  }, [surveyId]);

  return (
    <Wrapper>
      {surveyData ? (
        <DynamicSurveyForm
          survey={surveyData}
          // initialResponses={surveyAnswers.responses}
        />
      ) : (
        <div>Loading survey...</div>
      )}
    </Wrapper>
  );
};

export default Page;
