import React from 'react'
import * as S from "./styles"
export const NewsLetter: React.FC = () => {
  return (
    <S.Container>
      <S.Title>Get Exclusive Offers On Your Email</S.Title>
      <S.Text>Subscribe our newsletter and stay updated</S.Text>
      <S.NewsLetterForm>
        <S.EmailInput type="email" placeholder='Your Email id'/>
        <S.SubscribeButton>Subscribe</S.SubscribeButton>
      </S.NewsLetterForm>
    </S.Container>
  )
}
