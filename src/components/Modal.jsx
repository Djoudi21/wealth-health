export default function Modal({displayModal, text = ''}) {
    console.log('SAVE', displayModal)

    if(!displayModal) return
    return (
        <div id="confirmation" className="modal">{text}</div>
    )
}
