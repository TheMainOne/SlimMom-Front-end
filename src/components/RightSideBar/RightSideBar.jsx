import { MainContainer, TextContainer, Block } from './model';
import { DailyKkalReport, Title, FoodList } from './model';
import { useDailyNorma } from './hooks';
import { useTranslation } from 'react-i18next';

export const RightSideBar = ({ userData }) => {
  const [responseData, date] = useDailyNorma(userData);
  const { t } = useTranslation();
  console.log(responseData.bannedProducts);
  const summ = t('summary');
  return (
    <MainContainer>
      <TextContainer>
        <Block>
          <Title text={`${summ} ${date}`} />
          <DailyKkalReport data={responseData.dailyData} />
        </Block>

        <Block>
          <Title text={t('notRecommended')} />
          <FoodList foodList={responseData.bannedProducts} />
        </Block>
      </TextContainer>
    </MainContainer>
  );
};
