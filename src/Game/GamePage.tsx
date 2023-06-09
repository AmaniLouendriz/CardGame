import { QuestionItem } from "./components/QuestionItem/QuestionsItem";
import { objectsInterface } from "./GameData";
import { LandingPage } from "./components/LandingPage/LandingPage";

import { SuccessMessage } from "./components/SuccessMessage/SuccessMessage";
import { FinalPage } from "./components/FinalPage/FinalPage";

export const GamePage=(
    {functions,objects}:{
        functions:any,
        objects:objectsInterface
    }
)=>{

    const start = ()=>{
        return functions.start();
    }

    const cancel = ()=>{
        return functions.cancel();
    }

    const nextGame = (value:number) => {return functions.nextGame(value)};


    const count = objects.count;

    const success = objects.success;

    const cards = objects.drawnCards;
 
    return(
        <>


        {count === 0?
            <LandingPage start={start}/> 
                : count === 4 ? <FinalPage cards={cards} cancel={cancel}/>: 
                    <QuestionItem objects={objects} functions={functions} />   
        }

        {success != -1?
                <SuccessMessage 
                
                successValue={success} 
                nextGame={nextGame}
                step={count}
                cancel={cancel}
                cards={cards}/>:<></>        
        }
        </>
    )
}