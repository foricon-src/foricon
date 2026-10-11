export function OpenModal(elem, actionIfTrue, actionIfFalse) {
    activate(elem);
    
    let { body } = document;
    
    let ok = qSelec(elem, 'div:last-child > a.primary');
    let cancel = qSelec(elem, 'div:last-child > a.secondary');
    
    let checkboxes = qSelec(elem, 'div.checkboxes');
    let uploadFile = qSelec(elem, 'f-upload');
    let input = qSelec(elem, 'input:is([type=&quot;password&quot;], :not([type]))');
    
    qSelecA(checkboxes, 'input')?.forEach(i => i.checked = false);
    
    input && (async () => {
        disable(ok);
        input.value = '';
        input.oninput = () => input.value ? enable(ok) : disable(ok);
        await wait(.2);
        input.focus();
    })()
    uploadFile && (async () => {
        disable(ok);
        uploadFile.onchange = () => uploadFile.files.length ? enable(ok) : disable(ok);
    })()
    
    function getValue() {
        return checkboxes?.children.length ? [...checkboxes.children].map(each => {
                let { checked, value } = each.qSelector('input');
                return checked ? value : null;
            }).filter(each => each) :
            uploadFile ? uploadFile.files :
            input ? input.value : null;
    }
    
    ok.onclick = async () => {
        try {
            let value = getValue();
            uploadFile?.clear();
            disable(body);
            await actionIfTrue?.(value);
            unactive(elem);
        }
        catch (error) {
            notify(
                error instanceof Info ? 'info' :
                error instanceof Warn ? 'warn' :
                'error',
                error.message
            )
        }
        finally {
            enable(body);
        }
    }
    cancel && (cancel.onclick = async () => {
        try {
            let value = getValue();
            uploadFile?.clear();
            disable(body);
            await actionIfFalse?.(value);
            unactive(elem);
        }
        catch (error) {
            notify(
                error instanceof Info ? 'info' :
                error instanceof Warn ? 'warn' :
                'error',
                error.message
            )
        }
        finally {
            enable(body);
        }
    })
}
export function Modal({ children, btns = [], type = '', size = '' }) {
    <div className={'modal' + type + size}>
        <div>
            {children}
            <div>{
                btns.map((btn, i) => <button key={i} className={i ? 'primary' : 'secondary'}>{btn.text}</button>)
            }</div>
        </div>
    </div>
}