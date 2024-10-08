import React from 'react'

import { Slider } from "@nextui-org/react";

export default function Slidar() {

    return (
      

                <Slider
                    label="Price Range"
                    step={50}
                    minValue={0}
                    maxValue={1000}
                    defaultValue={[100, 500]}
                    formatOptions={{ style: "currency", currency: "USD" }}
                    className="max-w-md pl-10" />
       
    );
}
