import LogoImg from '../assets/Logo.png'
const Logo = ({width = '100px'}) => {
    return(
        <>
            <div>
                <img src={LogoImg} width={width} />
            </div>
        </>
    )
}

export default Logo;