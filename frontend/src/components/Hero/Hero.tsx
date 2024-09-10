import handIcon from "../assets/hand_icon.png";
import arrowIcon from "../assets/arrow.png";
import heroImage from "../assets/hero_image.png";
import * as S from "./styles";

export const Hero: React.FC = () => {
  return (
    <S.Container>
      <S.HeroLeft>
        <S.Title>NEEW ARRIVALS ONLY</S.Title>
        <S.Wrapper>
          <S.HandHandIconWrapper>
            <S.Text>new</S.Text>
            <S.HandHandIconImage src={handIcon} alt="" />
          </S.HandHandIconWrapper>
          <S.Text>collections</S.Text>
          <S.Text>for everyone</S.Text>
        </S.Wrapper>
        <S.LatestButtonWrapper>
          <S.LatestTitle>Latest Collection</S.LatestTitle>
          <S.LatestImage src={arrowIcon} alt="" />
        </S.LatestButtonWrapper>
      </S.HeroLeft>
      <S.HeroRight>
        <S.HeroImage src={heroImage} alt="" />
      </S.HeroRight>
    </S.Container>
  );
};
