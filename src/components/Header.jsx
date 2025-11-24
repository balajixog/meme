import image1 from "../assets/OIP.png";

export default function Header() {
    return(
        <header className='header'>
            <img src={image1} alt="memelogo"/>
            <h1>Meme Generator</h1>
        </header>
    )
}