import React, { ErrorInfo, ReactElement } from 'react';

interface ErrorBoundaryState {
    hasError: boolean
    errorMessage: string
}

interface ErrorBoundaryProps {
    children: ReactElement
}

export class ErrorBoundaries extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props)
        this.state = {
            hasError: false,
            errorMessage: ""
        }
    }
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        this.setState({ hasError: true })
        this.setState({ errorMessage: error.message })
    }

    render(): React.ReactNode{
        if(this.state?.hasError) {
            return this.state.errorMessage
        }
        return (this.props.children)
    }
}