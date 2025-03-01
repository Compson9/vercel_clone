import { TextAnimate } from "../../components/magicui/text-animate"

export function TextAnimate1() {
  return (
    <TextAnimate className="text-white font-semibold text-2xl" animation="blurInUp" startOnView={true} duration={0.1} by="character" once={false}>
      Start deploying
    </TextAnimate>
  );
}

