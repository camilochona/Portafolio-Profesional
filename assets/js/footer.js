class myElement extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({ mode:"open" }) //esto es el modo del shadow DOM
    }
    getTemplate(){
        const template = document.createElement('template')
        template.innerHTML=`    
            <head>  
                <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'>
                <link rel="stylesheet" href="./assets/css/styles.css">
                <link rel="stylesheet" href="assets/css/media-queries.css">
            </head>
            <footer class="footer">
                <div class="footer__container container">
                    <h1 class="footer__title">Camilo Chona</h1>

                    <ul class="footer__list">
                        <li>
                            <a href="#about" class="footer__link">Acerca de</a>
                        </li>
                        <li>
                            <a href="#work" class="footer__link">Proyectos</a>
                        </li>
                        <li>
                            <a href="#education" class="footer__link">Formación</a>
                        </li>
                    </ul>

                    <ul class="footer__social">
                        <a href="https://www.facebook.com/juancamilo.chonacontreras/" target="_blank" class="footer__social-link">
                            <i class='bx bxl-facebook'></i>
                        </a>
                        <a href="https://www.instagram.com/_camilochona/?hl=es-la" target="_blank" class="footer__social-link">
                            <i class='bx bxl-instagram'></i>
                        </a>
                    </ul>
                    
                </div>
            </footer>
        `;        
        return template
    }

    render(){
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true))
    }
    connectedCallback(){
        this.render()
    }
}

customElements.define('my-element', myElement)