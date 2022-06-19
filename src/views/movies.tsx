import { Box, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import CardDisplay from '../components/main/card-display';
import { setAppTitle } from '../data-manage/features/app';
import { setLoadingIndicator } from '../data-manage/features/loading';
import { useAppDispatch } from '../data-manage/hooks';
import { GetMovies, IMovie } from '../service/steamingservice';
import { Constants } from '../utils/constants';

function Movies() {
  const dispatch = useAppDispatch();
  const [movies, setMovies] = useState<IMovie[]>([]);
  useEffect(() => {
    dispatch(setLoadingIndicator(true));
    dispatch(setAppTitle(Constants.TITLE_MOVIE));
    GetMovies().then((data) => {
      setMovies(data);
      dispatch(setLoadingIndicator(false));
    })
  }, [dispatch])
  return (
    <Box>
      <Stack direction="row" flexWrap="wrap" justifyContent="space-evenly">
        {
          movies.length > 0 && movies.map((movie,i) =>{
            return(
              <CardDisplay key={i} data={movie} />
            )
          }) 
        }
      </Stack>

    </Box>
  )
}

export default Movies