import React, {createContext, useContext, useEffect, useReducer} from "react";

//context to share data across components
const GlobalContext = createContext();

const baseUrl = "https://api.jikan.moe/v4";

//actions 
const LOADING = "LOADING";
const SEARCH = "SEARCH";
const GET_POPULAR_ANIME = "GET_POPULAR_ANIME";
const GET_UPCOMING_ANIME = "GET_UPCOMING_ANIME";
const GET_AIRING_ANIME = "GET_AIRING_ANIME";


//reducer
const reducer = (state, action) => {
    switch(action.type){
        case LOADING:
            return {...state, loading: true};
        case GET_POPULAR_ANIME:
            return {...state, popularAnime: action.payload, loading: false};
        default:
            return state;
    }
}

//will wrap around any components that need access to content
export const GlobalContextProvider = ({children}) => {
   
    //initial state 
    const initialStage = {
        popularAnime: [],
        upcomingAnime: [],
        airingAnime: [],
        pictures: [],
        isSearch: false,
        searchResult: [],
        loading: false,
    }
    //allow us to change the initial stage 
    //used instead of useState as used for more complexity
    const [state, dispatch] = useReducer(reducer, initialStage);
    

    //fetch popular anime
    const getPopularAnime = async () => {
        dispatch({type: LOADING})
        const response = await fetch(`${baseUrl}/top/anime?filter=bypopularity`);
        const data = await response.json();
        dispatch({type: GET_POPULAR_ANIME, payload: data.data})
    }
    //initial render
    useEffect(()=>{
        getPopularAnime();
    },[])

    return(
        //this value will be provided
        <GlobalContext.Provider value={{...state,}}>
            {children}
        </GlobalContext.Provider>
    )
}

//custom hook to use context
export const useGlobalContext = () => {
    return useContext(GlobalContext);
}
