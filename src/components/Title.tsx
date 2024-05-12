import { Button } from "./Button";

export const Title = () => {
    return (
        <div className='flex flex-col gap-3'>
            <p className="font-light text-[30px] text-primary-color">Olá, eu sou</p>
            <h1 className="text-9xl font-black">Daniela<br></br>Costa</h1>
            <span className="font-light text-[#A9ADB8] text-[36px]">Advogada</span>
            <Button>Entre em contato</Button>
        </div>
    );
}
