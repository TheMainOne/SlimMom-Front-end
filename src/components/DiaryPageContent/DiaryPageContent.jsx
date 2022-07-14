// import { useAddProductMutation } from 'redux/apis';
import { DiaryDateCalendar } from 'components/DiaryDateCalendar';
import DiaryProductsList from 'components/DiaryProductsList';
// import { DiaryAddProductForm } from 'components/Forms/DiaryAddProductForm';
import { Spinner } from 'components/Spinner';
import { diaryApi } from 'redux/apis';

import React from 'react';
// import { useAddProductMutation } from 'redux/apis';

// import { DiaryAddProductForm } from 'components/Forms/DiaryAddProductForm';

import { DiaryPageStyled } from './DiaryPageContent.styled';
import { useSelector } from 'react-redux';
import { BlockWrapper } from 'components/Container';

export const DiaryPageContent = () => {
  const currentDate = useSelector(state => state.calendar.activeDate);
  // const { data: products, isLoading } = useGetProductsQuery();
  // const [addProduct, { isLoading: isAddingProduct }] = useAddProductMutation();
  // const [addProduct] = useAddProductMutation();

  const { data = {}, isLoading } =
    diaryApi.useGetProductsByDateQuery(currentDate);

  const { data: { consumedProducts = [] } = {} } = data;

  return (
    <BlockWrapper>
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
    </BlockWrapper>
  );
};
