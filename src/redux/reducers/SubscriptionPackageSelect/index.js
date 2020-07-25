const initialState = {
    SubscriptionPackageSelect: {}
  };
  
  export const SubscriptionPackageSelect = (state = initialState, action) => {
    switch (action.type) {
      case 'SubscriptionPackageSelect': {
        // console.log(action.payload)
        return { ...state,SubscriptionPackageSelect:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default SubscriptionPackageSelect;