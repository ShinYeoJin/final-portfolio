import IntroduceCard from "./IntroduceCard";

export default function Introduce1() {
  return (
    <IntroduceCard
      icon="ri-question-mark"
      title={<>모르는 것은<br />두려워하지 않고<br />학습합니다.</>}
      subtitle={<>새로운 프레임워크나 라이브러리도<br />주저하지 않고 탐구하며,<br />신속하게 습득합니다.</>}
    />
  );
}