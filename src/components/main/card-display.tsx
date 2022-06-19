import { Box, Card, CardContent, Typography } from '@mui/material'
import React, { useState } from 'react'
import { setDialog, setSelectedData } from '../../data-manage/features/app';
import { useAppDispatch } from '../../data-manage/hooks';
import { IMovie, ISeries } from '../../service/steamingservice';

interface ICardDisplay {
    data: IMovie | ISeries
}

function CardDisplay({ data }: ICardDisplay) {
    const dispatch = useAppDispatch();
    const [imageError, setImageError] = useState(false);

    const handleClick = (data: IMovie | ISeries) => {
        dispatch(setSelectedData(data));
        dispatch(setDialog(true));
    }

    return (
        <Box>
            <Card sx={(theme) => ({
                height: theme.spacing(50), backgroundColor: theme.palette.secondary.main,
                width: theme.spacing(40),
                cursor: 'pointer'
            })} onClick={() => { handleClick(data) }}>
                <CardContent sx={{
                    width: '100%',
                    height: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    textAlign: 'center'
                }}>
                    {imageError ? <Typography variant="subtitle2" sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        textTransform: 'uppercase',
                        color: "#fff",
                        opacity: '1',
                    }} component="span">
                        {"Image not available currently"}
                    </Typography> : <Box
                        onError={(e: any) => { setImageError(true) }}
                        component="img"
                        src={data.images['Poster Art'].url}
                        sx={(theme) => ({
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '100%',
                            height: '100%',
                            opacity: '0.5',
                        })}
                    />}
                </CardContent>
            </Card>
            <Typography variant="body1" component="div" align='center'>
                {data.title}
            </Typography>
        </Box>
    )
}

export default CardDisplay