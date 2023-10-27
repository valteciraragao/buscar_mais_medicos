import S from "./style";

type FlapProps = {
  content: string;
  total: number;
};

const Flap = ({ content, total }: FlapProps) => {
  return (
    <S.Flap>
      <p className="contentP">{content}</p>
      <span className="contentSpan">{total}</span>
    </S.Flap>
  );
};

export default Flap;
