import { FaInstagram, FaGithub } from "react-icons/fa"
import { Activity } from "./style"
export default function Sobre(){

    return(
        <>
            <Activity>
                Olá, eu me chamo Wallinson, tenho 21 anos e sou programador Frontend.
            </Activity>
                
            <Activity>Há mais ou menos 7 meses resolvi iniciar os meus estudos na área da Tecnologia da Informação através de plataformas como a Udemy e o B7Web. Com o tempo, a área mais atrativa para mim foi o desenvolvimento de sites.</Activity>
            <Activity>Essa aplicação foi feita, inteiramente, com ReactJS.</Activity>
            <Activity>A ideia do app foi um desafio que criei para mim mesmo a fim de testar e explorar várias funcionalidades que o React permitia. Um To do simples não iria explorar tanta coisa assim, por isso resolvi deixá-lo um pouco mais complexo.</Activity>
            <Activity>
                <a className="icons" href="https://www.instagram.com/wallinsonrocha_dev/" target="_blank"><FaInstagram/></a>
                <a className="icons" href="https://github.com/wallinsonrocha" target="_blank"><FaGithub/></a>
            </Activity>
        </>
    )
}