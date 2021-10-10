import Button from "../Button/Button";
import "./RippleButton.scss";

const RippleButton = ({ onClick, type, danger, shape, children, ...rest }) => {

    function createRipple(event) { 
        const button = event.currentTarget;
        button.classList.add("ripple__btn")
        const circle = document.createElement("span");
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;
    
        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
        circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
        circle.classList.add("ripple");
    
        const ripple = button.getElementsByClassName("ripple")[0];
    
        if (ripple) {
            ripple.remove();
        }
    
        button.appendChild(circle);
        setTimeout(() => {
            if(onClick){
                return onClick()
            }
        },300);
    }

    return (
        <Button onClick={createRipple} {...{ type, danger, shape, children, ...rest} }  >
          Ripple Button
        </Button>
    )
}

export default RippleButton
