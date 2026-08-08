export default function Form({ lang, steps, currentStep, lastStepText, changeStep, onSubmit }) {
    return <form onSubmit={onSubmit}>
        {steps[currentStep]}
        <div className={cssStyle.nav}>
            {currentStep && <button className='secondary' type='button' onClick={() => changeStep(currentStep - 1)}>{
                {
                    en: 'Back',
                    vi: 'Trở lại',
                    fr: 'Dos',
                    it: 'Indietro',
                    ko: '뒤쪽에',
                    ja: '戻る',
                    de: 'Zurück',
                    nl: 'Rug',
                    dk: 'Tilbage',
                    pt: 'Voltar',
                    es: 'Atrás',
                    ru: 'Назад',
                }[lang]
            }</button>}
            <button className='primary' type='submit'>{
                currentStep == steps.length ? lastStepText : {
                    en: 'Next',
                    vi: 'Tiếp theo',
                    fr: 'Suivante',
                    it: 'Prossimo',
                    ko: '다음',
                    ja: '次',
                    de: 'Nächste',
                    nl: 'Volgende',
                    dk: 'Næste',
                    pt: 'Próximo',
                    es: 'Próximo',
                    ru: 'Следующий',
                }[lang]
            }</button>
        </div>
    </form>
}