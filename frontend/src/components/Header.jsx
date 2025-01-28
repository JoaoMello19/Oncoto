import { CircleHelpIcon, LightbulbIcon } from "lucide-react";

export default function Header({ onHelpClick, onHintClick }) {
    const styles = {
        height: 40,
        width: 40,
        cursor: "pointer",
    }
    
    return (
        <header>
            <CircleHelpIcon onClick={onHelpClick} style={styles} />
            <h1>Oncotô</h1>
            <LightbulbIcon onClick={onHintClick} style={styles} />
        </header>
    );
}
