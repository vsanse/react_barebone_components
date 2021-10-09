import "./RippleButton.scss";

const RippleButton = ({ onClick, type, danger, shape, children, ...rest }) => {

    function createRipple(event) { 
        const button = event.currentTarget;
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
        <button
        className={`ripple__btn app__btn app__btn--${type || "default"} ${
          danger ? "danger" : ""
        } app__btn--${shape ? shape : ""}`}
        {...rest}
        onClick={ createRipple }
      >
        {children}
      </button>
    )
}

export default RippleButton
