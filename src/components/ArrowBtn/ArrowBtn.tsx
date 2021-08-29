import { IArrowBtnProps } from "./ArrowBtn.type";
// Style
import { Arrow, ButtonContainer } from "./ArrowBtn.style";

const ArrowBtn: React.FC<IArrowBtnProps> = ({ onClick, left, white }) => {
  return (
    <ButtonContainer {...{ onClick, left, white }}>
      <Arrow {...{ white }} />
    </ButtonContainer>
  );
};

export default ArrowBtn;
