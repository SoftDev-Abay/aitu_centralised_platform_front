// SortableAnswer.tsx
import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Input from "@/app/components/Input/Input";
import { FaTrash } from "react-icons/fa";
import IconPicker from "../IconPicker";
import { MultipuleAnswersT } from "@/app/store/surveryConstructerStore";

type SortableAnswerProps = {
  id: string;
  answer: string;
  onChange: (newValue: string) => void;
  onDelete: () => void;
  questionType: string;
};

const SortableAnswer: React.FC<SortableAnswerProps> = ({
  id,
  answer,
  onChange,
  onDelete,
  questionType,
}) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="flex items-center gap-2 my-2"
      {...attributes}
      {...listeners}
    >
      {/* Using a simple placeholder icon */}
      <span className="w-6 text-center">
        <IconPicker type={questionType as MultipuleAnswersT} />
      </span>

      <Input value={answer} onChange={(e) => onChange(e.target.value)} />
      <span className="cursor-pointer text-red-500" onClick={onDelete}>
        <FaTrash size={22} />
      </span>
    </div>
  );
};

export default SortableAnswer;
