import { Dropdown } from "react-bootstrap";
import i18next from '../../../translation/i18next';
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import Chile from './assets/img/chile.png'
import Eeuu from './assets/img/eeuu.png'
import Japon from './assets/img/japan.png'
import Multi from './assets/img/change-lenguaje.png'
import './style/styles.css'; // Asegúrate de crear este archivo y agregar el CSS

export default function Translation({sidebar}) {
    const { t } = useTranslation();

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage) {
            i18next.changeLanguage(savedLanguage);
        }
    }, []);

    function changeLanguage(language) {
        i18next.changeLanguage(language);
        localStorage.setItem('language', language);
    }

    return (
        
        <>
        {sidebar.miniSidebar ? (
            <Dropdown className="w-100">
            <Dropdown.Toggle variant="success" id="dropdown-basic" className="w-100">
                {/* {t("navbar_footer.select_language")} */}
                <img src={Multi} width={"100%"}/>
            </Dropdown.Toggle>

            <Dropdown.Menu className="w-100">
                <Dropdown.Item onClick={() => changeLanguage("en")} >
                    <img src={Eeuu} alt="English" width={"30%"}/>
                </Dropdown.Item>
                <Dropdown.Item onClick={() => changeLanguage("es")}>
                    <img src={Chile} alt="Español" width={"30%"} />
                </Dropdown.Item>
                <Dropdown.Item onClick={() => changeLanguage("jpn")}>
                    <img src={Japon} alt="日本語" width={"30%"} />
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        ):(
            <Dropdown className="w-100">
                <Dropdown.Toggle variant="success" id="dropdown-basic" className="w-100">
                    {t("navbar_footer.select_language")}
                </Dropdown.Toggle>

                <Dropdown.Menu className="w-100">
                    <Dropdown.Item onClick={() => changeLanguage("en")}>
                        <img src={Eeuu} className="flag-icon" /> English
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => changeLanguage("es")}>
                        <img src={Chile} alt="Español" className="flag-icon" /> Español
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => changeLanguage("jpn")}>
                        <img src={Japon} alt="日本語" className="flag-icon" /> 日本語
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        )}

        </>
    );
}
