import React, {useEffect, useState} from "react";
import Grid from "@material-ui/core/Grid";
import Container from '@mui/material/Container';
import axios from "axios";
import SubmitButton from "./SubmitButton";
import SixColumnTable from "./SixColumnTable";
import GeneralButton from "./GeneralButton";
import {API_BASE} from "../config/constants";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import {Typography} from "@material-ui/core";
import {getFormattedDateTimeString} from "../util/utility";

const seatStatusOptions = [
    {
        label: "Available",
        value: "AVAILABLE",
    },
    {
        label: "Booked",
        value: "BOOKED",
    }
];

function AdminViewShowSeatingsByShowNumberAndStatus() {

    const [showSeatingsDetail, setShowSeatingsDetail] = useState([]);
    const [isError, setIsError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [showNumber, setShowNumber] = useState('');
    const [seatStatus, setSeatStatus] = useState('');
    const [initialText, setInitialText] = useState("");

    useEffect(() => {
        setInitialText("No shows selected. Please enter a show number above.");
    }, []);

    const handleSubmit = () => {
        setLoading(true);
        setIsError(false);
        const data = {
            showNumber: showNumber,
            seatStatus: seatStatus
        }

        const firstPartURL = API_BASE + "/admin/api/retrieveShowSeatingsByShowNumberAndSeatStatus?showNumber=";
        const secondPartURL = "&seatStatus=";
        const finalURL = firstPartURL + data.showNumber + secondPartURL + data.seatStatus;

        axios.get(finalURL).then(res => {
            let newData = res.data.map(function (row) {
                return {...row, validTill: getFormattedDateTimeString(row.validTill)};
            });
            setShowSeatingsDetail(newData);
            setLoading(false);
        }).catch(err => {
            setLoading(false);
            setIsError(true);
        });
    }

    return (
        <Container maxWidth="md">
            <h1>View Show Seatings by Show Number and Status</h1>
            <Grid container spacing={2}>

                <Grid item xs={12} sm={12}>
                    <TextField fullWidth type="number" id="standard-basic" label="Show Number" variant="standard"
                               value={showNumber} onChange={e => setShowNumber(e.target.value)}/>
                </Grid>

                <Grid item xs={12} sm={12}>
                    <TextField
                        id="standard-basic"
                        select
                        fullWidth
                        label="Select a seat status"
                        defaultValue="Available"
                        variant="standard"
                        onChange={e => setSeatStatus(e.target.value)}
                    >
                        {seatStatusOptions.map((seatStatus) => (
                            <MenuItem key={seatStatus.value} value={seatStatus.value}>
                                {seatStatus.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>

                <Grid item xs={12} sm={12}>
                    <SubmitButton
                        size="small"
                        variant="contained"
                        title={loading ? 'Loading...' : 'Submit'}
                        onClick={handleSubmit}/>
                </Grid>

                {
                    showSeatingsDetail.length > 0 ?
                        <SixColumnTable data={showSeatingsDetail}/> : showSeatingsDetail.length === 0
                            ? <Grid item xs={12} sm={12}>
                                <Typography variant="subtitle1">No relevant seats found for show</Typography></Grid>
                            : <Grid item xs={12} sm={12}>
                                <Typography variant="subtitle1">{initialText}</Typography>
                            </Grid>
                }

                <Grid item xs={12} sm={12}>
                    <GeneralButton
                        title="BACK TO ADMIN MENU"
                        size="large"
                        variant="contained"
                        url="/admin"/>
                </Grid>

            </Grid>
        </Container>
    );
}

export default AdminViewShowSeatingsByShowNumberAndStatus;