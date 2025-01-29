import { CircleHelpIcon, LightbulbIcon } from "lucide-react";

const iconStyle = {
    height: 40,
    width: 40,
    cursor: "pointer",
};

export default function Header({ onHelpClick, onHintClick }) {
    return (
        <header>
            <CircleHelpIcon onClick={onHelpClick} style={iconStyle} />
            <h1>Oncotô</h1>
            <LightbulbIcon onClick={onHintClick} style={iconStyle} />
        </header>
    );
}
