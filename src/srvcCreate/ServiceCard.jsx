import React from "react";

const ServiceCard = () =>{
    return(
        <div className="Service">
            <div>
                <p>Name</p>
            </div>
            <div>
                <img 
                    src='https://via.placeholder.com/400' 
                    alt="service name"
                />
            </div>
            <div>
                <span>Name</span>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Curabitur pharetra, dui id vestibulum luctus, nibh orci luctus orci, vitae lacinia neque tortor non nibh. Mauris ut libero hendrerit, suscipit nisl ut, pulvinar felis.
                </h3>
            </div>
        </div> 
    );
}
export default ServiceCard;