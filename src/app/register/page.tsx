import { FormRegister } from "./components/FormRegister";

export default function PageRegister(){
    return(
        <main 
            className="flex flex-col justify-between m11 h-full relative" 
            style={{ height: "calc(100vh - 5.5rem)" }}
        >
            <FormRegister />
        </main>
    )
}