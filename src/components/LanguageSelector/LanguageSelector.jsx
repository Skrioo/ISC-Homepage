import { useTranslation } from 'react-i18next';
import './LanguageSelector.css';

export default function LanguageSelector() {
    const { i18n } = useTranslation();
    return (
        <div className='language-selector'>
            <select onChange={(e) => i18n.changeLanguage(e.target.value)}>
                <option value="en">English</option>
                <option value="de">German</option>
            </select>
        </div>
    );
}