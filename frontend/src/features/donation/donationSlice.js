import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import donationService from './donationService'

const initialState = {
    donations: [],
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: ''
}

export const setDonation = createAsyncThunk('donations/create', async(donationData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await donationService.setDonation(donationData, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
                            || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const getDonations = createAsyncThunk('donations/getAll', async(_, thunkAPI) => {
    try {   
        const token = thunkAPI.getState().auth.user.token
        return await donationService.getDonations(token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
                            || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const deleteDonation = createAsyncThunk('donations/delete', async(donationId, thunkAPI) => {
    try {   
        const token = thunkAPI.getState().auth.user.token
        return await donationService.deleteDonation(donationId, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
                            || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const donationSlice = createSlice({
    name: 'donation',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
        .addCase(setDonation.pending, (state) => {
            state.isLoading = true
        })
        .addCase(setDonation.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(setDonation.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.donations.push(action.payload)
        })
        .addCase(getDonations.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getDonations.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(getDonations.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.donations = action.payload
        })
        .addCase(deleteDonation.pending, (state) => {
            state.isLoading = true
        })
        .addCase(deleteDonation.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(deleteDonation.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.donations = state.donations.filter((donation) => donation._id !== action.payload.id)
        })
    }
})

export const {reset} = donationSlice.actions
export default donationSlice.reducer