export type stateType = {
    theme: "DARK" | "LIGHT",
    textFont: "#ddd" | "#232323",
    titleFont: "#fff" | "#000",
    firstBackground: "#232323" | "#fff",
    secondBackground: "#332F2E" | "#ddd"
}

export type actionType = {
    type: string;
    payload:{
        [key:string]: any;
    }
}

export default (state: stateType, action: actionType)=>{
    switch(action.type){
        case "CHANGE_THEME":{
            return{
                ...state, 
                theme: action.payload.theme,
                textFont: action.payload.textFont,
                titleFont: action.payload.titleFont,
                firstBackground: action.payload.firstBackground,
                secondBackground: action.payload.secondBackground
            }
        }
    }
    return state;
}

