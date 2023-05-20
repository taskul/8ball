const Clicker = () => {
    // it is common to define function separetly
    // just like with JavaScript we can capture events as an object
    const fireLasers = (e) => {
        // console.log(e)
        const data = {name: "Willy Wonka", age: 78}
        // the way it work with cosole.log is that the data in it will be printed out as listed above,
        // however afterwards all fields will be set to null. 
        // if we expand the object we get back we'll see the {name: "Willy Wonka", age: 78} printed out in a console,
        // but the expanded object will have items set to null
        console.log(data);
        console.log('Lasers have been activated')
    }
    // we don't execute or invoke function when we pass it
    return (
        <>
        <button onClick={fireLasers}>Click me!</button>
        <textarea onScroll={fireLasers} rows="2">
        setup: The function with your Effect’s logic. Your setup function may also optionally return a cleanup function. When your component is added to the DOM, React will run your setup function. After every re-render with changed dependencies, React will first run the cleanup function (if you provided it) with the old values, and then run your setup function with the new values. After your component is removed from the DOM, React will run your cleanup function.

        optional dependencies: The list of all reactive values referenced inside of the setup code. Reactive values include props, state, and all the variables and functions declared directly inside your component body. If your linter is configured for React, it will verify that every reactive value is correctly specified as a dependency. The list of dependencies must have a constant number of items and be written inline like [dep1, dep2, dep3]. React will compare each dependency with its previous value using the Object.is comparison. If you omit this argument, your Effect will re-run after every re-render of the component. See the difference between passing an array of dependencies, an empty array, and no dependencies at all.
        </textarea>
        </>
    )
}
export default Clicker;