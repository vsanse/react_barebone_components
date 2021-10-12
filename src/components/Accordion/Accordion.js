import React from "react";
import "./Accordion.scss";

const AccordianValues =
    [
        {
            "title": "Expandable Item 1",
            "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quisquam cum doloremque esse iste expedita."
        },
        {
            "title": "Expandable Item 2",
            "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quisquam cum doloremque esse iste expedita."
        },
        {
            "title": "Expandable Item 3",
            "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quisquam cum doloremque esse iste expedita."
        }
    ]

const Accordion = () => {
    return (
        <div>
            {
                AccordianValues.map((value, index) => (
                    <section key={index}>
                        <input type="checkbox" id={`item-${index+1}`} className="accordion" />
                        <label for={`item-${index+1}`}>{value.title}</label>
                        <article>{value.desc}</article>
                    </section>
                ))
            }
        </div>
    )
}

export default Accordion
