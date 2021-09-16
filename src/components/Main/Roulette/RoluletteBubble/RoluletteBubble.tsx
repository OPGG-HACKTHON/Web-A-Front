import {
  Bubble,
  BubbleClose,
  BubbleContainer,
  BubbleContent,
  BubbleTtile,
  BubbleUnderline,
  BubbleWrapper,
} from "./RoluletteBubble.style";

interface IRoluletteBubbleProps {
  title: string;
  content: string;
  isShow: boolean;
  onClose: () => void;
}

const RoluletteBubble: React.FC<IRoluletteBubbleProps> = ({
  title,
  content,
  isShow,
  onClose,
}) => {
  return (
    <Bubble {...{ isShow }}>
      <BubbleWrapper>
        <BubbleContainer>
          <BubbleTtile>{title}</BubbleTtile>
          <BubbleUnderline />
          <BubbleContent>{content}</BubbleContent>
        </BubbleContainer>
        <BubbleClose onClick={onClose}>확인</BubbleClose>
      </BubbleWrapper>
    </Bubble>
  );
};

export default RoluletteBubble;
