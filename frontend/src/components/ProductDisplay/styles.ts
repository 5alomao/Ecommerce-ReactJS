import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  margin: 0 5rem;

  @media (max-width: 1280px) {
    margin: 0 4rem;
  }

  @media (max-width: 1024px) {
    margin: 0 2rem;
  }

  @media (max-width: 800px) {
    margin: 0 10px;
  }

  @media (max-width: 650px) {
    flex-direction: column;
  }
`;

export const DisplayLeft = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 1280px) {
    gap: 10px;
  }

  @media (max-width: 1024px) {
    gap: 5px;
  }

  @media (max-width: 800px) {
    flex-direction: column-reverse;
    gap: 0;
    align-items: center;
  }

  @media (max-width: 650px) {
    gap: 10px;
    flex-direction: row;
    margin: auto;
  }
`;

export const ImageList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 1280px) {
    gap: 10px;
  }

  @media (max-width: 800px) {
    flex-direction: row;
    justify-content: space-around;
    gap: 6px;
  }

  @media (max-width: 650px) {
    flex-direction: column;
    gap: 8px;
  }
`;

export const ProductImage = styled.img`
  height: 10rem;

  @media (max-width: 1280px) {
    height: 120px;
  }

  @media (max-width: 1024px) {
    height: 5rem;
  }

  @media (max-width: 800px) {
    height: 4.5rem;
  }
`;

export const DisplayImage = styled.div``;

export const ProductMainImage = styled.img`
  width: 35rem;

  @media (max-width: 1280px) {
    width: auto;
    height: 510px;
  }

  @media (max-width: 1024px) {
    height: 350px;
  }

  @media (max-width: 800px) {
    height: 300px;
  }

  @media (max-width: 650px) {
    height: 330px;
  }
`;

export const DisplayRight = styled.div`
  margin: 0 1.5rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 1280px) {
    margin: 0 2rem;
  }
`;

export const ProductName = styled.h1`
  color: #3d3d3d;
  font-size: 2rem;
  font-weight: 700;

  @media (max-width: 1280px) {
    font-size: 1.5rem;
  }

  @media (max-width: 1024px) {
    font-size: 18px;
  }

  @media (max-width: 800px) {
    font-size: 14px;
  }

  @media (max-width: 650px) {
    margin-top: 15px;
    font-size: 20px;
    font-weight: 500;
  }
`;

export const ProductStar = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  gap: 0.5rem;
  color: #1c1c1c;
  font-size: 1rem;

  @media (max-width: 1280px) {
    gap: 3px;
    font-size: 13px;
  }
`;

export const StarIcon = styled.img`
  @media (max-width: 1024px) {
    width: 1rem;
  }

  @media (max-width: 800px) {
    width: 14px;
  }

  @media (max-width: 650px) {
    width: 1rem;
  }
`;

export const StarDullIcon = styled.img`
  @media (max-width: 1024px) {
    width: 1rem;
  }

  @media (max-width: 800px) {
    width: 14px;
  }

  @media (max-width: 650px) {
    width: 1rem;
  }
`;

export const Rating = styled.p``;

export const DisplayPrices = styled.div`
  display: flex;
  margin: 2.5rem 0;
  gap: 2rem;
  font-size: 1.5rem;
  font-weight: 700;

  @media (max-width: 1280px) {
    margin: 10px 0;
    font-size: 18px;
  }
`;

export const OldPrice = styled.p`
  color: #818181;
  text-decoration: line-through;
`;

export const NewPrice = styled.p`
  color: #ff4141;
`;

export const ProductDescription = styled.p`
  @media (max-width: 1280px) {
    font-size: 13px;
  }

  @media (max-width: 1024px) {
    font-size: 12px;
  }

  @media (max-width: 800px) {
    font-size: 10px;
  }
`;

export const DisplaySizes = styled.div``;

export const SelectSize = styled.h1`
  margin-top: 2rem;
  color: #656565;
  font-size: 1.25rem;
  font-weight: 600;

  @media (max-width: 1280px) {
    margin-top: 20px;
    font-size: 20px;
  }

  @media (max-width: 800px) {
    margin-top: 10px;
  }
`;

export const ProductSizes = styled.div`
  display: flex;
  margin: 2rem 0;
  gap: 1.25rem;

  @media (max-width: 1024px) {
    margin: 10px 0;
  }

  @media (max-width: 800px) {
    margin-top: 10px;
    gap: 5px;
  }

  @media (max-width: 650px) {
    gap: 10px;
    margin: 20px 0;
  }
`;

export const Size = styled.span`
  width: 3.5rem;
  text-align: center;
  padding: 1rem 0;
  background-color: #fbfbfb;
  border: 1px solid #ebebeb;
  cursor: pointer;
  border-radius: 0.25rem;

  @media (max-width: 1280px) {
    padding: 14px 0;
    width: 3rem;
  }

  @media (max-width: 1024px) {
    padding: 10px 0;
    font-size: 12px;
  }

  @media (max-width: 800px) {
    padding: 4px 0;
    font-size: 11px;
  }

  @media (max-width: 650px) {
    padding: 10px 0;
    font-size: 14px;
  }
`;

export const AddToCart = styled.button`
  padding: 1.25rem 2.5rem;
  width: 12.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  background-color: #ff4141;
  outline: none;
  border: none;
  margin-bottom: 2.5rem;
  cursor: pointer;

  @media (max-width: 1280px) {
    width: 10rem;
    padding: 1rem 0;
    margin-bottom: 20px;
  }

  @media (max-width: 1024px) {
    width: 120px;
    padding: 10px 0;
    margin-bottom: 10px;
    font-size: 14px;
  }

  @media (max-width: 800px) {
    width: 100px;
    font-size: 12px;
  }

  @media (max-width: 800px) {
    width: 130px;
    font-size: 15px;
    padding: 12px 0;
  }
`;

export const CategoryTagsText = styled.p`
  margin-top: 0.625rem;

  @media (max-width: 1280px) {
    margin-top: 5px;
    font-size: 14px;
  }

  @media (max-width: 1024px) {
    font-size: 12px;
  }

  @media (max-width: 800px) {
    font-size: 10px;
  }

  @media (max-width: 650px) {
    font-size: 1rem;
  }
`;

export const CategoryTagsSpan = styled.span`
  font-weight: 600;

  @media (max-width: 1280px) {
    margin-top: 5px;
    font-size: 14px;
  }

  @media (max-width: 1024px) {
    font-size: 12px;
  }

  @media (max-width: 800px) {
    font-size: 10px;
  }

  @media (max-width: 650px) {
    font-size: 1rem;
  }
`;
