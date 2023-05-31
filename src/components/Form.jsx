import React from 'react'

const Form = () => {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showCard, setShowCard] = useState(false);
    const [cardData, setCardData] = useState({ input1: '', input2: '' });
  
  return (
    <div>Form</div>
  )
}

export default Form