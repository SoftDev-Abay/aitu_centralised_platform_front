import React, { useState } from "react";
import axios from "axios";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useSurveyStore } from "../../../store/surveryConstructerStore";
import SortableQuestion from "../SortableQuestion";
import Input from "@/app/components/Input/Input";
import Card from "@/app/components/Card/Card";
import { useAxios } from "@/app/context/AxiosContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "@/app/components/Button/Button";
import { toast } from "react-toastify";

type Props = {
  clubId: string;
};

const SurveyConstructor: React.FC<Props> = ({ clubId }) => {
  const questions = useSurveyStore((state) => state.questions);
  const addQuestion = useSurveyStore((state) => state.addQuestion);
  const axios = useAxios();

  // State for survey title, description and deadline.
  const [surveyTitle, setSurveyTitle] = useState("");
  const [surveyDescription, setSurveyDescription] = useState("");
  const [deadline, setDeadline] = useState<Date | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } })
  );

  const handleSubmit = async () => {
    const data = {
      clubId,
      deadline: "2025-02-24 06:36:34",
      templateContent: JSON.stringify({
        title: surveyTitle,
        description: surveyDescription,
        // Convert the deadline to ISO string if selected.
        questions: questions,
      }),
    };
    try {
      console.log({ data });
      // Replace "/applications/form" with your actual backend endpoint.
      await axios.post("/applications/form", data);
      toast.success("Survey submitted successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Error submitting survey");
    }
  };

  return (
    <div>
      {/* Survey Title, Description & Deadline */}
      <Card className="mb-4 space-y-2">
        <Input
          placeholder="Survey title"
          value={surveyTitle}
          underline
          onChange={(e) => setSurveyTitle(e.target.value)}
          style={{ fontSize: "32px", paddingLeft: "4px" }}
        />
        <Input
          placeholder="Survey description"
          value={surveyDescription}
          underline
          onChange={(e) => setSurveyDescription(e.target.value)}
          style={{
            fontSize: "16px",
            paddingTop: "10px",
            paddingLeft: "4px",
            paddingBottom: "6px",
            marginBottom: "25px",
          }}
        />
        <div className="flex  items-center gap-10">
          <label className="text-base-semibold block mb-1 font-semibold ml-1">
            Deadline:
          </label>
          <DatePicker
            selected={deadline}
            onChange={(date) => setDeadline(date)}
            placeholderText="Select deadline"
            showTimeSelect
            dateFormat="Pp"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
      </Card>
      <div className="mb-4">
        <Button onClick={() => addQuestion()} color="success">
          Add New Question
        </Button>
      </div>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        modifiers={[restrictToVerticalAxis]}
        onDragEnd={({ active, over }) => {
          if (active.id !== over?.id) {
            const oldIndex = questions.findIndex((q) => q.id === active.id);
            const newIndex = questions.findIndex((q) => q.id === over?.id);
            useSurveyStore.getState().reorderQuestions(oldIndex, newIndex);
          }
        }}
      >
        <SortableContext
          items={questions.map((q) => q.id)}
          strategy={verticalListSortingStrategy}
        >
          {questions.map((question) => (
            <SortableQuestion key={question.id} question={question} />
          ))}
        </SortableContext>
      </DndContext>
      <div className="mt-4">
        <Button color="success" onClick={handleSubmit}>
          Submit Survey
        </Button>
      </div>
    </div>
  );
};

export default SurveyConstructor;
