import React, { useState } from "react";
import axios from "axios";
import Input from "@/app/components/Input/Input";
import RadioGroupInput, { Option as RadioOption } from "../RadioGroupInput";
import CheckboxGroupInput, {
  Option as CheckboxOption,
} from "../CheckboxGroupInput";
import RatingStars from "../RatingStars";
import { Question } from "../../../store/surveryConstructerStore";
import Card from "@/app/components/Card/Card";

export type Survey = {
  title: string;
  description: string;
  questions: Question[];
};

type DynamicSurveyFormProps = {
  survey: Survey;
  /** Optional prefilled responses keyed by question id */
  initialResponses?: Record<string, any>;
};

const DynamicSurveyForm: React.FC<DynamicSurveyFormProps> = ({
  survey,
  initialResponses = {},
}) => {
  // Local state to store user responses, keyed by question id.
  const [responses, setResponses] =
    useState<Record<string, any>>(initialResponses);

  const handleResponseChange = (questionId: string, value: any) => {
    setResponses((prev) => ({ ...prev, [questionId]: value }));
  };

  // For checkbox questions: add or remove options from an array.
  const handleCheckboxChange = (
    questionId: string,
    option: string,
    checked: boolean
  ) => {
    const current = responses[questionId] || [];
    if (checked) {
      setResponses((prev) => ({ ...prev, [questionId]: [...current, option] }));
    } else {
      setResponses((prev) => ({
        ...prev,
        [questionId]: current.filter((v: string) => v !== option),
      }));
    }
  };

  // Renders a question based on its type.
  const renderQuestion = (question: Question) => {
    switch (question.type) {
      case "text":
        return (
          <Card key={question.id} className="mb-4">
            <label className="block font-bold mb-2">{question.text}</label>
            <Input
              placeholder="Your answer"
              value={responses[question.id] || ""}
              onChange={(e) =>
                handleResponseChange(question.id, e.target.value)
              }
            />
          </Card>
        );
      case "multipulechoice":
        const radioOptions: RadioOption[] = question.answers
          ? question.answers.map((opt) => ({ label: opt, value: opt }))
          : [];
        return (
          <Card key={question.id} className="mb-4">
            <RadioGroupInput
              title={question.text}
              name={question.id}
              options={radioOptions}
              value={responses[question.id] || ""}
              onChange={(val) => handleResponseChange(question.id, val)}
            />
          </Card>
        );
      case "checkbox":
        const checkboxOptions: CheckboxOption[] = question.answers
          ? question.answers.map((opt) => ({ label: opt, value: opt }))
          : [];
        return (
          <Card key={question.id} className="mb-4">
            <CheckboxGroupInput
              title={question.text}
              name={question.id}
              options={checkboxOptions}
              value={responses[question.id] || []}
              onChange={(vals) => handleResponseChange(question.id, vals)}
            />
          </Card>
        );
      case "stars":
        // Use the question's default starRating if no response exists.
        const currentRating =
          responses[question.id] !== undefined
            ? responses[question.id]
            : question.starRating || 0;
        return (
          <Card key={question.id} className="mb-4">
            <label className="block font-bold mb-2">{question.text}</label>
            <RatingStars
              value={currentRating}
              onChange={(val) => handleResponseChange(question.id, val)}
              max={10}
              size={22}
            />
          </Card>
        );
      default:
        return (
          <Card key={question.id} className="mb-4">
            <label className="block font-bold mb-2">{question.text}</label>
            <Input
              placeholder="Your answer"
              value={responses[question.id] || ""}
              onChange={(e) =>
                handleResponseChange(question.id, e.target.value)
              }
            />
          </Card>
        );
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      surveyTitle: survey.title,
      surveyDescription: survey.description,
      responses: responses,
    };

    try {
      console.log({ payload });
      // Replace "/api/submit-survey" with your actual backend endpoint.
      await axios.post("/api/submit-survey", payload);
      alert("Survey submitted successfully!");
    } catch (error) {
      console.error(error);
      alert("Error submitting survey.");
    }
  };

  return (
    <div className="p-4">
      <div className="max-w-2xl mx-auto">
        {/* Survey Header */}
        <Card className="mb-4">
          <h1 className="text-heading2-bold font-bold mb-2">{survey.title}</h1>
          <p className="">{survey.description}</p>
        </Card>
        <form onSubmit={handleSubmit}>
          {survey.questions.map((q) => renderQuestion(q))}
          <button
            type="submit"
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Submit Survey
          </button>
        </form>
      </div>
    </div>
  );
};

export default DynamicSurveyForm;
