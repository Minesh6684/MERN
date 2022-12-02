import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import donationService from './donationService'

const initialState = {
    allDonations: [],
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

export const getAllDonations = createAsyncThunk('donations/getAllDonations', async(_, thunkAPI) => {
    try {
        return await donationService.getAllDonations()
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
                            || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const updateDonation = createAsyncThunk('donations/updateDonation', async(updatedDonation, thunkAPI) => {
    try {
        return await donationService.updateDonation(updatedDonation)
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
            state.allDonations.push(action.payload)
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
            state.allDonations = state.allDonations.filter((donation) => donation._id !== action.payload.id)
        })
        .addCase(getAllDonations.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getAllDonations.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(getAllDonations.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.allDonations = action.payload
        })
        .addCase(updateDonation.pending, (state) => {
            state.isLoading = true
        })
        .addCase(updateDonation.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.donations = state.donations
                              .map((donation) => donation._id === action.payload._id ? {...donation, isReserved: action.payload.isReserved, reservedFor: action.payload.reservedFor, isDonated: action.payload.isDonated} : donation)
            state.allDonations = state.allDonations
                               .map((donation) => donation._id === action.payload._id ? {...donation, isReserved: action.payload.isReserved, reservedFor: action.payload.reservedFor, isDonated: action.payload.isDonated} : donation)
                               .filter((donation) => donation.isDonated === false)
        })
        .addCase(updateDonation.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
    }
})

export const {reset} = donationSlice.actions
export default donationSlice.reducer