import React, { useState } from 'react';

import styles from './Calculo.module.css';

function Calculo() {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [imc, setImc] = useState(null);
    const [classificacao, setClassificacao] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (altura && peso) {
            const alturaEmMetros = altura / 100;
            const imcCalculado = (peso / (alturaEmMetros * alturaEmMetros)).toFixed(2);
            setImc(imcCalculado);
            setClassificacao(classificarIMC(imcCalculado));
        }
    };

    const classificarIMC = (imc) => {
        if (imc < 18.5) {
            return 'Abaixo do peso';
        } else if (imc >= 18.5 && imc < 24.9) {
            return 'Peso normal';
        } else if (imc >= 25 && imc < 29.9) {
            return 'Acima do peso';
        } else if (imc >= 30 && imc < 34.9) {
            return 'Obesidade grau 1';
        } else if (imc >= 35 && imc < 40) {
            return 'Obesidade grau 2';
        } else {
            return 'Obesidade grau 3';
        }
    };

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className={styles.form}>
                    <label className={styles.Altura} >Altura (em cm): </label>
                    <input className={styles.Campo} type="number" onChange={(e) => setAltura(e.target.value)} placeholder="Digite a altura" required />
                </div>
                <div className={styles.form}>
                    <label className={styles.Peso} >Peso (em kg): </label>
                    <input className={styles.Campo}  type="number" onChange={(e) => setPeso(e.target.value)} placeholder="Digite o peso" required />
                </div>
                <button className={styles.button} type="submit">Calcular IMC</button>
            </form>
            {imc && (
                <div className={styles.resultado} >
                    <p>Seu IMC é: 
                        <span className={styles.imc} > {imc} </span>
                    </p>
                    <p>Classificado como: 
                    <span className={styles.classificacao} > {classificacao} </span>
                    </p>
                </div>
            )}
        </div>
    );
}

export default Calculo;
