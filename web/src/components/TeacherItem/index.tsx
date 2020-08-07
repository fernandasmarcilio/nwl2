import React from 'react';

import './styles.css';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem() {
    return (
        <article className="teacher-item">

            <header>
                <img
                    src="https://avatars1.githubusercontent.com/u/48814528?s=460&u=32efe9b8dfc7fe0fd7d74f4b1dc997f8f8b69537&v=4"
                    alt="Fernanda Marcilio" />
                <div>
                    <strong>Fernanda Marcilio</strong>
                    <span>Artes</span>
                </div>
            </header>

            <p>
                Entusiasta das variadas técnicas de desenho. <br />
                Apaixonada por dar vida ao desenho através de várias técnicas digitais e manuais. Mais de 1.000 alunos aprenderam essa incrivel habilidade.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>

                <button>
                    <img src={whatsappIcon} alt="whatsapp icon" />
                    Entrar em contato
                </button>
            </footer>

        </article>
    );
}

export default TeacherItem;