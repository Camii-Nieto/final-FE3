import axios from 'axios'
import {createContext, useContext, useState, useReducer, useEffect} from 'react'


const OdontoStates = createContext()

const reducer = (state, action) => {
    switch (action.type) {
        case 'GET_DENTISTS':
            return {...state, dentists: action.payload}
        case 'GET_DENTIST':
            return {...state, dentist: action.payload}
        case 'ADD_FAV':

            const isDentistInFavs = state.favs.findIndex(
            fav => fav.id === action.payload.id
            );

            if (isDentistInFavs === -1) {
            return {...state, favs: [...state.favs, action.payload]}
            } else {
            console.log('Ya esta en favs');
            return state;
            }
        case 'SWITCH_THEME':
            return {...state, theme: !state.theme}
        default:
            throw new Error()
    }
}

const localFavs = JSON.parse(localStorage.getItem('favs'))
const initialFavState = localFavs ? localFavs : []

const initialState = {   
    dentists: [],
    dentist: {},
    favs: initialFavState,
    theme: true,
}

const Context = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const url = 'https://jsonplaceholder.typicode.com/users/'

    useEffect(() => {
        axios(url)
        .then(res => {
            dispatch({type: 'GET_DENTISTS', payload: res.data})})
        .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        localStorage.setItem('favs', JSON.stringify(state.favs))
    }, [state.favs])
    

    return(
        <OdontoStates.Provider value={{dispatch, state}}>
            {children}
        </OdontoStates.Provider>
    )
}

export default Context

export const useOdontoStates = () => useContext(OdontoStates)