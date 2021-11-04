import React from 'react'
import View from '../Components/View'
import { selectors, useStateValue } from '../data'

export default function About() {
    const [{theme}] = useStateValue()

    return (

        <View>
            <div className={selectors.textColor(theme, 'container')}>
                Hello my name is Erick Pacheco
            </div>
        </View>
    )
}
