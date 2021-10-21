import React from 'react';

interface WithLoadingProps {
  loading: boolean,
}

const LoadingSpinner = () => {
  return <p>Loading...</p>
}

const withLoading = (Component:React.ComponentType<object>) => 
  class WithLoading extends React.Component<object & WithLoadingProps> {
    render() {
      const { loading, ...props } = this.props;
      return loading ? <LoadingSpinner /> : <Component {...props as object} />
    }
  }

export { withLoading};