export const Footer = () => {
    return (
        <footer id="contact">
            <div className="bg-black text-white">
                <div className="flex justify-center">
                    <span className="m-4">
                        <a href="https://github.com/JacksonImmanuel8112" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i></a>
                    </span>
                    <span className="m-4"><a href="https://www.instagram.com/jackson_immanuel.s/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i></a>
                    </span>
                    <span className="m-4"><a href="https://www.linkedin.com/in/jacksonimmanuels/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i></a>
                    </span>
                </div>
                <div className="py-4 flex w-full justify-center">
                    <div ><small>Copyright © Jackson Immanuel 
                    </small>
                    </div>
                </div>
            </div>
        </footer>
    )
}