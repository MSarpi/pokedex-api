import {  Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { formatearAltura, formatearPeso, formatPokemonName, capitalizeFirstLetter } from "../../../../assets/function/funciones";

export default function MainData({pokemonInfo}) {
    const { t } = useTranslation();

    
    return (
        <div className="background-stats">
        <h4 style={{ textAlign: "center", marginTop: "10px" }}>{t('modal.data.tittle')}</h4>
        <hr/>

        <div>
        <ul style={{ listStyle:"none" }}>
            <li>
            <Row>
                <Col xs={4}  style={{ textAlign:"right", marginBottom: "2px" }}><strong>{t('modal.data.pokemonid')}:</strong></Col>
                <Col xs={8} >{pokemonInfo.id}</Col>
            </Row>
            </li>
            <li>
            <Row>
                <Col xs={4} style={{ textAlign:"right", marginBottom: "2px" }}><strong>{t('modal.data.weight')}:</strong></Col>
                <Col xs={8} >{formatearPeso(pokemonInfo.weight)}kg</Col>
            </Row>
            </li>
            <li>
            <Row>
                <Col xs={4} style={{ textAlign:"right", marginBottom: "2px" }}><strong>{t('modal.data.height')}:</strong></Col>
                <Col xs={8} >{formatearAltura(pokemonInfo.height)}m</Col>
            </Row>
            </li>
            <li>
            <Row>
                <Col xs={4} style={{ textAlign:"right", marginBottom: "10px" }}><strong>{t('modal.data.type')}:</strong></Col>
                <Col xs={8} >{pokemonInfo.types.length === 2 ? (
                <>
                    <span className={`background-${pokemonInfo.types[0].type.name} text-type-1`}>{capitalizeFirstLetter(pokemonInfo.types[0].type.name)}</span>
                    <span className={`background-${pokemonInfo.types[1].type.name} text-type-2`}>{capitalizeFirstLetter(pokemonInfo.types[1].type.name)}</span>
                </>

                ):(
                <>
                    <span className={`background-${pokemonInfo.types[0].type.name} text-type-only`}>{capitalizeFirstLetter(pokemonInfo.types[0].type.name)}</span>
                </>
                )}
                </Col>
            </Row>
            </li>
            <li>
            <Row>
                <Col xs={4} style={{ textAlign:"right" , marginBottom: "10px" }}><strong>{t('modal.data.abilities')}:</strong></Col>
                <Col xs={8}>
                {pokemonInfo.abilities.map((ability, index) => (
                    <span className={`background-${pokemonInfo.types[0].type.name} abilities` } key={index}>
                    {formatPokemonName(capitalizeFirstLetter(ability.ability.name))}
                    </span>
                ))}
                </Col>
            </Row>
            </li>

            <li>
            {/* <Row>
                <Col style={{ textAlign:"right" , marginBottom: "2px" }}><strong>{t('modal.data.abilities')}:</strong></Col>
                <Col>
                {pokemonInfo.moves.slice(0,5).map((move, index) => (
                    
                    <span className="abilities" key={index}>
                    {move.move.name}
                    </span>
                ))}
                </Col>
            </Row> */}
            </li>
        </ul>
        </div>
    </div>
  )
}
