import { Box, Button, Card, CardContent, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { setDialog } from '../../data-manage/features/app';
import { setLoadingIndicator } from '../../data-manage/features/loading';
import { useAppDispatch, useAppSelector } from '../../data-manage/hooks';
import { GetFunFactOfTheYear } from '../../service/steamingservice';


function DetailsDialog() {
    const dispatch = useAppDispatch();
    const { dialog, selectedData } = useAppSelector(state => state.app);
    const [imageError, setImageError] = useState(false);
    const [funfact, setFunFact] = useState<string>("");

    useEffect(() =>{
        dispatch(setLoadingIndicator(true));
        GetFunFactOfTheYear(selectedData.releaseYear).then((data) =>{
            dispatch(setLoadingIndicator(false));
            setFunFact(data);
        }).catch((error) => {console.log(error)});
    },[selectedData,dispatch])


    const handleClose = () => {
        dispatch(setDialog(false))
    };

    return (
        <React.Fragment>            
                <Dialog
                    maxWidth="lg"
                    open={dialog}
                    onClose={handleClose}
                >
                    <DialogTitle variant='h5' align='center'><strong>{selectedData.title}</strong>
                    </DialogTitle>
                    <Divider />
                    <DialogContent>
                        <Stack direction="row" justifyContent="space-around">
                            <Box>
                                <Card sx={(theme) => ({
                                    height: theme.spacing(50), 
                                    backgroundColor: theme.palette.secondary.main,
                                    width: theme.spacing(40),
                                    cursor: 'pointer'
                                })}>
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
                                            src={selectedData.images['Poster Art'].url}
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                width: '100%',
                                                height: '100%',
                                                opacity: '0.5',
                                            }}
                                        />}
                                    </CardContent>
                                </Card>

                            </Box>
                            <Box>
                                <Card elevation={0} sx={(theme) => ({
                                    overflow:'auto',
                                    maxHeight: theme.spacing(50),
                                    width: theme.spacing(50),
                                    cursor: 'pointer'
                                })}>
                                    <CardContent sx={{
                                        width: '100%',
                                        height: '100%',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        position: 'relative',
                                        textAlign: 'center'
                                    }}>
                                        <Box component="div" textAlign="left">
                                            <Typography variant='h5' sx={{my:2}} >
                                            <strong>Release Year :</strong>{' '}<strong>{selectedData.releaseYear}</strong>
                                            </Typography>
                                            <Typography variant='h6' sx={{my:2}}  >
                                            <strong>Fun Fact : </strong>{' '}{funfact}
                                            </Typography>
                                            <Typography variant='h6' sx={{my:2}}  >
                                            <strong>Description : </strong>{' '}{selectedData.description}
                                            </Typography>
                                        </Box>


                                    </CardContent>
                                </Card>

                            </Box>
                        </Stack>
                    </DialogContent>
                    <Divider />
                    <DialogActions>
                        <Button onClick={handleClose}>Close</Button>
                    </DialogActions>
                </Dialog>
        </React.Fragment>
    );
}

export default DetailsDialog