import './contact.css';

const Contact = (props) => {
    const { mail } = props;
    return (
        <div id="contact-area">
            <h2 id="contact-title">CONTACT</h2>
            <a href="mailto:natacha-liao@live.fr?subject=Mail depuis portfolio">{mail}</a>
        </div>
    )
}

export { Contact };