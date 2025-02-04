import { CircleHelpIcon, LightbulbIcon } from "lucide-react";
import "./Header.css";


export default function Header({ onHelpClick, onHintClick }) {
    return (
        <header>
            <CircleHelpIcon onClick={onHelpClick} className="header-icon" />
            <h1>Jogo</h1>
            <LightbulbIcon onClick={onHintClick} className="header-icon" />
        </header>
    );
}
