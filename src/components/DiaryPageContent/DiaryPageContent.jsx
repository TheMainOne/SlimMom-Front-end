import { DiaryDateCalendar } from 'components/DiaryDateCalendar';
import DiaryProductsList from 'components/DiaryProductsList';
// import { DiaryAddProductForm } from 'components/Forms/DiaryAddProductForm';
import { Spinner } from 'components/Spinner';
import { diaryApi } from 'redux/apis';

import React, { useState } from 'react';
// import { useAddProductMutation } from 'redux/apis';

import {
  DiaryPageContentStyled,
  DiaryPageStyled,
} from './DiaryPageContent.styled';
import { useSelector } from 'react-redux';

export const DiaryPageContent = () => {
  // const currentDate = useSelector(state => state.calendar.activeDate);
  // const { data: products, isLoading } = useGetProductsQuery();
  // const [addProduct, { isLoading: isAddingProduct }] = useAddProductMutation();

  const { data = {}, isLoading } =
    diaryApi.useGetProductsByDateQuery('2022-07-13');

  const { data: { consumedProducts = [] } = {} } = data;

  return (
    <DiaryPageContentStyled>
      {/* Kostia */}
      <DiaryPageStyled>
        <DiaryDateCalendar />

        {/* <DiaryAddProductForm addProduct={addProduct} /> */}
      </DiaryPageStyled>

      {/* Natasha */}
      {/* {isAddingProduct ? ( */}
      {isLoading ? (
        <Spinner />
      ) : consumedProducts ? (
        <DiaryProductsList products={consumedProducts} />
      ) : (
        <h1>Ты еще не ел сегодня!</h1>
      )}

      {/* ) : ( */}

      {/* )} */}
    </DiaryPageContentStyled>
  );
};
