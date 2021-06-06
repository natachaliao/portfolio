import './contact.css';

const Contact = (props) => {
    const { mail } = props;
    return (
        <div id="contact-area">
            <h2 id="contact-title">CONTACT</h2>
            <span>{mail}</span>
        </div>
    )
}

export { Contact };