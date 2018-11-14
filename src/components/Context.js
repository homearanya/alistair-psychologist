// Context.js
import React from "react"

const defaultContextValue = {
    data: {
        // set your initial data shape here
        loadSpinner: true,
    },
    set: () => { },
}

const MyContext = React.createContext(defaultContextValue)

class ContextProviderComponent extends React.Component {
    constructor() {
        super()

        this.setData = this.setData.bind(this)
        this.state = {
            ...defaultContextValue,
            set: this.setData,
        }
    }

    setData(newData) {
        this.setState(state => ({
            data: {
                ...state.data,
                ...newData,
            },
        }))
    }

    render() {
        return <MyContext.Provider value={this.state}>{this.props.children}</MyContext.Provider>
    }
}

export { MyContext as default, ContextProviderComponent }