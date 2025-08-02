import { useState, useCallback, useEffect,useRef } from "react";

function App() {
  const [length, setlength] = useState(8);

  const [number, setnumber] = useState(false);

  const [char, setchar] = useState(false);

  const [password, setpassword] = useState("");

  // useref hook

const passwordRef=useRef(null);


  const passwordgenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) str += "0123456789";
    if (char) str += "!@#$%^&*_-+={}[]~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }

    setpassword(pass);
  }, [length, number, char, setpassword]);


  const copypasswordtoclipboard=useCallback(()=>{
    window.navigator.clipboard.writeText(password);// to copy the value it is already present in the js .
    passwordRef.current?.select();// to selct the value 
    passwordRef.current?.setSelectionRange(0,3);// to select the three value we can increase or decrease this value 
  },[password])

  useEffect(()=>{
    passwordgenerator();
  },[length,
    number,
    char, 
    setpassword
  ])
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-white text-center my-3 ">Password generator </h1>
        <div className=" flex shadow-md rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button onClick={copypasswordtoclipboard} className="outline-none  bg-blue-700 text-xl px-3 py-0.5  shrink-0  text-white shadow-md shadow-black">
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />
            <label>Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={number}
              id="numberinput"
              onChange={() => {
                setnumber((prev) => !prev);
              }}
            />
            <label htmlFor="numberinput">Number</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={char}
              id="charinput"
              onChange={() => {
                setnumber((prev) => !prev);
              }}
            />
            <label htmlFor="charinput">Characters</label>
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
