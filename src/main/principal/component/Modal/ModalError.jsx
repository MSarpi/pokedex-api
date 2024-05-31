import { Modal, Button } from 'react-bootstrap';
import PsyduckError from "../../../assets/img/pokemon/psyduck.png"
import { useTranslation } from 'react-i18next';

export default function ModalError({ show, handleClose }) {
    const { t } = useTranslation();
    return (
        <Modal show={show} onHide={handleClose} backdrop="static">
            <Modal.Header closeButton className='header-modal'>
                <Modal.Title>{t("modal.error.tittle")}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p className='text-center'>{t("modal.error.body")}</p>
                <img src={PsyduckError} width={"100%"}/>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                {t("modal.error.footer")}
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
