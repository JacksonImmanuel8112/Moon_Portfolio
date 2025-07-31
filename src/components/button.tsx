
export const Button = ({ name = "Contact Me" }) => {
    return (
        <button>
            <span className="circle1"></span>
            <span className="circle2"></span>
            <span className="circle3"></span>
            <span className="circle4"></span>
            <span className="circle5"></span>
            <span className="text">{name}</span>
        </button>
    )
}
