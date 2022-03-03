import { useEffect, useState } from "react";

// komponenta koja prikazuje na ekran zadato Ime i sadrzi dugme koje kad se klikne mijenja Ime
export default function ExampleComponent(props) {
    //kreira stanje "name" koje ima vrijednost '' (prazan string) i funkciju "setName" ( samo pomocu nje moze da se mijenja vrijednost stanja "name")
    const [name, setName] = useState('');

    //poziva se samo nakon prvog renderovanja
    useEffect(() => {
        setName('InitialName');
    }, []);

    //poziva se svaki put kad se promjeni stanje "name"
    useEffect(() => {
        console.log('Name has been changed');
    }, [name]);

    //poziva se svaki put kad se promjeni props "textColor"
    useEffect(() => {
        console.log('Text color has been changed');
    }, [props.textColor]);

    //funkcija pod nazivom "changeToMyName" mijenja vrijednost stanja "name" ( ova funkcija ne prima parametre i izvrsava se samo kad je mi pozovemo )
    const changeToMyName = () => {
        setName('Aleksa');
    }

    //renderovanje komponente ( izvrsava se svaki put kad se promjeni stanje ili props )
    return (
        <div>
            My name is : 
            <span style={{ color: props.textColor, fontSize: props.font }}>
                {name}
            </span>
            <div>
                <button onClick={changeToMyName}>
                    Show my name!
                </button>
            </div>
        </div>
    )
}