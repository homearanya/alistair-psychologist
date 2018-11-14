import React from "react"

import MyContext, { ContextProviderComponent } from "../components/Context"
import Spinner from '../components/Spinner'
import SliderArea from '../components/SliderArea'
import ServicesArea from '../components/ServicesArea'
import AboutArea from '../components/AboutArea'
import BlogArea from '../components/BlogArea'
import TestimonialsArea from '../components/TestimonialsArea'
import FaqArea from '../components/FaqArea'
import PricesArea from '../components/PricesArea'
import AppointmentArea from '../components/AppointmentArea'

export default () => (
    <div>
        <ContextProviderComponent>
            <MyContext.Consumer>
                {({ data }) => data.loadSpinner ? <Spinner /> : null}
            </MyContext.Consumer>
            <SliderArea />
            <ServicesArea />
            <AboutArea />
            <BlogArea />
            <TestimonialsArea />
            <FaqArea />
            <PricesArea />
            <AppointmentArea />
        </ContextProviderComponent>
    </div>
)