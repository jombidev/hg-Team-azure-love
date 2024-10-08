import { ColumnFlexBox } from '@/components/styled';
import share from '/public/share.svg';

import MainCell from '@/components/Cell/MainCell';
import NanuriDevider from '@/components/Devider/NanuriDevider';
import PlusButton from '@/components/Button/PlusButton';
import Box from '@mui/material/Box';

function HomePage() {
  const list = Array.from({ length: 10 }).map((_, i) => i);

  return (
    <>
      <ColumnFlexBox>
        {/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
        <Box style={{ paddingBottom: 60, paddingTop: 20 }}>
          {list.map((index) => {
            return (
              <Box key={index} style={{ paddingBottom: 50, paddingTop: 10 }}>
                <MainCell
                  title={'의성식 성능 좋은 상추 3봉 나눔합니다@@@'}
                  region={'경상북도 의성군'}
                  badges={[
                    { content: '나눔', imgSrc: share },
                    { content: '김건우', imgSrc: share },
                  ]}
                  imgUrl={
                    'https://health.chosun.com/site/data/img_dir/2023/06/07/2023060701939_0.jpg'
                  }
                />
                <NanuriDevider />
              </Box>
            );
          })}
        </Box>

        <PlusButton />
      </ColumnFlexBox>
    </>
  );
}

export default HomePage;
