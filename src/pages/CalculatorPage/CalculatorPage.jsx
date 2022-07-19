// import { Button } from 'components/Button';
import { CalculatorPageContent } from 'components/CalculatorPageContent';
import { PageContainer } from 'components/Container';
import { RightSideBar } from 'components/RightSideBar/RightSideBar';
import { userNormaApi } from 'redux/apis';

const CalculatorPage = () => {
  const [getPrivatDailyNorma, { data }] =
    userNormaApi.useGetPrivateDailyNormaMutation();

  return (
    <PageContainer>
      <CalculatorPageContent getPrivatDailyNorma={getPrivatDailyNorma} />
      {/* <RightSideBar userData={data} /> */}
    </PageContainer>
  );
};

export default CalculatorPage;
