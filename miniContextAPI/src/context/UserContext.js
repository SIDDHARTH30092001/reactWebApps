import React from 'react'

const UserContext = React.createContext()

export default UserContext;


//first cr8 above, then we do ->
{/* <Provider> With the help of this provider children under it will get context generated above
    <Insides>...</Insides>
    <TextandAll>..
    ...
        <Stuff></Stuff>
        ..
    </TextandAll>
</Provider> */}
//so we create first context as above and then we need provider which will have access of context also components under itll have usercontext state access
//so we've created UserContextProvider.jsx file