import { Stack } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import CardDisplay from '../components/main/card-display';
import { setAppTitle } from '../data-manage/features/app';
import { setLoadingIndicator } from '../data-manage/features/loading';
import { useAppDispatch } from '../data-manage/hooks';
import { GetSeries, ISeries } from '../service/steamingservice';
import { Constants } from '../utils/constants';

function Series() {
  const dispatch = useAppDispatch();
  const [series, setSeries] = useState<ISeries[]>([]);
  useEffect(() => {
    dispatch(setLoadingIndicator(true));
    dispatch(setAppTitle(Constants.TTITLE_SERIES));
    GetSeries().then((data) => {
      setSeries(data);
      dispatch(setLoadingIndicator(false));
    })
  }, [dispatch])
  return (
    <Box>
      <Stack direction="row" flexWrap="wrap" justifyContent="space-evenly">
        {
          series.length > 0 && series.map((seriesData,i) =>{
            return(
              <CardDisplay key={i} data={seriesData} />
            )
          }) 
        }
      </Stack>

    </Box>
  )
}

export default Series