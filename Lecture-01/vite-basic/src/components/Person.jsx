
// file name must be .jsx(i.e Person.jsx (not .js)) 

// default export(just one component is default)
// export default function Person(){
    function Person(){
        return (
            <div>
                <h3>Person-1</h3>
            </div>
        )
    }
    
    
    // another way of exporting component
    // named export
    export function Papa(){
        return (
            <div>
                <h3>Hello from Papa</h3>
            </div>
        )
    }
    
    // named export
    export function Mummy(){
        return (
            <div>
                <h3>Hello from Mummy</h3>
            </div>
        )
    }
    
    // default ek hi export ho sakta hai
    export default Person