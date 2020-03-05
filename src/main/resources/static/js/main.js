import React from "react";

// const name = 'Nicola Virgino';
// const element = <h1>Hello, {name}</h1>;
//     ReactDOM.render(
//         element,
//         document.getElementById('root')
//     );
//
// const e = React.createElement;
// return e(
//     'button',
//     {
//         onClick: () => this.setState({liked: true}),
//     },
//     'Like'
// );

//react offers an option to use JSX instead:
return (
    <button onClick={() => this.setState({
        liked: true
    })}>
        Like
    </button>
);

    // function formatName(user){
    //     return user.firstName + ' ' + user.lastName;
    // }
    // const user = {
    //     firstName: 'Nico',
    //     lastName: 'V'
    // };
    //
    // const element = (
    //     <h1>
    //         Hello, {formatName(user)}!
    //     </h1>
    // );
    // ReactDOM.render(
    //     element,
    //     document.getElementById('root')
    // );

