import { Box, Card, CardContent, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DefaultImage from '../assets/images/defaultImage.png';
import { setAppTitle } from '../data-manage/features/app';
import { setLoadingIndicator } from '../data-manage/features/loading';
import { useAppDispatch } from '../data-manage/hooks';
import { GetPopulartTitles, IPopularTitle } from '../service/steamingservice';
import { Constants } from '../utils/constants';



function PopularTitles() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [populartTitles, setPopularTitles] = useState<IPopularTitle[]>([]);
  useEffect(() => {
    dispatch(setLoadingIndicator(true));
    GetPopulartTitles().then((data) => {
      setPopularTitles(data);
      dispatch(setAppTitle(Constants.TITLE_POPULAR));
      dispatch(setLoadingIndicator(false));
    });
  }, [dispatch]);

  const handleClick = ({ navigateTo }: IPopularTitle) => {
    navigate(navigateTo);
  }

  return (
    <Box>
      <Stack direction="row" spacing={8}>
        {
          populartTitles.length > 0 && populartTitles.map((pt, i) => {
            return (
              <Box key={i}>
                <Card sx={(theme) => ({
                  height: theme.spacing(50), backgroundColor: theme.palette.secondary.main,
                  width: theme.spacing(40),
                  cursor:'pointer'
                })} onClick={() => { handleClick(pt) }}>
                  <CardContent sx={{
                    width: '100%',
                    height: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    textAlign: 'center'
                  }}>
                    <Box
                      component="img"
                      src={pt.backgroundImage ? pt.backgroundImage : DefaultImage}
                      sx={(theme) => ({
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        height: '100%',
                        opacity: '0.5',
                      })}
                    />
                    <Typography variant="h5" sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      textTransform: 'uppercase',
                      color: "#fff",
                      opacity: '1',
                    }} component="span">
                      {pt.name}
                    </Typography>
                  </CardContent>
                </Card>
                <Typography gutterBottom variant="h5" component="div">
                  {pt.title}
                </Typography>
              </Box>
            )
          })
        }
      </Stack >
    </Box >
  )
}

export default PopularTitles