const initialState = {
    SubscriptionPackage: {}
  };
  
  export const SubscriptionPackage = (state = initialState, action) => {
    switch (action.type) {
      case 'SubscriptionPackage': {
        // console.log(action.payload)
        return { ...state,SubscriptionPackage:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default SubscriptionPackage;