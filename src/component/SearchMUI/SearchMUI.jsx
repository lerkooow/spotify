import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function CustomizedInputBase() {
    return (
        <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, borderRadius: "26px" }}
        >
            <IconButton type="button" sx={{ p: '10px', color: "black" }} aria-label="search">
                <SearchIcon />
            </IconButton>
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Artists, songs, or podcasts"
                inputProps={{ 'aria-label': 'search google maps' }}
            />
        </Paper>
    );
}
