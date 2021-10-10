export default function ResourceCard({ image, title, source }) {
    
    return (
        <div>
            <img src={ image } className="rounded-md" />

            <h1 className="text-lg font-semibold mt-3 leading-6">{ title }</h1>
            <p className="text-gray-400 mt-1">{ source }</p>
        </div>
    )

}


// import React from "react";
// import Editor from "react-simple-code-editor";
// import { highlight, languages } from "prismjs/components/prism-core";
// import "prismjs/components/prism-clike";
// import "prismjs/components/prism-javascript";
// import "prismjs/themes/prism.css"; //Example style, you can use another

// function App() {
//   const [code, setCode] = React.useState(
//     `function add(a, b) {\n  return a + b;\n}`
//   );
//   return (
//     <Editor
//       value={code}
//       onValueChange={(code) => setCode(code)}
//       highlight={(code) => highlight(code, languages.js)}
//       padding={10}
//       style={{
//         fontFamily: '"Fira code", "Fira Mono", monospace',
//         fontSize: 12,
//       }}
//     />
//   );
// }
