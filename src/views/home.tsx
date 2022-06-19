import { Box, Container } from '@mui/material';
import { Navigate, Route, Routes } from 'react-router-dom';
import Footer from '../components/layout/footer-bar';
import LoadingOverLay from '../components/layout/loading-overlay';
import MenuBar from '../components/layout/menu-bar';
import DetailsDialog from '../components/main/details-dialog';
import { useAppSelector } from '../data-manage/hooks';
import Movies from './movies';
import PopularTitles from './popular-titles';
import Series from './series';

export default function Home() {
    const { dialog } = useAppSelector(state => state.app);
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
            }}
        >
            <MenuBar />
            <LoadingOverLay />
            <Container component="main" sx={{ mt: 16, mb: 2 }} maxWidth="xl">
                <Routes>
                    <Route path="/" element={<Navigate to="/home" />} />
                    <Route path="/home" element={<PopularTitles />} />
                    <Route path="/movies" element={<Movies />} />
                    <Route path="/series" element={<Series />} />
                </Routes>
                {
                    dialog && <DetailsDialog />

                }
            </Container>
            <Footer />
        </Box>
    )
}
