import {
  FaParagraph,
  FaRegStar,
  FaRegSquare,
  FaRegCircle,
  FaFont,
} from "react-icons/fa";

import { MultipuleAnswersT } from "../../../store/surveryConstructerStore";

const IconPicker = ({ type }: { type: MultipuleAnswersT }) => {
  switch (type) {
    case "checkbox":
      return <FaRegSquare size={22} />;
    case "multipulechoice":
      return <FaRegCircle size={22} />;
    case "text":
      return <FaParagraph size={22} />;
    case "stars":
      return <FaRegStar size={22} />;
    default:
      return <FaFont size={22} />;
  }
};

export default IconPicker;
