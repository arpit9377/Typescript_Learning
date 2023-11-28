import React, { useState, useEffect, FormEvent } from "react";

interface Istate {
  inputText?: string;
  list?: string[];
  isMatch?: boolean | null;
}

const CheckusinuseEffect: React.FC<Istate> = ({ inputText: defaultText = "", list: defaultList = [], isMatch: defaultMatch = null }) => {
  const [inputText, setInputText] = useState<string>(defaultText);
  const [list, setList] = useState<string[]>(defaultList);
  const [isMatch, setIsMatch] = useState<boolean | null>(defaultMatch);

  useEffect(() => {
    const checkMatch = () => {
      if (list.includes(inputText)) {
        setIsMatch(true);
      } else {
        setIsMatch(false);
      }
    };
    checkMatch();
  }, [inputText, list]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!isMatch) {
      setList([...list, inputText]);
    }
    setInputText("");
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
      {isMatch && <p>Already Exist</p>}
      <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default CheckusinuseEffect;
